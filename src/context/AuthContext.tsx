import React, { createContext, useContext, useEffect, useState } from "react";
import type { User as FirebaseUser } from "firebase/auth";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, getDocFromCache, setDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";

export interface UserProfile {
  uid: string;
  email: string;
  fullName: string;
  role: "Farmer" | "Buyer";
  phone?: string;
  id?: string;
}

interface AuthContextType {
  user: UserProfile | null;
  firebaseUser: FirebaseUser | null;
  loading: boolean;
  register: (
    email: string,
    password: string,
    fullName: string,
    role: "Farmer" | "Buyer",
    phone?: string,
  ) => Promise<UserProfile>;
  login: (email: string, password: string) => Promise<UserProfile>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const normalizeRole = (role: unknown): UserProfile["role"] =>
  role === "Farmer" ? "Farmer" : "Buyer";

const isOfflineFirestoreError = (error: unknown): boolean => {
  if (typeof error === "object" && error !== null && "code" in error) {
    const code = (error as { code?: string }).code;
    return code === "unavailable" || code === "offline" || code === "failed-precondition";
  }
  return false;
};

const getProfileSnapshot = async (userDocRef: ReturnType<typeof doc>) => {
  try {
    return await getDoc(userDocRef);
  } catch (error) {
    if (isOfflineFirestoreError(error)) {
      try {
        return await getDocFromCache(userDocRef);
      } catch {
        return null;
      }
    }
    throw error;
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUserProfile = async (
    fbUser: FirebaseUser,
  ): Promise<UserProfile> => {
    try {
      const userDocRef = doc(db, "users", fbUser.uid);
      const profileSnapshot = await getProfileSnapshot(userDocRef);

      if (profileSnapshot?.exists()) {
        const data = profileSnapshot.data();
        return {
          uid: fbUser.uid,
          email:
            typeof data.email === "string" ? data.email : (fbUser.email ?? ""),
          fullName:
            typeof data.fullName === "string"
              ? data.fullName
              : (fbUser.displayName ?? ""),
          role: normalizeRole(data.role),
          phone: typeof data.phone === "string" ? data.phone : undefined,
          id: profileSnapshot.id,
        };
      }

      return {
        uid: fbUser.uid,
        email: fbUser.email ?? "",
        fullName: fbUser.displayName ?? "",
        role: "Buyer",
        phone: undefined,
        id: fbUser.uid,
      };
    } catch (error) {
      console.error("Error fetching user profile from Firebase:", error);
      return {
        uid: fbUser.uid,
        email: fbUser.email ?? "",
        fullName: fbUser.displayName ?? "",
        role: "Buyer",
        phone: undefined,
        id: fbUser.uid,
      };
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      setLoading(true);
      if (fbUser) {
        setFirebaseUser(fbUser);
        const profile = await fetchUserProfile(fbUser);
        setUser(profile);
      } else {
        setFirebaseUser(null);
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const register = async (
    email: string,
    password: string,
    fullName: string,
    role: "Farmer" | "Buyer",
    phone?: string,
  ): Promise<UserProfile> => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const fbUser = userCredential.user;

      try {
        await setDoc(doc(db, "users", fbUser.uid), {
          uid: fbUser.uid,
          email,
          fullName,
          role,
          phone: phone ?? "",
          createdAt: new Date().toISOString(),
        });
      } catch (error) {
        if (!isOfflineFirestoreError(error)) {
          throw error;
        }
        console.warn("Firestore write skipped while offline; using local profile.");
      }

      const profile = await fetchUserProfile(fbUser);
      setUser(profile);
      setFirebaseUser(fbUser);
      setLoading(false);
      return profile;
    } catch (error: unknown) {
      setLoading(false);
      if (auth.currentUser) {
        await auth.currentUser
          .delete()
          .catch((err) =>
            console.error("Error cleaning up Firebase user:", err),
          );
      }
      throw error;
    }
  };

  const login = async (
    email: string,
    password: string,
  ): Promise<UserProfile> => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const fbUser = userCredential.user;
      const profile = await fetchUserProfile(fbUser);
      setUser(profile);
      setFirebaseUser(fbUser);
      setLoading(false);
      return profile;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      setFirebaseUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, firebaseUser, loading, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

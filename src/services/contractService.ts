import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../config/firebase";
import type { Contract } from "../types/Contract";

export const getContracts = async (): Promise<Contract[]> => {
  const q = query(collection(db, "contracts"), orderBy("createdAt", "desc"));

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Contract[];
};

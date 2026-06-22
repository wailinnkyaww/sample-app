import admin from "firebase-admin";
import fs from "fs";
import path from "path";

// Initialize Firebase Admin SDK if service account is provided and verification is not bypassed
const bypassVerification = process.env.BYPASS_FIREBASE_VERIFICATION === "true";

if (!bypassVerification && admin.apps.length === 0) {
  const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
  if (serviceAccountPath) {
    try {
      const resolvedPath = path.resolve(serviceAccountPath);
      if (fs.existsSync(resolvedPath)) {
        const serviceAccount = JSON.parse(fs.readFileSync(resolvedPath, "utf8"));
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
        });
        console.log("Firebase Admin SDK initialized successfully.");
      } else {
        console.warn(`Firebase service account file not found at: ${resolvedPath}. Falling back to token bypass.`);
      }
    } catch (error) {
      console.error("Failed to initialize Firebase Admin SDK:", error.message);
    }
  } else {
    console.warn("FIREBASE_SERVICE_ACCOUNT_PATH not set. Ensure BYPASS_FIREBASE_VERIFICATION=true for local development.");
  }
}

export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not authorized to access this route, no token provided",
    });
  }

  try {
    if (bypassVerification) {
      // Decode JWT payload without signature verification for easy local testing
      const parts = token.split(".");
      if (parts.length === 3) {
        try {
          const payload = JSON.parse(Buffer.from(parts[1], "base64").toString("utf8"));
          req.user = {
            uid: payload.user_id || payload.uid || payload.sub || "mock_uid_123",
            email: payload.email || "mock_email@example.com",
          };
          return next();
        } catch (e) {
          // Token payload parsing failed, fallback to mock details
          console.warn("Failed to parse token payload in bypass mode:", e.message);
        }
      }
      
      // Fallback for simple/unformatted tokens
      req.user = {
        uid: "mock_uid_123",
        email: "mock_email@example.com",
      };
      return next();
    } else {
      // Perform full verification using Firebase Admin SDK
      if (admin.apps.length === 0) {
        return res.status(500).json({
          success: false,
          message: "Firebase Admin SDK is not initialized. Please verify configuration or enable bypass mode.",
        });
      }

      const decodedToken = await admin.auth().verifyIdToken(token);
      req.user = {
        uid: decodedToken.uid,
        email: decodedToken.email,
      };
      next();
    }
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return res.status(401).json({
      success: false,
      message: "Not authorized, token verification failed",
      error: error.message,
    });
  }
};

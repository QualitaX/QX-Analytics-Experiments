import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import "server-only";

const firebaseAdminConfig = {
  credential: cert({
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  }),
};

const adminApp =
  getApps().find((app) => app.name === "fb-admin") ||
  initializeApp(firebaseAdminConfig, "fb-admin");
// const adminApp = initializeApp();

const db = getFirestore(adminApp);
const auth = getAuth(adminApp);

/* --------------------------------- exports -------------------------------- */
export { adminApp, auth as adminAuth, db as adminDb };

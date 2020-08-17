import admin from "firebase-admin";
import serviceAccountConfig from "./serviceAccountKey";

admin.initializeApp({ credential: admin.credential.cert(serviceAccountConfig) });

export const db = admin.firestore();
export const auth = admin.auth();
export const storage = admin.storage();
export const messaging = admin.messaging();
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

admin.initializeApp();

export const db = admin.firestore();
export const storage = admin.storage();
export const messaging = admin.messaging();
export const logger = functions.logger;

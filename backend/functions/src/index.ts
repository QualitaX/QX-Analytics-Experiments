import App from "@/app";
import * as routes from "@routes/index";
import * as triggers from "@triggers/index";
import * as functions from "firebase-functions";
import path from "path";

declare global {
  var rootdir: string;
}

global.rootdir = path.resolve(__dirname);

/**
 * Versioned api
 */
const api = new App([new routes.api()]);
exports.api = functions.region("europe-west2").https.onRequest(api.getServer());

/**
 * Standalone firebase functions working with background functions trigger
 * #ref: https://firebase.google.com/docs/functions/firestore-events
 */
exports.trigger = triggers;

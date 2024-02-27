import {db} from "@config/firebase.config";
import * as functions from "firebase-functions";

const reset = functions
  .region("europe-west2")
  .pubsub.schedule("0 0 * * *")
  .timeZone("Europe/London")
  .onRun(async _ => {
    const snapshots = await db.collection("users").where("createdDay", "==", new Date().getDate()).get();
    const docs = snapshots.docs;
    docs.forEach(async doc => {
      await doc.ref.update({credit: 30});
    });
  });

exports.reset = reset;

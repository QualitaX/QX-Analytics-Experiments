import * as functions from "firebase-functions";

/**
 * Update Bigquery dataset with Dune query result
 */
const monthlyUpdate = functions
  .region("europe-west2")
  .pubsub.schedule("0 0 1 * *")
  .timeZone("Europe/London")
  .onRun(async _ => {});

exports.monthlyUpdate = monthlyUpdate;

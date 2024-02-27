import {db} from "@/config/firebase.config";
import {excuteQuery} from "@/providers/dune";
import {QueryParameter} from "@cowprotocol/ts-dune-client";
import * as functions from "firebase-functions";

const networks = [
  {
    network: "ethereum",
    queryId: 3448237,
  },
  {network: "avalanche", queryId: 3448237},
  {network: "polygon", queryId: 3448237},
];

/**
 * Update Bigquery dataset with Dune query result
 */
const monthlyUpdate = functions.pubsub
  .schedule("0 0 1 * *")
  .timeZone("Europe/London")
  .onRun(async _ => {
    const now = new Date();
    const fromDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const toDate = new Date();
    toDate.setDate(1);
    toDate.setHours(-1);

    for (const network of networks) {
      const execResult = await excuteQuery(network.queryId, [
        QueryParameter.date("fromDate", fromDate.toString()),
        QueryParameter.date("toDate", toDate),
      ]);
      if (execResult) {
        for (const log of execResult) db.collection("erc3643").doc(network.network).collection("logs").add(log);
      }
    }
  });

exports.monthlyUpdate = monthlyUpdate;

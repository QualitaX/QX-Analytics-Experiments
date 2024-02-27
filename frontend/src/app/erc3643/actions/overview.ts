import { adminDb } from "@/lib/firebase/admin";
import { Convert, erc3643 } from "./schema";

export interface overviewDataset {
  totalTokenContractsDeployed: {
    count: number;
    byNetwork: {
      [key: string]: number;
    };
    byMonth: {
      [key: string]: {
        [key: string]: number;
      };
    };
  };
  listOfTokens: {
    [key: string]: any[];
  };
  whitelistedInvestors: {
    [key: string]: any[];
  };
}

export async function getOverviewData() {
  let res: overviewDataset = {
    totalTokenContractsDeployed: {
      count: 0,
      byNetwork: {
        avalanche: 0,
        ethereum: 0,
        polygon: 0,
      },
      byMonth: {},
    },
    listOfTokens: {
      avalanche: [],
      ethereum: [],
      polygon: [],
    },
    whitelistedInvestors: { avalanche: [], ethereum: [], polygon: [] },
  };
  const snapshots = await adminDb
    .collectionGroup("logs")
    .withConverter<erc3643>({
      fromFirestore: (snapshot) => {
        const data = snapshot.data();
        return Convert.fromFirestore(data);
      },
      toFirestore: (model) => {
        return Convert.toFirestore(model);
      },
    })
    .orderBy("block_date")
    .get();
  snapshots.docs.forEach((snapshot) => {
    var data = snapshot.data();
    res.totalTokenContractsDeployed.count += 1;
    res.totalTokenContractsDeployed.byNetwork[data.network.toLowerCase()] += 1;
    if (!res.totalTokenContractsDeployed.byMonth[data.blockMonth]) {
      res.totalTokenContractsDeployed.byMonth[data.blockMonth] = {
        ethereum: 0,
        avalanche: 0,
        polygon: 0,
      };
    }
    res.totalTokenContractsDeployed.byMonth[data.blockMonth][
      data.network.toLowerCase()
    ] += 1;

    res.listOfTokens[data.network.toLowerCase()].push(data);
    res.whitelistedInvestors[data.network.toLowerCase()].push(data);
  });

  return res;
}

import {DuneClient, QueryParameter} from "@cowprotocol/ts-dune-client";
const {DUNE_API_KEY} = process.env;

const client = new DuneClient(DUNE_API_KEY ?? "");

export async function excuteQuery(id: number, params?: QueryParameter[]) {
  //   const queryID = 1215383;
  //   const parameters = [
  //     QueryParameter.text("TextField", "Plain Text"),
  //     QueryParameter.number("NumberField", 3.1415926535),
  //     QueryParameter.date("DateField", "2022-05-04 00:00:00"),
  //     QueryParameter.enum("ListField", "Option 1"),
  //   ];

  return await client.refresh(id, params).then(executionResult => executionResult.result?.rows);
}

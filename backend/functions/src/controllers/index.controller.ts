import {DuneClient, QueryParameter} from "@cowprotocol/ts-dune-client";
import {SuccessResponse} from "@schemas/response.schema";
import {NextFunction, Request, Response} from "express";
const {DUNE_API_KEY} = process.env;

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };

  public ping = (req: Request, res: Response, next: NextFunction): void => {
    try {
      const client = new DuneClient(DUNE_API_KEY ?? "");
      const queryID = 1215383;
      const parameters = [
        QueryParameter.text("TextField", "Plain Text"),
        QueryParameter.number("NumberField", 3.1415926535),
        QueryParameter.date("DateField", "2022-05-04 00:00:00"),
        QueryParameter.enum("ListField", "Option 1"),
      ];

      // Exclude the debug logs from lower level dependency.
      // console.debug = function () {};

      client.refresh(queryID, parameters).then(executionResult => console.log(executionResult.result?.rows));
      res.status(200).send(new SuccessResponse("pong"));
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;

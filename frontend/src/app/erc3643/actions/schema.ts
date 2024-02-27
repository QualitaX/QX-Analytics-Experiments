// To parse this data:
//
//   import { Convert } from "./file";
//
//   const ERC3643 = Convert.toERC3643(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import {
  PartialWithFieldValue,
  WithFieldValue,
} from "firebase-admin/firestore";

export interface erc3643 {
  network: string;
  dataExtractionDate: string;
  blockTime: string;
  blockNumber: number;
  blockHash: string;
  contractAddress: string;
  topic0: string;
  topic1: string;
  topic2: string;
  topic3: string;
  data: string;
  txHash: string;
  index: number;
  txIndex: number;
  blockDate: string;
  txFrom: string;
  txTo: string;
  blockMy: string;
  blockMonth: string;
  blockYear: string;
  countryCodeHexa: string;
  countryCodeDecoded: string;
  permissionnedTokenName: string;
  industry: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toERC3643(json: string): erc3643[] {
    return cast(JSON.parse(json), a(r("ERC3643")));
  }

  public static erc3643ToJson(value: erc3643[]): string {
    return JSON.stringify(uncast(value, a(r("ERC3643"))), null, 2);
  }

  public static fromFirestore(snapshot: any): erc3643 {
    return cast(snapshot, r("ERC3643"));
  }
  public static toFirestore(erc3643: PartialWithFieldValue<erc3643>) {
    return JSON.parse(
      JSON.stringify(uncast(erc3643, r("ERC3643")), null, 2)
    ) as WithFieldValue<erc3643>;
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ""): never {
  const prettyTyp = prettyTypeName(typ);
  const parentText = parent ? ` on ${parent}` : "";
  const keyText = key ? ` for key "${key}"` : "";
  throw Error(
    `Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(
      val
    )}`
  );
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
    if (typ.length === 2 && typ[0] === undefined) {
      return `an optional ${prettyTypeName(typ[1])}`;
    } else {
      return `one of [${typ
        .map((a) => {
          return prettyTypeName(a);
        })
        .join(", ")}]`;
    }
  } else if (typeof typ === "object" && typ.literal !== undefined) {
    return typ.literal;
  } else {
    return typeof typ;
  }
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(
  val: any,
  typ: any,
  getProps: any,
  key: any = "",
  parent: any = ""
): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key, parent);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val, key, parent);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(
      cases.map((a) => {
        return l(a);
      }),
      val,
      key,
      parent
    );
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue(l("Date"), val, key, parent);
    }
    return d;
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any
  ): any {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue(l(ref || "object"), val, key, parent);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key)
        ? val[key]
        : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, key, ref);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key, ref);
      }
    });
    return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val, key, parent);
  }
  if (typ === false) return invalidValue(typ, val, key, parent);
  let ref: any = undefined;
  while (typeof typ === "object" && typ.ref !== undefined) {
    ref = typ.ref;
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
    return typ.hasOwnProperty("unionMembers")
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems")
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty("props")
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val, key, parent);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
  return { literal: typ };
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  ERC3643: o(
    [
      { json: "Network", js: "network", typ: "" },
      { json: "Data Extraction Date", js: "dataExtractionDate", typ: "" },
      { json: "block_time", js: "blockTime", typ: "" },
      { json: "block_number", js: "blockNumber", typ: 0 },
      { json: "block_hash", js: "blockHash", typ: "" },
      { json: "contract_address", js: "contractAddress", typ: "" },
      { json: "topic0", js: "topic0", typ: "" },
      { json: "topic1", js: "topic1", typ: "" },
      { json: "topic2", js: "topic2", typ: "" },
      { json: "topic3", js: "topic3", typ: "" },
      { json: "data", js: "data", typ: "" },
      { json: "tx_hash", js: "txHash", typ: "" },
      { json: "index", js: "index", typ: 0 },
      { json: "tx_index", js: "txIndex", typ: 0 },
      { json: "block_date", js: "blockDate", typ: "" },
      { json: "tx_from", js: "txFrom", typ: "" },
      { json: "tx_to", js: "txTo", typ: "" },
      { json: "block_my", js: "blockMy", typ: "" },
      { json: "block_month", js: "blockMonth", typ: "" },
      { json: "block_year", js: "blockYear", typ: "" },
      { json: "Country Code Hexa", js: "countryCodeHexa", typ: "" },
      { json: "Country Code Decoded", js: "countryCodeDecoded", typ: "" },
      {
        json: "Permissionned Token Name",
        js: "permissionnedTokenName",
        typ: "",
      },
      { json: "Industry", js: "industry", typ: "" },
    ],
    false
  ),
};

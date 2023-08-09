import * as _79 from "../stargaze/alloc/v1beta1/genesis";
import * as _80 from "../stargaze/alloc/v1beta1/params";
import * as _81 from "../stargaze/alloc/v1beta1/query";
import * as _82 from "../stargaze/alloc/v1beta1/tx";
import * as _83 from "../stargaze/claim/v1beta1/claim_record";
import * as _84 from "../stargaze/claim/v1beta1/genesis";
import * as _85 from "../stargaze/claim/v1beta1/params";
import * as _86 from "../stargaze/claim/v1beta1/query";
import * as _87 from "../stargaze/claim/v1beta1/tx";
import * as _164 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _165 from "../stargaze/claim/v1beta1/tx.amino";
import * as _166 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _167 from "../stargaze/claim/v1beta1/tx.registry";
import * as _168 from "../stargaze/alloc/v1beta1/query.lcd";
import * as _169 from "../stargaze/claim/v1beta1/query.lcd";
import * as _170 from "../stargaze/alloc/v1beta1/query.rpc.Query";
import * as _171 from "../stargaze/claim/v1beta1/query.rpc.Query";
import * as _172 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _173 from "../stargaze/claim/v1beta1/tx.rpc.msg";
import * as _185 from "./lcd";
import * as _186 from "./rpc.query";
import * as _187 from "./rpc.tx";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = {
        ..._79,
        ..._80,
        ..._81,
        ..._82,
        ..._164,
        ..._166,
        ..._168,
        ..._170,
        ..._172
      };
    }
    export namespace claim {
      export const v1beta1 = {
        ..._83,
        ..._84,
        ..._85,
        ..._86,
        ..._87,
        ..._165,
        ..._167,
        ..._169,
        ..._171,
        ..._173
      };
    }
  }
  export const ClientFactory = {
    ..._185,
    ..._186,
    ..._187
  };
}
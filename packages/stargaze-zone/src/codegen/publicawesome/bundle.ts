import * as _82 from "../stargaze/alloc/v1beta1/genesis";
import * as _83 from "../stargaze/alloc/v1beta1/params";
import * as _84 from "../stargaze/alloc/v1beta1/query";
import * as _85 from "../stargaze/alloc/v1beta1/tx";
import * as _86 from "../stargaze/claim/v1beta1/claim_record";
import * as _87 from "../stargaze/claim/v1beta1/genesis";
import * as _88 from "../stargaze/claim/v1beta1/params";
import * as _89 from "../stargaze/claim/v1beta1/query";
import * as _90 from "../stargaze/claim/v1beta1/tx";
import * as _167 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _168 from "../stargaze/claim/v1beta1/tx.amino";
import * as _169 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _170 from "../stargaze/claim/v1beta1/tx.registry";
import * as _171 from "../stargaze/alloc/v1beta1/query.lcd";
import * as _172 from "../stargaze/claim/v1beta1/query.lcd";
import * as _173 from "../stargaze/alloc/v1beta1/query.rpc.query";
import * as _174 from "../stargaze/claim/v1beta1/query.rpc.query";
import * as _175 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _176 from "../stargaze/claim/v1beta1/tx.rpc.msg";
import * as _188 from "./lcd";
import * as _189 from "./rpc.query";
import * as _190 from "./rpc.tx";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = { ..._82,
        ..._83,
        ..._84,
        ..._85,
        ..._167,
        ..._169,
        ..._171,
        ..._173,
        ..._175
      };
    }
    export namespace claim {
      export const v1beta1 = { ..._86,
        ..._87,
        ..._88,
        ..._89,
        ..._90,
        ..._168,
        ..._170,
        ..._172,
        ..._174,
        ..._176
      };
    }
  }
  export const ClientFactory = { ..._188,
    ..._189,
    ..._190
  };
}
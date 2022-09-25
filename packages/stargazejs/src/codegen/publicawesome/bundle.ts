import * as _53 from "../stargaze/alloc/v1beta1/genesis";
import * as _54 from "../stargaze/alloc/v1beta1/params";
import * as _55 from "../stargaze/alloc/v1beta1/query";
import * as _56 from "../stargaze/alloc/v1beta1/tx";
import * as _57 from "../stargaze/claim/v1beta1/claim_record";
import * as _58 from "../stargaze/claim/v1beta1/genesis";
import * as _59 from "../stargaze/claim/v1beta1/params";
import * as _60 from "../stargaze/claim/v1beta1/query";
import * as _61 from "../stargaze/claim/v1beta1/tx";
import * as _113 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _114 from "../stargaze/claim/v1beta1/tx.amino";
import * as _115 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _116 from "../stargaze/claim/v1beta1/tx.registry";
import * as _117 from "../stargaze/alloc/v1beta1/query.lcd";
import * as _118 from "../stargaze/claim/v1beta1/query.lcd";
import * as _119 from "../stargaze/alloc/v1beta1/query.rpc.query";
import * as _120 from "../stargaze/claim/v1beta1/query.rpc.query";
import * as _121 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _122 from "../stargaze/claim/v1beta1/tx.rpc.msg";
import * as _128 from "./lcd";
import * as _129 from "./rpc.query";
import * as _130 from "./rpc.tx";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = { ..._53,
        ..._54,
        ..._55,
        ..._56,
        ..._113,
        ..._115,
        ..._117,
        ..._119,
        ..._121
      };
    }
    export namespace claim {
      export const v1beta1 = { ..._57,
        ..._58,
        ..._59,
        ..._60,
        ..._61,
        ..._114,
        ..._116,
        ..._118,
        ..._120,
        ..._122
      };
    }
  }
  export const ClientFactory = { ..._128,
    ..._129,
    ..._130
  };
}
import * as _104 from "../stargaze/alloc/v1beta1/genesis";
import * as _105 from "../stargaze/alloc/v1beta1/params";
import * as _106 from "../stargaze/alloc/v1beta1/query";
import * as _107 from "../stargaze/alloc/v1beta1/tx";
import * as _108 from "../stargaze/claim/v1beta1/claim_record";
import * as _109 from "../stargaze/claim/v1beta1/genesis";
import * as _110 from "../stargaze/claim/v1beta1/params";
import * as _111 from "../stargaze/claim/v1beta1/query";
import * as _112 from "../stargaze/claim/v1beta1/tx";
import * as _204 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _205 from "../stargaze/claim/v1beta1/tx.amino";
import * as _206 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _207 from "../stargaze/claim/v1beta1/tx.registry";
import * as _208 from "../stargaze/alloc/v1beta1/query.lcd";
import * as _209 from "../stargaze/claim/v1beta1/query.lcd";
import * as _210 from "../stargaze/alloc/v1beta1/query.rpc.query";
import * as _211 from "../stargaze/claim/v1beta1/query.rpc.query";
import * as _212 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _213 from "../stargaze/claim/v1beta1/tx.rpc.msg";
import * as _219 from "./lcd";
import * as _220 from "./rpc.query";
import * as _221 from "./rpc.tx";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = { ..._104,
        ..._105,
        ..._106,
        ..._107,
        ..._204,
        ..._206,
        ..._208,
        ..._210,
        ..._212
      };
    }
    export namespace claim {
      export const v1beta1 = { ..._108,
        ..._109,
        ..._110,
        ..._111,
        ..._112,
        ..._205,
        ..._207,
        ..._209,
        ..._211,
        ..._213
      };
    }
  }
  export const ClientFactory = { ..._219,
    ..._220,
    ..._221
  };
}
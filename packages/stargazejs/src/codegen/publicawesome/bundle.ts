import * as _104 from "../stargaze/alloc/v1beta1/genesis";
import * as _105 from "../stargaze/alloc/v1beta1/params";
import * as _106 from "../stargaze/alloc/v1beta1/query";
import * as _107 from "../stargaze/alloc/v1beta1/tx";
import * as _108 from "../stargaze/claim/v1beta1/claim_record";
import * as _109 from "../stargaze/claim/v1beta1/genesis";
import * as _110 from "../stargaze/claim/v1beta1/params";
import * as _111 from "../stargaze/claim/v1beta1/query";
import * as _112 from "../stargaze/claim/v1beta1/tx";
import * as _158 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _159 from "../stargaze/claim/v1beta1/tx.amino";
import * as _160 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _161 from "../stargaze/claim/v1beta1/tx.registry";
import * as _162 from "../stargaze/alloc/v1beta1/query.lcd";
import * as _163 from "../stargaze/claim/v1beta1/query.lcd";
import * as _164 from "../stargaze/alloc/v1beta1/query.rpc.query";
import * as _165 from "../stargaze/claim/v1beta1/query.rpc.query";
import * as _166 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _167 from "../stargaze/claim/v1beta1/tx.rpc.msg";
import * as _173 from "./lcd";
import * as _174 from "./rpc.query";
import * as _175 from "./rpc.tx";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = { ..._104,
        ..._105,
        ..._106,
        ..._107,
        ..._158,
        ..._160,
        ..._162,
        ..._164,
        ..._166
      };
    }
    export namespace claim {
      export const v1beta1 = { ..._108,
        ..._109,
        ..._110,
        ..._111,
        ..._112,
        ..._159,
        ..._161,
        ..._163,
        ..._165,
        ..._167
      };
    }
  }
  export const ClientFactory = { ..._173,
    ..._174,
    ..._175
  };
}
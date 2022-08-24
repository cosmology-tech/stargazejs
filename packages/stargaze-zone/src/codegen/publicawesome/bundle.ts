import * as _135 from "../stargaze/alloc/v1beta1/genesis";
import * as _136 from "../stargaze/alloc/v1beta1/params";
import * as _137 from "../stargaze/alloc/v1beta1/query";
import * as _138 from "../stargaze/alloc/v1beta1/tx";
import * as _139 from "../stargaze/claim/v1beta1/claim_record";
import * as _140 from "../stargaze/claim/v1beta1/genesis";
import * as _141 from "../stargaze/claim/v1beta1/params";
import * as _142 from "../stargaze/claim/v1beta1/query";
import * as _143 from "../stargaze/claim/v1beta1/tx";
import * as _209 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _210 from "../stargaze/claim/v1beta1/tx.amino";
import * as _211 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _212 from "../stargaze/claim/v1beta1/tx.registry";
import * as _213 from "../stargaze/alloc/v1beta1/query.lcd";
import * as _214 from "../stargaze/claim/v1beta1/query.lcd";
import * as _215 from "../stargaze/alloc/v1beta1/query.rpc.query";
import * as _216 from "../stargaze/claim/v1beta1/query.rpc.query";
import * as _217 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _218 from "../stargaze/claim/v1beta1/tx.rpc.msg";
import * as _230 from "./lcd";
import * as _231 from "./rpc.query";
import * as _232 from "./rpc.tx";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = { ..._135,
        ..._136,
        ..._137,
        ..._138,
        ..._209,
        ..._211,
        ..._213,
        ..._215,
        ..._217
      };
    }
    export namespace claim {
      export const v1beta1 = { ..._139,
        ..._140,
        ..._141,
        ..._142,
        ..._143,
        ..._210,
        ..._212,
        ..._214,
        ..._216,
        ..._218
      };
    }
  }
  export const ClientFactory = { ..._230,
    ..._231,
    ..._232
  };
}
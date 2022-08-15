import * as _135 from "../stargaze/alloc/v1beta1/genesis";
import * as _136 from "../stargaze/alloc/v1beta1/params";
import * as _137 from "../stargaze/alloc/v1beta1/query";
import * as _138 from "../stargaze/alloc/v1beta1/tx";
import * as _139 from "../stargaze/claim/v1beta1/claim_record";
import * as _140 from "../stargaze/claim/v1beta1/genesis";
import * as _141 from "../stargaze/claim/v1beta1/params";
import * as _142 from "../stargaze/claim/v1beta1/query";
import * as _143 from "../stargaze/claim/v1beta1/tx";
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
import * as _225 from "./lcd";
import * as _226 from "./rpc.query";
import * as _227 from "./rpc.tx";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = { ..._135,
        ..._136,
        ..._137,
        ..._138,
        ..._204,
        ..._206,
        ..._208,
        ..._210,
        ..._212
      };
    }
    export namespace claim {
      export const v1beta1 = { ..._139,
        ..._140,
        ..._141,
        ..._142,
        ..._143,
        ..._205,
        ..._207,
        ..._209,
        ..._211,
        ..._213
      };
    }
  }
  export const ClientFactory = { ..._225,
    ..._226,
    ..._227
  };
}
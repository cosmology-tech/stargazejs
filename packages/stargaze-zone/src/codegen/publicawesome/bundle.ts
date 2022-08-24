import * as _135 from "../stargaze/alloc/v1beta1/genesis";
import * as _136 from "../stargaze/alloc/v1beta1/params";
import * as _137 from "../stargaze/alloc/v1beta1/query";
import * as _138 from "../stargaze/alloc/v1beta1/tx";
import * as _139 from "../stargaze/claim/v1beta1/claim_record";
import * as _140 from "../stargaze/claim/v1beta1/genesis";
import * as _141 from "../stargaze/claim/v1beta1/params";
import * as _142 from "../stargaze/claim/v1beta1/query";
import * as _143 from "../stargaze/claim/v1beta1/tx";
import * as _259 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _260 from "../stargaze/claim/v1beta1/tx.amino";
import * as _261 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _262 from "../stargaze/claim/v1beta1/tx.registry";
import * as _263 from "../stargaze/alloc/v1beta1/query.lcd";
import * as _264 from "../stargaze/claim/v1beta1/query.lcd";
import * as _265 from "../stargaze/alloc/v1beta1/query.rpc.query";
import * as _266 from "../stargaze/claim/v1beta1/query.rpc.query";
import * as _267 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _268 from "../stargaze/claim/v1beta1/tx.rpc.msg";
import * as _280 from "./lcd";
import * as _281 from "./rpc.query";
import * as _282 from "./rpc.tx";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = { ..._135,
        ..._136,
        ..._137,
        ..._138,
        ..._259,
        ..._261,
        ..._263,
        ..._265,
        ..._267
      };
    }
    export namespace claim {
      export const v1beta1 = { ..._139,
        ..._140,
        ..._141,
        ..._142,
        ..._143,
        ..._260,
        ..._262,
        ..._264,
        ..._266,
        ..._268
      };
    }
  }
  export const ClientFactory = { ..._280,
    ..._281,
    ..._282
  };
}
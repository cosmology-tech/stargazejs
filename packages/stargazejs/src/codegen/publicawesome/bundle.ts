import * as _135 from "./stargaze/alloc/v1beta1/genesis";
import * as _136 from "./stargaze/alloc/v1beta1/params";
import * as _137 from "./stargaze/alloc/v1beta1/query";
import * as _138 from "./stargaze/alloc/v1beta1/tx";
import * as _139 from "../stargaze/alloc/v1beta1/genesis";
import * as _140 from "../stargaze/alloc/v1beta1/params";
import * as _141 from "../stargaze/alloc/v1beta1/query";
import * as _142 from "../stargaze/alloc/v1beta1/tx";
import * as _143 from "./stargaze/cron/v1/cron";
import * as _144 from "./stargaze/cron/v1/genesis";
import * as _145 from "./stargaze/cron/v1/proposal";
import * as _146 from "./stargaze/cron/v1/query";
import * as _147 from "./stargaze/cron/v1/tx";
import * as _148 from "../stargaze/cron/v1/genesis";
import * as _149 from "../stargaze/cron/v1/proposal";
import * as _150 from "../stargaze/cron/v1/query";
import * as _151 from "./stargaze/globalfee/v1/genesis";
import * as _152 from "./stargaze/globalfee/v1/globalfee";
import * as _153 from "./stargaze/globalfee/v1/proposal";
import * as _154 from "./stargaze/globalfee/v1/query";
import * as _155 from "./stargaze/globalfee/v1/tx";
import * as _156 from "../stargaze/globalfee/v1/genesis";
import * as _157 from "../stargaze/globalfee/v1/globalfee";
import * as _158 from "../stargaze/globalfee/v1/proposal";
import * as _159 from "../stargaze/globalfee/v1/query";
import * as _160 from "../stargaze/globalfee/v1/tx";
import * as _161 from "./stargaze/mint/v1beta1/genesis";
import * as _162 from "./stargaze/mint/v1beta1/mint";
import * as _163 from "./stargaze/mint/v1beta1/query";
import * as _164 from "./stargaze/mint/v1beta1/tx";
import * as _165 from "../stargaze/claim/v1beta1/claim_record";
import * as _166 from "../stargaze/claim/v1beta1/genesis";
import * as _167 from "../stargaze/claim/v1beta1/params";
import * as _168 from "../stargaze/claim/v1beta1/query";
import * as _169 from "../stargaze/claim/v1beta1/tx";
import * as _272 from "./stargaze/alloc/v1beta1/tx.amino";
import * as _273 from "./stargaze/cron/v1/tx.amino";
import * as _274 from "./stargaze/globalfee/v1/tx.amino";
import * as _275 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _276 from "../stargaze/claim/v1beta1/tx.amino";
import * as _277 from "../stargaze/globalfee/v1/tx.amino";
import * as _278 from "./stargaze/alloc/v1beta1/tx.registry";
import * as _279 from "./stargaze/cron/v1/tx.registry";
import * as _280 from "./stargaze/globalfee/v1/tx.registry";
import * as _281 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _282 from "../stargaze/claim/v1beta1/tx.registry";
import * as _283 from "../stargaze/globalfee/v1/tx.registry";
import * as _284 from "./stargaze/alloc/v1beta1/query.lcd";
import * as _285 from "./stargaze/cron/v1/query.lcd";
import * as _286 from "./stargaze/globalfee/v1/query.lcd";
import * as _287 from "./stargaze/mint/v1beta1/query.lcd";
import * as _288 from "../stargaze/alloc/v1beta1/query.lcd";
import * as _289 from "../stargaze/claim/v1beta1/query.lcd";
import * as _290 from "../stargaze/cron/v1/query.lcd";
import * as _291 from "../stargaze/globalfee/v1/query.lcd";
import * as _292 from "./stargaze/alloc/v1beta1/query.rpc.Query";
import * as _293 from "./stargaze/cron/v1/query.rpc.Query";
import * as _294 from "./stargaze/globalfee/v1/query.rpc.Query";
import * as _295 from "./stargaze/mint/v1beta1/query.rpc.Query";
import * as _296 from "../stargaze/alloc/v1beta1/query.rpc.Query";
import * as _297 from "../stargaze/claim/v1beta1/query.rpc.Query";
import * as _298 from "../stargaze/cron/v1/query.rpc.Query";
import * as _299 from "../stargaze/globalfee/v1/query.rpc.Query";
import * as _300 from "./stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _301 from "./stargaze/cron/v1/tx.rpc.msg";
import * as _302 from "./stargaze/globalfee/v1/tx.rpc.msg";
import * as _303 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _304 from "../stargaze/claim/v1beta1/tx.rpc.msg";
import * as _305 from "../stargaze/globalfee/v1/tx.rpc.msg";
import * as _317 from "./lcd";
import * as _318 from "./rpc.query";
import * as _319 from "./rpc.tx";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = {
        ..._135,
        ..._136,
        ..._137,
        ..._138,
        ..._139,
        ..._140,
        ..._141,
        ..._142,
        ..._272,
        ..._275,
        ..._278,
        ..._281,
        ..._284,
        ..._288,
        ..._292,
        ..._296,
        ..._300,
        ..._303
      };
    }
    export namespace cron {
      export const v1 = {
        ..._143,
        ..._144,
        ..._145,
        ..._146,
        ..._147,
        ..._148,
        ..._149,
        ..._150,
        ..._273,
        ..._279,
        ..._285,
        ..._290,
        ..._293,
        ..._298,
        ..._301
      };
    }
    export namespace globalfee {
      export const v1 = {
        ..._151,
        ..._152,
        ..._153,
        ..._154,
        ..._155,
        ..._156,
        ..._157,
        ..._158,
        ..._159,
        ..._160,
        ..._274,
        ..._277,
        ..._280,
        ..._283,
        ..._286,
        ..._291,
        ..._294,
        ..._299,
        ..._302,
        ..._305
      };
    }
    export namespace mint {
      export const v1beta1 = {
        ..._161,
        ..._162,
        ..._163,
        ..._164,
        ..._287,
        ..._295
      };
    }
    export namespace claim {
      export const v1beta1 = {
        ..._165,
        ..._166,
        ..._167,
        ..._168,
        ..._169,
        ..._276,
        ..._282,
        ..._289,
        ..._297,
        ..._304
      };
    }
  }
  export const ClientFactory = {
    ..._317,
    ..._318,
    ..._319
  };
}
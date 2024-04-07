import * as _85 from "./wasm/v1/authz";
import * as _86 from "./wasm/v1/genesis";
import * as _87 from "./wasm/v1/ibc";
import * as _88 from "./wasm/v1/proposal";
import * as _89 from "./wasm/v1/query";
import * as _90 from "./wasm/v1/tx";
import * as _91 from "./wasm/v1/types";
import * as _235 from "./wasm/v1/tx.amino";
import * as _236 from "./wasm/v1/tx.registry";
import * as _237 from "./wasm/v1/query.lcd";
import * as _238 from "./wasm/v1/query.rpc.Query";
import * as _239 from "./wasm/v1/tx.rpc.msg";
import * as _311 from "./lcd";
import * as _312 from "./rpc.query";
import * as _313 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._235,
      ..._236,
      ..._237,
      ..._238,
      ..._239
    };
  }
  export const ClientFactory = {
    ..._311,
    ..._312,
    ..._313
  };
}
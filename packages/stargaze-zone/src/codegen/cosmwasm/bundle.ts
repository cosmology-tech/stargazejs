import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _189 from "./wasm/v1/tx.amino";
import * as _190 from "./wasm/v1/tx.registry";
import * as _191 from "./wasm/v1/query.lcd";
import * as _192 from "./wasm/v1/query.rpc.query";
import * as _193 from "./wasm/v1/tx.rpc.msg";
import * as _219 from "./lcd";
import * as _220 from "./rpc.query";
import * as _221 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._193
    };
  }
  export const ClientFactory = { ..._219,
    ..._220,
    ..._221
  };
}
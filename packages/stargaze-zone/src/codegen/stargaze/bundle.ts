import * as _144 from "./mint/v1beta1/genesis";
import * as _145 from "./mint/v1beta1/mint";
import * as _146 from "./mint/v1beta1/query";
import * as _271 from "./mint/v1beta1/query.lcd";
import * as _272 from "./mint/v1beta1/query.rpc.query";
import * as _285 from "./lcd";
import * as _286 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = { ..._144,
      ..._145,
      ..._146,
      ..._271,
      ..._272
    };
  }
  export const ClientFactory = { ..._285,
    ..._286
  };
}
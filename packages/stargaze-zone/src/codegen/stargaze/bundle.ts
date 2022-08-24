import * as _144 from "./mint/v1beta1/genesis";
import * as _145 from "./mint/v1beta1/mint";
import * as _146 from "./mint/v1beta1/query";
import * as _269 from "./mint/v1beta1/query.lcd";
import * as _270 from "./mint/v1beta1/query.rpc.query";
import * as _283 from "./lcd";
import * as _284 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = { ..._144,
      ..._145,
      ..._146,
      ..._269,
      ..._270
    };
  }
  export const ClientFactory = { ..._283,
    ..._284
  };
}
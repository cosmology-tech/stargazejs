import * as _144 from "./mint/v1beta1/genesis";
import * as _145 from "./mint/v1beta1/mint";
import * as _146 from "./mint/v1beta1/query";
import * as _219 from "./mint/v1beta1/query.lcd";
import * as _220 from "./mint/v1beta1/query.rpc.query";
import * as _233 from "./lcd";
import * as _234 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = { ..._144,
      ..._145,
      ..._146,
      ..._219,
      ..._220
    };
  }
  export const ClientFactory = { ..._233,
    ..._234
  };
}
import * as _113 from "./mint/v1beta1/genesis";
import * as _114 from "./mint/v1beta1/mint";
import * as _115 from "./mint/v1beta1/query";
import * as _168 from "./mint/v1beta1/query.lcd";
import * as _169 from "./mint/v1beta1/query.rpc.query";
import * as _176 from "./lcd";
import * as _177 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = { ..._113,
      ..._114,
      ..._115,
      ..._168,
      ..._169
    };
  }
  export const ClientFactory = { ..._176,
    ..._177
  };
}
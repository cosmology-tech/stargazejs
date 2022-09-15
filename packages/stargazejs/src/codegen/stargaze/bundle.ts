import * as _113 from "./mint/v1beta1/genesis";
import * as _114 from "./mint/v1beta1/mint";
import * as _115 from "./mint/v1beta1/query";
import * as _214 from "./mint/v1beta1/query.lcd";
import * as _215 from "./mint/v1beta1/query.rpc.query";
import * as _222 from "./lcd";
import * as _223 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = { ..._113,
      ..._114,
      ..._115,
      ..._214,
      ..._215
    };
  }
  export const ClientFactory = { ..._222,
    ..._223
  };
}
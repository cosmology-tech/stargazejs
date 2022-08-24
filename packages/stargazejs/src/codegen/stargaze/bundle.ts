import * as _113 from "./mint/v1beta1/genesis";
import * as _114 from "./mint/v1beta1/mint";
import * as _115 from "./mint/v1beta1/query";
import * as _212 from "./mint/v1beta1/query.lcd";
import * as _213 from "./mint/v1beta1/query.rpc.query";
import * as _220 from "./lcd";
import * as _221 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = { ..._113,
      ..._114,
      ..._115,
      ..._212,
      ..._213
    };
  }
  export const ClientFactory = { ..._220,
    ..._221
  };
}
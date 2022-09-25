import * as _62 from "./mint/v1beta1/genesis";
import * as _63 from "./mint/v1beta1/mint";
import * as _64 from "./mint/v1beta1/query";
import * as _123 from "./mint/v1beta1/query.lcd";
import * as _124 from "./mint/v1beta1/query.rpc.query";
import * as _131 from "./lcd";
import * as _132 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = { ..._62,
      ..._63,
      ..._64,
      ..._123,
      ..._124
    };
  }
  export const ClientFactory = { ..._131,
    ..._132
  };
}
import * as _91 from "./mint/v1beta1/genesis";
import * as _92 from "./mint/v1beta1/mint";
import * as _93 from "./mint/v1beta1/query";
import * as _177 from "./mint/v1beta1/query.lcd";
import * as _178 from "./mint/v1beta1/query.rpc.query";
import * as _191 from "./lcd";
import * as _192 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = { ..._91,
      ..._92,
      ..._93,
      ..._177,
      ..._178
    };
  }
  export const ClientFactory = { ..._191,
    ..._192
  };
}
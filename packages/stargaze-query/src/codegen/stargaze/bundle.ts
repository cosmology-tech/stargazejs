import * as _88 from "./mint/v1beta1/genesis";
import * as _89 from "./mint/v1beta1/mint";
import * as _90 from "./mint/v1beta1/query";
import * as _174 from "./mint/v1beta1/query.lcd";
import * as _175 from "./mint/v1beta1/query.rpc.Query";
import * as _188 from "./lcd";
import * as _189 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = {
      ..._88,
      ..._89,
      ..._90,
      ..._174,
      ..._175
    };
  }
  export const ClientFactory = {
    ..._188,
    ..._189
  };
}
import * as _170 from "./mint/v1beta1/genesis";
import * as _171 from "./mint/v1beta1/mint";
import * as _172 from "./mint/v1beta1/query";
import * as _306 from "./mint/v1beta1/query.lcd";
import * as _307 from "./mint/v1beta1/query.rpc.Query";
import * as _320 from "./lcd";
import * as _321 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = {
      ..._170,
      ..._171,
      ..._172,
      ..._306,
      ..._307
    };
  }
  export const ClientFactory = {
    ..._320,
    ..._321
  };
}
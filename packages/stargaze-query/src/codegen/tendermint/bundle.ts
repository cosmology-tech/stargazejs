import * as _91 from "./abci/types";
import * as _92 from "./crypto/keys";
import * as _93 from "./crypto/proof";
import * as _94 from "./libs/bits/types";
import * as _95 from "./p2p/types";
import * as _96 from "./types/block";
import * as _97 from "./types/evidence";
import * as _98 from "./types/params";
import * as _99 from "./types/types";
import * as _100 from "./types/validator";
import * as _101 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._91
  };
  export const crypto = {
    ..._92,
    ..._93
  };
  export namespace libs {
    export const bits = {
      ..._94
    };
  }
  export const p2p = {
    ..._95
  };
  export const types = {
    ..._96,
    ..._97,
    ..._98,
    ..._99,
    ..._100
  };
  export const version = {
    ..._101
  };
}
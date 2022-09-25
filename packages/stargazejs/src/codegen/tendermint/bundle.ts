import * as _65 from "./abci/types";
import * as _66 from "./crypto/keys";
import * as _67 from "./crypto/proof";
import * as _68 from "./libs/bits/types";
import * as _69 from "./p2p/types";
import * as _70 from "./types/block";
import * as _71 from "./types/evidence";
import * as _72 from "./types/params";
import * as _73 from "./types/types";
import * as _74 from "./types/validator";
import * as _75 from "./version/types";
export namespace tendermint {
  export const abci = { ..._65
  };
  export const crypto = { ..._66,
    ..._67
  };
  export namespace libs {
    export const bits = { ..._68
    };
  }
  export const p2p = { ..._69
  };
  export const types = { ..._70,
    ..._71,
    ..._72,
    ..._73,
    ..._74
  };
  export const version = { ..._75
  };
}
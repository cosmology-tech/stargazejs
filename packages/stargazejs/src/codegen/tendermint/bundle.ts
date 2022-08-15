import * as _116 from "./abci/types";
import * as _117 from "./crypto/keys";
import * as _118 from "./crypto/proof";
import * as _119 from "./libs/bits/types";
import * as _120 from "./p2p/types";
import * as _121 from "./types/block";
import * as _122 from "./types/evidence";
import * as _123 from "./types/params";
import * as _124 from "./types/types";
import * as _125 from "./types/validator";
import * as _126 from "./version/types";
export namespace tendermint {
  export const abci = { ..._116
  };
  export const crypto = { ..._117,
    ..._118
  };
  export namespace libs {
    export const bits = { ..._119
    };
  }
  export const p2p = { ..._120
  };
  export const types = { ..._121,
    ..._122,
    ..._123,
    ..._124,
    ..._125
  };
  export const version = { ..._126
  };
}
import * as _111 from "./applications/transfer/v1/genesis";
import * as _112 from "./applications/transfer/v1/query";
import * as _113 from "./applications/transfer/v1/transfer";
import * as _114 from "./applications/transfer/v1/tx";
import * as _115 from "./applications/transfer/v2/packet";
import * as _116 from "./core/channel/v1/channel";
import * as _117 from "./core/channel/v1/genesis";
import * as _118 from "./core/channel/v1/query";
import * as _119 from "./core/channel/v1/tx";
import * as _120 from "./core/client/v1/client";
import * as _121 from "./core/client/v1/genesis";
import * as _122 from "./core/client/v1/query";
import * as _123 from "./core/client/v1/tx";
import * as _124 from "./core/commitment/v1/commitment";
import * as _125 from "./core/connection/v1/connection";
import * as _126 from "./core/connection/v1/genesis";
import * as _127 from "./core/connection/v1/query";
import * as _128 from "./core/connection/v1/tx";
import * as _129 from "./core/port/v1/query";
import * as _130 from "./core/types/v1/genesis";
import * as _131 from "./lightclients/localhost/v1/localhost";
import * as _132 from "./lightclients/solomachine/v1/solomachine";
import * as _133 from "./lightclients/solomachine/v2/solomachine";
import * as _134 from "./lightclients/tendermint/v1/tendermint";
import * as _238 from "./applications/transfer/v1/tx.amino";
import * as _239 from "./core/channel/v1/tx.amino";
import * as _240 from "./core/client/v1/tx.amino";
import * as _241 from "./core/connection/v1/tx.amino";
import * as _242 from "./applications/transfer/v1/tx.registry";
import * as _243 from "./core/channel/v1/tx.registry";
import * as _244 from "./core/client/v1/tx.registry";
import * as _245 from "./core/connection/v1/tx.registry";
import * as _246 from "./applications/transfer/v1/query.lcd";
import * as _247 from "./core/channel/v1/query.lcd";
import * as _248 from "./core/client/v1/query.lcd";
import * as _249 from "./core/connection/v1/query.lcd";
import * as _250 from "./applications/transfer/v1/query.rpc.query";
import * as _251 from "./core/channel/v1/query.rpc.query";
import * as _252 from "./core/client/v1/query.rpc.query";
import * as _253 from "./core/connection/v1/query.rpc.query";
import * as _254 from "./core/port/v1/query.rpc.query";
import * as _255 from "./applications/transfer/v1/tx.rpc.msg";
import * as _256 from "./core/channel/v1/tx.rpc.msg";
import * as _257 from "./core/client/v1/tx.rpc.msg";
import * as _258 from "./core/connection/v1/tx.rpc.msg";
import * as _277 from "./lcd";
import * as _278 from "./rpc.query";
import * as _279 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._111,
        ..._112,
        ..._113,
        ..._114,
        ..._238,
        ..._242,
        ..._246,
        ..._250,
        ..._255
      };
      export const v2 = { ..._115
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._116,
        ..._117,
        ..._118,
        ..._119,
        ..._239,
        ..._243,
        ..._247,
        ..._251,
        ..._256
      };
    }
    export namespace client {
      export const v1 = { ..._120,
        ..._121,
        ..._122,
        ..._123,
        ..._240,
        ..._244,
        ..._248,
        ..._252,
        ..._257
      };
    }
    export namespace commitment {
      export const v1 = { ..._124
      };
    }
    export namespace connection {
      export const v1 = { ..._125,
        ..._126,
        ..._127,
        ..._128,
        ..._241,
        ..._245,
        ..._249,
        ..._253,
        ..._258
      };
    }
    export namespace port {
      export const v1 = { ..._129,
        ..._254
      };
    }
    export namespace types {
      export const v1 = { ..._130
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._131
      };
    }
    export namespace solomachine {
      export const v1 = { ..._132
      };
      export const v2 = { ..._133
      };
    }
    export namespace tendermint {
      export const v1 = { ..._134
      };
    }
  }
  export const ClientFactory = { ..._277,
    ..._278,
    ..._279
  };
}
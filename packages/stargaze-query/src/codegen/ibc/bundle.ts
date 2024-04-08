import * as _97 from "./applications/fee/v1/ack";
import * as _98 from "./applications/fee/v1/fee";
import * as _99 from "./applications/fee/v1/genesis";
import * as _100 from "./applications/fee/v1/metadata";
import * as _101 from "./applications/fee/v1/query";
import * as _102 from "./applications/fee/v1/tx";
import * as _103 from "./applications/interchain_accounts/controller/v1/controller";
import * as _104 from "./applications/interchain_accounts/controller/v1/query";
import * as _105 from "./applications/interchain_accounts/controller/v1/tx";
import * as _106 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _107 from "./applications/interchain_accounts/host/v1/host";
import * as _108 from "./applications/interchain_accounts/host/v1/query";
import * as _109 from "./applications/interchain_accounts/v1/account";
import * as _110 from "./applications/interchain_accounts/v1/metadata";
import * as _111 from "./applications/interchain_accounts/v1/packet";
import * as _112 from "./applications/transfer/v1/authz";
import * as _113 from "./applications/transfer/v1/genesis";
import * as _114 from "./applications/transfer/v1/query";
import * as _115 from "./applications/transfer/v1/transfer";
import * as _116 from "./applications/transfer/v1/tx";
import * as _117 from "./applications/transfer/v2/packet";
import * as _118 from "./core/channel/v1/channel";
import * as _119 from "./core/channel/v1/genesis";
import * as _120 from "./core/channel/v1/query";
import * as _121 from "./core/channel/v1/tx";
import * as _122 from "./core/client/v1/client";
import * as _123 from "./core/client/v1/genesis";
import * as _124 from "./core/client/v1/query";
import * as _125 from "./core/client/v1/tx";
import * as _126 from "./core/commitment/v1/commitment";
import * as _127 from "./core/connection/v1/connection";
import * as _128 from "./core/connection/v1/genesis";
import * as _129 from "./core/connection/v1/query";
import * as _130 from "./core/connection/v1/tx";
import * as _131 from "./lightclients/localhost/v2/localhost";
import * as _132 from "./lightclients/solomachine/v2/solomachine";
import * as _133 from "./lightclients/solomachine/v3/solomachine";
import * as _134 from "./lightclients/tendermint/v1/tendermint";
import * as _240 from "./applications/fee/v1/tx.amino";
import * as _241 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _242 from "./applications/transfer/v1/tx.amino";
import * as _243 from "./core/channel/v1/tx.amino";
import * as _244 from "./core/client/v1/tx.amino";
import * as _245 from "./core/connection/v1/tx.amino";
import * as _246 from "./applications/fee/v1/tx.registry";
import * as _247 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _248 from "./applications/transfer/v1/tx.registry";
import * as _249 from "./core/channel/v1/tx.registry";
import * as _250 from "./core/client/v1/tx.registry";
import * as _251 from "./core/connection/v1/tx.registry";
import * as _252 from "./applications/fee/v1/query.lcd";
import * as _253 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _254 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _255 from "./applications/transfer/v1/query.lcd";
import * as _256 from "./core/channel/v1/query.lcd";
import * as _257 from "./core/client/v1/query.lcd";
import * as _258 from "./core/connection/v1/query.lcd";
import * as _259 from "./applications/fee/v1/query.rpc.Query";
import * as _260 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _261 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _262 from "./applications/transfer/v1/query.rpc.Query";
import * as _263 from "./core/channel/v1/query.rpc.Query";
import * as _264 from "./core/client/v1/query.rpc.Query";
import * as _265 from "./core/connection/v1/query.rpc.Query";
import * as _266 from "./applications/fee/v1/tx.rpc.msg";
import * as _267 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _268 from "./applications/transfer/v1/tx.rpc.msg";
import * as _269 from "./core/channel/v1/tx.rpc.msg";
import * as _270 from "./core/client/v1/tx.rpc.msg";
import * as _271 from "./core/connection/v1/tx.rpc.msg";
import * as _314 from "./lcd";
import * as _315 from "./rpc.query";
import * as _316 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._97,
        ..._98,
        ..._99,
        ..._100,
        ..._101,
        ..._102,
        ..._240,
        ..._246,
        ..._252,
        ..._259,
        ..._266
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._103,
          ..._104,
          ..._105,
          ..._241,
          ..._247,
          ..._253,
          ..._260,
          ..._267
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._106
        };
      }
      export namespace host {
        export const v1 = {
          ..._107,
          ..._108,
          ..._254,
          ..._261
        };
      }
      export const v1 = {
        ..._109,
        ..._110,
        ..._111
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._112,
        ..._113,
        ..._114,
        ..._115,
        ..._116,
        ..._242,
        ..._248,
        ..._255,
        ..._262,
        ..._268
      };
      export const v2 = {
        ..._117
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._118,
        ..._119,
        ..._120,
        ..._121,
        ..._243,
        ..._249,
        ..._256,
        ..._263,
        ..._269
      };
    }
    export namespace client {
      export const v1 = {
        ..._122,
        ..._123,
        ..._124,
        ..._125,
        ..._244,
        ..._250,
        ..._257,
        ..._264,
        ..._270
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._126
      };
    }
    export namespace connection {
      export const v1 = {
        ..._127,
        ..._128,
        ..._129,
        ..._130,
        ..._245,
        ..._251,
        ..._258,
        ..._265,
        ..._271
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._131
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._132
      };
      export const v3 = {
        ..._133
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._134
      };
    }
  }
  export const ClientFactory = {
    ..._314,
    ..._315,
    ..._316
  };
}
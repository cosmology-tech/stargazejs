import * as _1 from "./authz/v1beta1/authz";
import * as _2 from "./authz/v1beta1/event";
import * as _3 from "./authz/v1beta1/genesis";
import * as _4 from "./authz/v1beta1/query";
import * as _5 from "./authz/v1beta1/tx";
import * as _6 from "./bank/v1beta1/authz";
import * as _7 from "./bank/v1beta1/bank";
import * as _8 from "./bank/v1beta1/genesis";
import * as _9 from "./bank/v1beta1/query";
import * as _10 from "./bank/v1beta1/tx";
import * as _11 from "./base/abci/v1beta1/abci";
import * as _12 from "./base/query/v1beta1/pagination";
import * as _13 from "./base/reflection/v2alpha1/reflection";
import * as _14 from "./base/v1beta1/coin";
import * as _15 from "./crypto/ed25519/keys";
import * as _16 from "./crypto/hd/v1/hd";
import * as _17 from "./crypto/keyring/v1/record";
import * as _18 from "./crypto/multisig/keys";
import * as _19 from "./crypto/secp256k1/keys";
import * as _20 from "./crypto/secp256r1/keys";
import * as _21 from "./distribution/v1beta1/distribution";
import * as _22 from "./distribution/v1beta1/genesis";
import * as _23 from "./distribution/v1beta1/query";
import * as _24 from "./distribution/v1beta1/tx";
import * as _25 from "./gov/v1/genesis";
import * as _26 from "./gov/v1/gov";
import * as _27 from "./gov/v1/query";
import * as _28 from "./gov/v1/tx";
import * as _29 from "./gov/v1beta1/genesis";
import * as _30 from "./gov/v1beta1/gov";
import * as _31 from "./gov/v1beta1/query";
import * as _32 from "./gov/v1beta1/tx";
import * as _33 from "./staking/v1beta1/authz";
import * as _34 from "./staking/v1beta1/genesis";
import * as _35 from "./staking/v1beta1/query";
import * as _36 from "./staking/v1beta1/staking";
import * as _37 from "./staking/v1beta1/tx";
import * as _38 from "./tx/signing/v1beta1/signing";
import * as _39 from "./tx/v1beta1/service";
import * as _40 from "./tx/v1beta1/tx";
import * as _41 from "./upgrade/v1beta1/query";
import * as _42 from "./upgrade/v1beta1/tx";
import * as _43 from "./upgrade/v1beta1/upgrade";
import * as _76 from "./authz/v1beta1/tx.amino";
import * as _77 from "./bank/v1beta1/tx.amino";
import * as _78 from "./distribution/v1beta1/tx.amino";
import * as _79 from "./gov/v1/tx.amino";
import * as _80 from "./gov/v1beta1/tx.amino";
import * as _81 from "./staking/v1beta1/tx.amino";
import * as _82 from "./upgrade/v1beta1/tx.amino";
import * as _83 from "./authz/v1beta1/tx.registry";
import * as _84 from "./bank/v1beta1/tx.registry";
import * as _85 from "./distribution/v1beta1/tx.registry";
import * as _86 from "./gov/v1/tx.registry";
import * as _87 from "./gov/v1beta1/tx.registry";
import * as _88 from "./staking/v1beta1/tx.registry";
import * as _89 from "./upgrade/v1beta1/tx.registry";
import * as _90 from "./authz/v1beta1/query.lcd";
import * as _91 from "./bank/v1beta1/query.lcd";
import * as _92 from "./distribution/v1beta1/query.lcd";
import * as _93 from "./gov/v1/query.lcd";
import * as _94 from "./gov/v1beta1/query.lcd";
import * as _95 from "./staking/v1beta1/query.lcd";
import * as _96 from "./tx/v1beta1/service.lcd";
import * as _97 from "./upgrade/v1beta1/query.lcd";
import * as _98 from "./authz/v1beta1/query.rpc.query";
import * as _99 from "./bank/v1beta1/query.rpc.query";
import * as _100 from "./distribution/v1beta1/query.rpc.query";
import * as _101 from "./gov/v1/query.rpc.query";
import * as _102 from "./gov/v1beta1/query.rpc.query";
import * as _103 from "./staking/v1beta1/query.rpc.query";
import * as _104 from "./tx/v1beta1/service.rpc.svc";
import * as _105 from "./upgrade/v1beta1/query.rpc.query";
import * as _106 from "./authz/v1beta1/tx.rpc.msg";
import * as _107 from "./bank/v1beta1/tx.rpc.msg";
import * as _108 from "./distribution/v1beta1/tx.rpc.msg";
import * as _109 from "./gov/v1/tx.rpc.msg";
import * as _110 from "./gov/v1beta1/tx.rpc.msg";
import * as _111 from "./staking/v1beta1/tx.rpc.msg";
import * as _112 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _125 from "./lcd";
import * as _126 from "./rpc.query";
import * as _127 from "./rpc.tx";
export namespace cosmos {
  export namespace authz {
    export const v1beta1 = { ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._76,
      ..._83,
      ..._90,
      ..._98,
      ..._106
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._77,
      ..._84,
      ..._91,
      ..._99,
      ..._107
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._11
      };
    }
    export namespace query {
      export const v1beta1 = { ..._12
      };
    }
    export namespace reflection {
      export const v2alpha1 = { ..._13
      };
    }
    export const v1beta1 = { ..._14
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._15
    };
    export namespace hd {
      export const v1 = { ..._16
      };
    }
    export namespace keyring {
      export const v1 = { ..._17
      };
    }
    export const multisig = { ..._18
    };
    export const secp256k1 = { ..._19
    };
    export const secp256r1 = { ..._20
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._78,
      ..._85,
      ..._92,
      ..._100,
      ..._108
    };
  }
  export namespace gov {
    export const v1 = { ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._79,
      ..._86,
      ..._93,
      ..._101,
      ..._109
    };
    export const v1beta1 = { ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._80,
      ..._87,
      ..._94,
      ..._102,
      ..._110
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._81,
      ..._88,
      ..._95,
      ..._103,
      ..._111
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._38
      };
    }
    export const v1beta1 = { ..._39,
      ..._40,
      ..._96,
      ..._104
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._41,
      ..._42,
      ..._43,
      ..._82,
      ..._89,
      ..._97,
      ..._105,
      ..._112
    };
  }
  export const ClientFactory = { ..._125,
    ..._126,
    ..._127
  };
}
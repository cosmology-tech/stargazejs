import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/** Params holds parameters for the cron module. */
export interface Params {
  /**
   * Addresses which act as admins of the module. They can promote and demote
   * contracts without having to go via governance.
   */
  adminAddresses: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/publicawesome.stargaze.cron.v1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the cron module. */
export interface ParamsAmino {
  /**
   * Addresses which act as admins of the module. They can promote and demote
   * contracts without having to go via governance.
   */
  admin_addresses?: string[];
}
export interface ParamsAminoMsg {
  type: "/publicawesome.stargaze.cron.v1.Params";
  value: ParamsAmino;
}
/** Params holds parameters for the cron module. */
export interface ParamsSDKType {
  admin_addresses: string[];
}
function createBaseParams(): Params {
  return {
    adminAddresses: []
  };
}
export const Params = {
  typeUrl: "/publicawesome.stargaze.cron.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.adminAddresses) && (!o.adminAddresses.length || typeof o.adminAddresses[0] === "string"));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.admin_addresses) && (!o.admin_addresses.length || typeof o.admin_addresses[0] === "string"));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.admin_addresses) && (!o.admin_addresses.length || typeof o.admin_addresses[0] === "string"));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.adminAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.adminAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.adminAddresses = object.adminAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.adminAddresses = object.admin_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.adminAddresses) {
      obj.admin_addresses = message.adminAddresses.map(e => e);
    } else {
      obj.admin_addresses = message.adminAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.cron.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
import { Action, actionFromJSON, actionToJSON } from "./claim_record";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface MsgInitialClaim {
  sender: string;
}
export interface MsgInitialClaimResponse {
  /** total initial claimable amount for the user */
  claimed_amount: Coin[];
}
export interface MsgClaimFor {
  sender: string;
  address: string;
  action: Action;
}
export interface MsgClaimForResponse {
  address: string;

  /** total initial claimable amount for the user */
  claimed_amount: Coin[];
}

function createBaseMsgInitialClaim(): MsgInitialClaim {
  return {
    sender: ""
  };
}

export const MsgInitialClaim = {
  encode(message: MsgInitialClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitialClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitialClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgInitialClaim {
    return {
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },

  toJSON(message: MsgInitialClaim): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgInitialClaim>): MsgInitialClaim {
    const message = createBaseMsgInitialClaim();
    message.sender = object.sender ?? "";
    return message;
  }

};

function createBaseMsgInitialClaimResponse(): MsgInitialClaimResponse {
  return {
    claimed_amount: []
  };
}

export const MsgInitialClaimResponse = {
  encode(message: MsgInitialClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claimed_amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitialClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitialClaimResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.claimed_amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgInitialClaimResponse {
    return {
      claimed_amount: Array.isArray(object?.claimed_amount) ? object.claimed_amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgInitialClaimResponse): unknown {
    const obj: any = {};

    if (message.claimed_amount) {
      obj.claimed_amount = message.claimed_amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.claimed_amount = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgInitialClaimResponse>): MsgInitialClaimResponse {
    const message = createBaseMsgInitialClaimResponse();
    message.claimed_amount = object.claimed_amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgClaimFor(): MsgClaimFor {
  return {
    sender: "",
    address: "",
    action: 0
  };
}

export const MsgClaimFor = {
  encode(message: MsgClaimFor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.action !== 0) {
      writer.uint32(24).int32(message.action);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimFor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimFor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.action = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgClaimFor {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      address: isSet(object.address) ? String(object.address) : "",
      action: isSet(object.action) ? actionFromJSON(object.action) : 0
    };
  },

  toJSON(message: MsgClaimFor): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.address !== undefined && (obj.address = message.address);
    message.action !== undefined && (obj.action = actionToJSON(message.action));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClaimFor>): MsgClaimFor {
    const message = createBaseMsgClaimFor();
    message.sender = object.sender ?? "";
    message.address = object.address ?? "";
    message.action = object.action ?? 0;
    return message;
  }

};

function createBaseMsgClaimForResponse(): MsgClaimForResponse {
  return {
    address: "",
    claimed_amount: []
  };
}

export const MsgClaimForResponse = {
  encode(message: MsgClaimForResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    for (const v of message.claimed_amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimForResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimForResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.claimed_amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgClaimForResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      claimed_amount: Array.isArray(object?.claimed_amount) ? object.claimed_amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgClaimForResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);

    if (message.claimed_amount) {
      obj.claimed_amount = message.claimed_amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.claimed_amount = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgClaimForResponse>): MsgClaimForResponse {
    const message = createBaseMsgClaimForResponse();
    message.address = object.address ?? "";
    message.claimed_amount = object.claimed_amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};
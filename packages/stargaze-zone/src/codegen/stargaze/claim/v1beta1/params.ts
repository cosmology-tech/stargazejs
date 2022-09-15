import { Action, actionFromJSON, actionToJSON } from "./claim_record";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp } from "@osmonauts/helpers";
export interface ClaimAuthorization {
  contract_address: string;
  action: Action;
}

/** Params defines the claim module's parameters. */
export interface Params {
  airdrop_enabled: boolean;
  airdrop_start_time: Date;
  duration_until_decay: Duration;
  duration_of_decay: Duration;

  /** denom of claimable asset */
  claim_denom: string;

  /** list of contracts and their allowed claim actions */
  allowed_claimers: ClaimAuthorization[];
}

function createBaseClaimAuthorization(): ClaimAuthorization {
  return {
    contract_address: "",
    action: 0
  };
}

export const ClaimAuthorization = {
  encode(message: ClaimAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contract_address !== "") {
      writer.uint32(10).string(message.contract_address);
    }

    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimAuthorization();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contract_address = reader.string();
          break;

        case 2:
          message.action = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClaimAuthorization {
    return {
      contract_address: isSet(object.contract_address) ? String(object.contract_address) : "",
      action: isSet(object.action) ? actionFromJSON(object.action) : 0
    };
  },

  toJSON(message: ClaimAuthorization): unknown {
    const obj: any = {};
    message.contract_address !== undefined && (obj.contract_address = message.contract_address);
    message.action !== undefined && (obj.action = actionToJSON(message.action));
    return obj;
  },

  fromPartial(object: DeepPartial<ClaimAuthorization>): ClaimAuthorization {
    const message = createBaseClaimAuthorization();
    message.contract_address = object.contract_address ?? "";
    message.action = object.action ?? 0;
    return message;
  }

};

function createBaseParams(): Params {
  return {
    airdrop_enabled: false,
    airdrop_start_time: undefined,
    duration_until_decay: undefined,
    duration_of_decay: undefined,
    claim_denom: "",
    allowed_claimers: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdrop_enabled === true) {
      writer.uint32(8).bool(message.airdrop_enabled);
    }

    if (message.airdrop_start_time !== undefined) {
      Timestamp.encode(toTimestamp(message.airdrop_start_time), writer.uint32(18).fork()).ldelim();
    }

    if (message.duration_until_decay !== undefined) {
      Duration.encode(message.duration_until_decay, writer.uint32(26).fork()).ldelim();
    }

    if (message.duration_of_decay !== undefined) {
      Duration.encode(message.duration_of_decay, writer.uint32(34).fork()).ldelim();
    }

    if (message.claim_denom !== "") {
      writer.uint32(42).string(message.claim_denom);
    }

    for (const v of message.allowed_claimers) {
      ClaimAuthorization.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.airdrop_enabled = reader.bool();
          break;

        case 2:
          message.airdrop_start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.duration_until_decay = Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.duration_of_decay = Duration.decode(reader, reader.uint32());
          break;

        case 5:
          message.claim_denom = reader.string();
          break;

        case 6:
          message.allowed_claimers.push(ClaimAuthorization.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      airdrop_enabled: isSet(object.airdrop_enabled) ? Boolean(object.airdrop_enabled) : false,
      airdrop_start_time: isSet(object.airdrop_start_time) ? fromJsonTimestamp(object.airdrop_start_time) : undefined,
      duration_until_decay: isSet(object.duration_until_decay) ? Duration.fromJSON(object.duration_until_decay) : undefined,
      duration_of_decay: isSet(object.duration_of_decay) ? Duration.fromJSON(object.duration_of_decay) : undefined,
      claim_denom: isSet(object.claim_denom) ? String(object.claim_denom) : "",
      allowed_claimers: Array.isArray(object?.allowed_claimers) ? object.allowed_claimers.map((e: any) => ClaimAuthorization.fromJSON(e)) : []
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.airdrop_enabled !== undefined && (obj.airdrop_enabled = message.airdrop_enabled);
    message.airdrop_start_time !== undefined && (obj.airdrop_start_time = message.airdrop_start_time.toISOString());
    message.duration_until_decay !== undefined && (obj.duration_until_decay = message.duration_until_decay);
    message.duration_of_decay !== undefined && (obj.duration_of_decay = message.duration_of_decay);
    message.claim_denom !== undefined && (obj.claim_denom = message.claim_denom);

    if (message.allowed_claimers) {
      obj.allowed_claimers = message.allowed_claimers.map(e => e ? ClaimAuthorization.toJSON(e) : undefined);
    } else {
      obj.allowed_claimers = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.airdrop_enabled = object.airdrop_enabled ?? false;
    message.airdrop_start_time = object.airdrop_start_time ?? undefined;
    message.duration_until_decay = object.duration_until_decay ?? undefined;
    message.duration_of_decay = object.duration_of_decay ?? undefined;
    message.claim_denom = object.claim_denom ?? "";
    message.allowed_claimers = object.allowed_claimers?.map(e => ClaimAuthorization.fromPartial(e)) || [];
    return message;
  }

};
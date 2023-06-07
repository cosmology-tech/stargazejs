import { Action } from "./claim_record";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
export interface ClaimAuthorization {
  contractAddress: string;
  action: Action;
}
export interface ClaimAuthorizationSDKType {
  contract_address: string;
  action: Action;
}
/** Params defines the claim module's parameters. */
export interface Params {
  airdropEnabled: boolean;
  airdropStartTime?: Date;
  durationUntilDecay?: Duration;
  durationOfDecay?: Duration;
  /** denom of claimable asset */
  claimDenom: string;
  /** list of contracts and their allowed claim actions */
  allowedClaimers: ClaimAuthorization[];
}
/** Params defines the claim module's parameters. */
export interface ParamsSDKType {
  airdrop_enabled: boolean;
  airdrop_start_time?: Date;
  duration_until_decay?: DurationSDKType;
  duration_of_decay?: DurationSDKType;
  claim_denom: string;
  allowed_claimers: ClaimAuthorizationSDKType[];
}
function createBaseClaimAuthorization(): ClaimAuthorization {
  return {
    contractAddress: "",
    action: 0
  };
}
export const ClaimAuthorization = {
  encode(message: ClaimAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
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
          message.contractAddress = reader.string();
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
  fromPartial(object: DeepPartial<ClaimAuthorization>): ClaimAuthorization {
    const message = createBaseClaimAuthorization();
    message.contractAddress = object.contractAddress ?? "";
    message.action = object.action ?? 0;
    return message;
  }
};
function createBaseParams(): Params {
  return {
    airdropEnabled: false,
    airdropStartTime: undefined,
    durationUntilDecay: undefined,
    durationOfDecay: undefined,
    claimDenom: "",
    allowedClaimers: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropEnabled === true) {
      writer.uint32(8).bool(message.airdropEnabled);
    }
    if (message.airdropStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.airdropStartTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.durationUntilDecay !== undefined) {
      Duration.encode(message.durationUntilDecay, writer.uint32(26).fork()).ldelim();
    }
    if (message.durationOfDecay !== undefined) {
      Duration.encode(message.durationOfDecay, writer.uint32(34).fork()).ldelim();
    }
    if (message.claimDenom !== "") {
      writer.uint32(42).string(message.claimDenom);
    }
    for (const v of message.allowedClaimers) {
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
          message.airdropEnabled = reader.bool();
          break;
        case 2:
          message.airdropStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.durationUntilDecay = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.durationOfDecay = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.claimDenom = reader.string();
          break;
        case 6:
          message.allowedClaimers.push(ClaimAuthorization.decode(reader, reader.uint32()));
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
    message.airdropEnabled = object.airdropEnabled ?? false;
    message.airdropStartTime = object.airdropStartTime ?? undefined;
    message.durationUntilDecay = object.durationUntilDecay !== undefined && object.durationUntilDecay !== null ? Duration.fromPartial(object.durationUntilDecay) : undefined;
    message.durationOfDecay = object.durationOfDecay !== undefined && object.durationOfDecay !== null ? Duration.fromPartial(object.durationOfDecay) : undefined;
    message.claimDenom = object.claimDenom ?? "";
    message.allowedClaimers = object.allowedClaimers?.map(e => ClaimAuthorization.fromPartial(e)) || [];
    return message;
  }
};
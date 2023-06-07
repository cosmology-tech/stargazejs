import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Minter represents the minting state. */
export interface Minter {
  /** current annual expected provisions */
  annualProvisions: string;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
  annual_provisions: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** the time the chain starts */
  startTime?: Date;
  /** initial annual provisions */
  initialAnnualProvisions: string;
  /** factor to reduce inflation by each year */
  reductionFactor: string;
  /** expected blocks per year */
  blocksPerYear: Long;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
  mint_denom: string;
  start_time?: Date;
  initial_annual_provisions: string;
  reduction_factor: string;
  blocks_per_year: Long;
}
function createBaseMinter(): Minter {
  return {
    annualProvisions: ""
  };
}
export const Minter = {
  encode(message: Minter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.annualProvisions !== "") {
      writer.uint32(10).string(message.annualProvisions);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Minter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annualProvisions = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.annualProvisions = object.annualProvisions ?? "";
    return message;
  }
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    startTime: undefined,
    initialAnnualProvisions: "",
    reductionFactor: "",
    blocksPerYear: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.initialAnnualProvisions !== "") {
      writer.uint32(26).string(message.initialAnnualProvisions);
    }
    if (message.reductionFactor !== "") {
      writer.uint32(34).string(message.reductionFactor);
    }
    if (!message.blocksPerYear.isZero()) {
      writer.uint32(40).uint64(message.blocksPerYear);
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
          message.mintDenom = reader.string();
          break;
        case 2:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.initialAnnualProvisions = reader.string();
          break;
        case 4:
          message.reductionFactor = reader.string();
          break;
        case 5:
          message.blocksPerYear = (reader.uint64() as Long);
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
    message.mintDenom = object.mintDenom ?? "";
    message.startTime = object.startTime ?? undefined;
    message.initialAnnualProvisions = object.initialAnnualProvisions ?? "";
    message.reductionFactor = object.reductionFactor ?? "";
    message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? Long.fromValue(object.blocksPerYear) : Long.UZERO;
    return message;
  }
};
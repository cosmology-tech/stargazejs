import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, Long, fromJsonTimestamp } from "@osmonauts/helpers";

/** Minter represents the minting state. */
export interface Minter {
  /** current annual expected provisions */
  annualProvisions: string;
}

/** Params holds parameters for the mint module. */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;

  /** the time the chain starts */
  startTime: Date;

  /** initial annual provisions */
  initialAnnualProvisions: string;

  /** factor to reduce inflation by each year */
  reductionFactor: string;

  /** expected blocks per year */
  blocksPerYear: Long;
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

  fromJSON(object: any): Minter {
    return {
      annualProvisions: isSet(object.annualProvisions) ? String(object.annualProvisions) : ""
    };
  },

  toJSON(message: Minter): unknown {
    const obj: any = {};
    message.annualProvisions !== undefined && (obj.annualProvisions = message.annualProvisions);
    return obj;
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

  fromJSON(object: any): Params {
    return {
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      initialAnnualProvisions: isSet(object.initialAnnualProvisions) ? String(object.initialAnnualProvisions) : "",
      reductionFactor: isSet(object.reductionFactor) ? String(object.reductionFactor) : "",
      blocksPerYear: isSet(object.blocksPerYear) ? Long.fromString(object.blocksPerYear) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.initialAnnualProvisions !== undefined && (obj.initialAnnualProvisions = message.initialAnnualProvisions);
    message.reductionFactor !== undefined && (obj.reductionFactor = message.reductionFactor);
    message.blocksPerYear !== undefined && (obj.blocksPerYear = (message.blocksPerYear || Long.UZERO).toString());
    return obj;
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
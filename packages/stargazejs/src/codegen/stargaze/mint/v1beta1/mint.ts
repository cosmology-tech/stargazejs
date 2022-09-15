import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, Long, fromJsonTimestamp } from "@osmonauts/helpers";

/** Minter represents the minting state. */
export interface Minter {
  /** current annual expected provisions */
  annual_provisions: string;
}

/** Params holds parameters for the mint module. */
export interface Params {
  /** type of coin to mint */
  mint_denom: string;

  /** the time the chain starts */
  start_time: Date;

  /** initial annual provisions */
  initial_annual_provisions: string;

  /** factor to reduce inflation by each year */
  reduction_factor: string;

  /** expected blocks per year */
  blocks_per_year: Long;
}

function createBaseMinter(): Minter {
  return {
    annual_provisions: ""
  };
}

export const Minter = {
  encode(message: Minter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.annual_provisions !== "") {
      writer.uint32(10).string(message.annual_provisions);
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
          message.annual_provisions = reader.string();
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
      annual_provisions: isSet(object.annual_provisions) ? String(object.annual_provisions) : ""
    };
  },

  toJSON(message: Minter): unknown {
    const obj: any = {};
    message.annual_provisions !== undefined && (obj.annual_provisions = message.annual_provisions);
    return obj;
  },

  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.annual_provisions = object.annual_provisions ?? "";
    return message;
  }

};

function createBaseParams(): Params {
  return {
    mint_denom: "",
    start_time: undefined,
    initial_annual_provisions: "",
    reduction_factor: "",
    blocks_per_year: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mint_denom !== "") {
      writer.uint32(10).string(message.mint_denom);
    }

    if (message.start_time !== undefined) {
      Timestamp.encode(toTimestamp(message.start_time), writer.uint32(18).fork()).ldelim();
    }

    if (message.initial_annual_provisions !== "") {
      writer.uint32(26).string(message.initial_annual_provisions);
    }

    if (message.reduction_factor !== "") {
      writer.uint32(34).string(message.reduction_factor);
    }

    if (!message.blocks_per_year.isZero()) {
      writer.uint32(40).uint64(message.blocks_per_year);
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
          message.mint_denom = reader.string();
          break;

        case 2:
          message.start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.initial_annual_provisions = reader.string();
          break;

        case 4:
          message.reduction_factor = reader.string();
          break;

        case 5:
          message.blocks_per_year = (reader.uint64() as Long);
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
      mint_denom: isSet(object.mint_denom) ? String(object.mint_denom) : "",
      start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
      initial_annual_provisions: isSet(object.initial_annual_provisions) ? String(object.initial_annual_provisions) : "",
      reduction_factor: isSet(object.reduction_factor) ? String(object.reduction_factor) : "",
      blocks_per_year: isSet(object.blocks_per_year) ? Long.fromString(object.blocks_per_year) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mint_denom !== undefined && (obj.mint_denom = message.mint_denom);
    message.start_time !== undefined && (obj.start_time = message.start_time.toISOString());
    message.initial_annual_provisions !== undefined && (obj.initial_annual_provisions = message.initial_annual_provisions);
    message.reduction_factor !== undefined && (obj.reduction_factor = message.reduction_factor);
    message.blocks_per_year !== undefined && (obj.blocks_per_year = (message.blocks_per_year || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.mint_denom = object.mint_denom ?? "";
    message.start_time = object.start_time ?? undefined;
    message.initial_annual_provisions = object.initial_annual_provisions ?? "";
    message.reduction_factor = object.reduction_factor ?? "";
    message.blocks_per_year = object.blocks_per_year !== undefined && object.blocks_per_year !== null ? Long.fromValue(object.blocks_per_year) : Long.UZERO;
    return message;
  }

};
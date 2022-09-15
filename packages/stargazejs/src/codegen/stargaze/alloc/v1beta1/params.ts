import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface WeightedAddress {
  address: string;
  weight: string;
}
export interface DistributionProportions {
  nft_incentives: string;
  developer_rewards: string;
}
export interface Params {
  /** distribution_proportions defines the proportion of the minted denom */
  distribution_proportions: DistributionProportions;

  /** address to receive developer rewards */
  weighted_developer_rewards_receivers: WeightedAddress[];
}

function createBaseWeightedAddress(): WeightedAddress {
  return {
    address: "",
    weight: ""
  };
}

export const WeightedAddress = {
  encode(message: WeightedAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WeightedAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedAddress();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.weight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WeightedAddress {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },

  toJSON(message: WeightedAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial(object: DeepPartial<WeightedAddress>): WeightedAddress {
    const message = createBaseWeightedAddress();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    return message;
  }

};

function createBaseDistributionProportions(): DistributionProportions {
  return {
    nft_incentives: "",
    developer_rewards: ""
  };
}

export const DistributionProportions = {
  encode(message: DistributionProportions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nft_incentives !== "") {
      writer.uint32(10).string(message.nft_incentives);
    }

    if (message.developer_rewards !== "") {
      writer.uint32(18).string(message.developer_rewards);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DistributionProportions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionProportions();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nft_incentives = reader.string();
          break;

        case 2:
          message.developer_rewards = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DistributionProportions {
    return {
      nft_incentives: isSet(object.nft_incentives) ? String(object.nft_incentives) : "",
      developer_rewards: isSet(object.developer_rewards) ? String(object.developer_rewards) : ""
    };
  },

  toJSON(message: DistributionProportions): unknown {
    const obj: any = {};
    message.nft_incentives !== undefined && (obj.nft_incentives = message.nft_incentives);
    message.developer_rewards !== undefined && (obj.developer_rewards = message.developer_rewards);
    return obj;
  },

  fromPartial(object: DeepPartial<DistributionProportions>): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.nft_incentives = object.nft_incentives ?? "";
    message.developer_rewards = object.developer_rewards ?? "";
    return message;
  }

};

function createBaseParams(): Params {
  return {
    distribution_proportions: undefined,
    weighted_developer_rewards_receivers: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distribution_proportions !== undefined) {
      DistributionProportions.encode(message.distribution_proportions, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.weighted_developer_rewards_receivers) {
      WeightedAddress.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.distribution_proportions = DistributionProportions.decode(reader, reader.uint32());
          break;

        case 2:
          message.weighted_developer_rewards_receivers.push(WeightedAddress.decode(reader, reader.uint32()));
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
      distribution_proportions: isSet(object.distribution_proportions) ? DistributionProportions.fromJSON(object.distribution_proportions) : undefined,
      weighted_developer_rewards_receivers: Array.isArray(object?.weighted_developer_rewards_receivers) ? object.weighted_developer_rewards_receivers.map((e: any) => WeightedAddress.fromJSON(e)) : []
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.distribution_proportions !== undefined && (obj.distribution_proportions = message.distribution_proportions ? DistributionProportions.toJSON(message.distribution_proportions) : undefined);

    if (message.weighted_developer_rewards_receivers) {
      obj.weighted_developer_rewards_receivers = message.weighted_developer_rewards_receivers.map(e => e ? WeightedAddress.toJSON(e) : undefined);
    } else {
      obj.weighted_developer_rewards_receivers = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.distribution_proportions = object.distribution_proportions !== undefined && object.distribution_proportions !== null ? DistributionProportions.fromPartial(object.distribution_proportions) : undefined;
    message.weighted_developer_rewards_receivers = object.weighted_developer_rewards_receivers?.map(e => WeightedAddress.fromPartial(e)) || [];
    return message;
  }

};
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { ClaimRecord } from "./claim_record";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** GenesisState defines the claim module's genesis state. */
export interface GenesisState {
  /**
   * this line is used by starport scaffolding # genesis/proto/state
   * balance of the claim module's account
   */
  module_account_balance: Coin;

  /** params defines all the parameters of the module. */
  params: Params;

  /** list of claim records, one for every airdrop recipient */
  claim_records: ClaimRecord[];
}

function createBaseGenesisState(): GenesisState {
  return {
    module_account_balance: undefined,
    params: undefined,
    claim_records: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module_account_balance !== undefined) {
      Coin.encode(message.module_account_balance, writer.uint32(10).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.claim_records) {
      ClaimRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.module_account_balance = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 3:
          message.claim_records.push(ClaimRecord.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      module_account_balance: isSet(object.module_account_balance) ? Coin.fromJSON(object.module_account_balance) : undefined,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      claim_records: Array.isArray(object?.claim_records) ? object.claim_records.map((e: any) => ClaimRecord.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.module_account_balance !== undefined && (obj.module_account_balance = message.module_account_balance ? Coin.toJSON(message.module_account_balance) : undefined);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.claim_records) {
      obj.claim_records = message.claim_records.map(e => e ? ClaimRecord.toJSON(e) : undefined);
    } else {
      obj.claim_records = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.module_account_balance = object.module_account_balance !== undefined && object.module_account_balance !== null ? Coin.fromPartial(object.module_account_balance) : undefined;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.claim_records = object.claim_records?.map(e => ClaimRecord.fromPartial(e)) || [];
    return message;
  }

};
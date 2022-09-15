import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export enum Action {
  ActionInitialClaim = 0,
  ActionBidNFT = 1,
  ActionMintNFT = 2,
  ActionVote = 3,
  ActionDelegateStake = 4,
  UNRECOGNIZED = -1,
}
export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case "ActionInitialClaim":
      return Action.ActionInitialClaim;

    case 1:
    case "ActionBidNFT":
      return Action.ActionBidNFT;

    case 2:
    case "ActionMintNFT":
      return Action.ActionMintNFT;

    case 3:
    case "ActionVote":
      return Action.ActionVote;

    case 4:
    case "ActionDelegateStake":
      return Action.ActionDelegateStake;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Action.UNRECOGNIZED;
  }
}
export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.ActionInitialClaim:
      return "ActionInitialClaim";

    case Action.ActionBidNFT:
      return "ActionBidNFT";

    case Action.ActionMintNFT:
      return "ActionMintNFT";

    case Action.ActionVote:
      return "ActionVote";

    case Action.ActionDelegateStake:
      return "ActionDelegateStake";

    default:
      return "UNKNOWN";
  }
}
export interface ClaimRecord {
  /** address of claim user */
  address: string;

  /** total initial claimable amount for the user */
  initial_claimable_amount: Coin[];

  /**
   * true if action is completed
   * index of bool in array refers to action enum #
   */
  action_completed: boolean[];
}

function createBaseClaimRecord(): ClaimRecord {
  return {
    address: "",
    initial_claimable_amount: [],
    action_completed: []
  };
}

export const ClaimRecord = {
  encode(message: ClaimRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    for (const v of message.initial_claimable_amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    writer.uint32(34).fork();

    for (const v of message.action_completed) {
      writer.bool(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.initial_claimable_amount.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.action_completed.push(reader.bool());
            }
          } else {
            message.action_completed.push(reader.bool());
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClaimRecord {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      initial_claimable_amount: Array.isArray(object?.initial_claimable_amount) ? object.initial_claimable_amount.map((e: any) => Coin.fromJSON(e)) : [],
      action_completed: Array.isArray(object?.action_completed) ? object.action_completed.map((e: any) => Boolean(e)) : []
    };
  },

  toJSON(message: ClaimRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);

    if (message.initial_claimable_amount) {
      obj.initial_claimable_amount = message.initial_claimable_amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.initial_claimable_amount = [];
    }

    if (message.action_completed) {
      obj.action_completed = message.action_completed.map(e => e);
    } else {
      obj.action_completed = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ClaimRecord>): ClaimRecord {
    const message = createBaseClaimRecord();
    message.address = object.address ?? "";
    message.initial_claimable_amount = object.initial_claimable_amount?.map(e => Coin.fromPartial(e)) || [];
    message.action_completed = object.action_completed?.map(e => e) || [];
    return message;
  }

};
/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Addr, Uint128, ConfigResponse, MinterConfigForEmpty, Empty, Coin, ExecuteMsg, Timestamp, Uint64, Decimal, InstantiateMsg, CreateMinterMsgForNullable_Empty, CollectionParams, CollectionInfoForRoyaltyInfoResponse, RoyaltyInfoResponse, MinterParamsForNullable_Empty, QueryMsg, StatusResponse, Status } from "./BaseMinter.types";
export interface BaseMinterMessage {
  contractAddress: string;
  sender: string;
  mint: ({
    tokenUri
  }: {
    tokenUri: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateTradingStartTime: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class BaseMinterMessageComposer implements BaseMinterMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.mint = this.mint.bind(this);
    this.updateTradingStartTime = this.updateTradingStartTime.bind(this);
  }

  mint = ({
    tokenUri
  }: {
    tokenUri: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          mint: {
            token_uri: tokenUri
          }
        })),
        funds
      })
    };
  };
  updateTradingStartTime = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_trading_start_time: {}
        })),
        funds
      })
    };
  };
}
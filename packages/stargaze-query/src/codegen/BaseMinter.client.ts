/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Decimal, Timestamp, Uint64, Uint128, InstantiateMsg, CreateMinterMsgForNullable_Empty, CollectionParams, CollectionInfoForRoyaltyInfoResponse, RoyaltyInfoResponse, Empty, MinterParamsForNullable_Empty, Coin, ExecuteMsg } from "./BaseMinter.types";
export interface BaseMinterInterface {
  contractAddress: string;
  sender: string;
  mint: ({
    tokenUri
  }: {
    tokenUri: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateStartTradingTime: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class BaseMinterClient implements BaseMinterInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.mint = this.mint.bind(this);
    this.updateStartTradingTime = this.updateStartTradingTime.bind(this);
  }

  mint = async ({
    tokenUri
  }: {
    tokenUri: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint: {
        token_uri: tokenUri
      }
    }, fee, memo, _funds);
  };
  updateStartTradingTime = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_start_trading_time: {}
    }, fee, memo, _funds);
  };
}
/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Uint128, InstantiateMsg, Coin, ExecuteMsg, Timestamp, Uint64, QueryMsg, QueryOptionsForTupleOfStringAndString, QueryOptionsForTupleOfuint64AndTupleOfStringAndString, Addr, AuctionResponse, Auction, HighBid, AuctionsResponse, ConfigResponse, Config } from "./ReserveAuction.types";
export interface ReserveAuctionMessage {
  contractAddress: string;
  sender: string;
  createAuction: ({
    collection,
    endTime,
    reservePrice,
    sellerFundsRecipient,
    startTime,
    tokenId
  }: {
    collection: string;
    endTime: Timestamp;
    reservePrice: Coin;
    sellerFundsRecipient?: string;
    startTime: Timestamp;
    tokenId: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateReservePrice: ({
    collection,
    reservePrice,
    tokenId
  }: {
    collection: string;
    reservePrice: Coin;
    tokenId: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  cancelAuction: ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  placeBid: ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  settleAuction: ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class ReserveAuctionMessageComposer implements ReserveAuctionMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.createAuction = this.createAuction.bind(this);
    this.updateReservePrice = this.updateReservePrice.bind(this);
    this.cancelAuction = this.cancelAuction.bind(this);
    this.placeBid = this.placeBid.bind(this);
    this.settleAuction = this.settleAuction.bind(this);
  }

  createAuction = ({
    collection,
    endTime,
    reservePrice,
    sellerFundsRecipient,
    startTime,
    tokenId
  }: {
    collection: string;
    endTime: Timestamp;
    reservePrice: Coin;
    sellerFundsRecipient?: string;
    startTime: Timestamp;
    tokenId: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          create_auction: {
            collection,
            end_time: endTime,
            reserve_price: reservePrice,
            seller_funds_recipient: sellerFundsRecipient,
            start_time: startTime,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  updateReservePrice = ({
    collection,
    reservePrice,
    tokenId
  }: {
    collection: string;
    reservePrice: Coin;
    tokenId: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_reserve_price: {
            collection,
            reserve_price: reservePrice,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  cancelAuction = ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          cancel_auction: {
            collection,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  placeBid = ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          place_bid: {
            collection,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  settleAuction = ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          settle_auction: {
            collection,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
}
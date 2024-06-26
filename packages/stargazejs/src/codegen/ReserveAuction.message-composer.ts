/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Uint128, Decimal, InstantiateMsg, Coin, ExecuteMsg, QueryMsg, QueryOptionsForMinReservePriceOffset, MinReservePriceOffset, QueryOptionsForAuctionKeyOffset, AuctionKeyOffset, NullableAuction, Addr, Timestamp, Uint64, Auction, HighBid, ArrayOfAuction, Config, HaltManager, HaltWindow, ArrayOfCoin } from "./ReserveAuction.types";
export interface ReserveAuctionMsg {
  contractAddress: string;
  sender: string;
  createAuction: ({
    collection,
    duration,
    reservePrice,
    sellerFundsRecipient,
    tokenId
  }: {
    collection: string;
    duration: number;
    reservePrice: Coin;
    sellerFundsRecipient?: string;
    tokenId: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateReservePrice: ({
    collection,
    reservePrice,
    tokenId
  }: {
    collection: string;
    reservePrice: Coin;
    tokenId: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  cancelAuction: ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  placeBid: ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  settleAuction: ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class ReserveAuctionMsgComposer implements ReserveAuctionMsg {
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
    duration,
    reservePrice,
    sellerFundsRecipient,
    tokenId
  }: {
    collection: string;
    duration: number;
    reservePrice: Coin;
    sellerFundsRecipient?: string;
    tokenId: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          create_auction: {
            collection,
            duration,
            reserve_price: reservePrice,
            seller_funds_recipient: sellerFundsRecipient,
            token_id: tokenId
          }
        })),
        funds: _funds
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
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
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
        funds: _funds
      })
    };
  };
  cancelAuction = ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
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
        funds: _funds
      })
    };
  };
  placeBid = ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
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
        funds: _funds
      })
    };
  };
  settleAuction = ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
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
        funds: _funds
      })
    };
  };
}
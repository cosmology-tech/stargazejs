/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Uint128, Duration, InstantiateMsg, ExpiryRange, ExecuteMsg, Timestamp, Uint64, SaleType, Coin, QueryMsg, Addr, AskOffset, CollectionOffset, BidOffset, CollectionBidOffset, AsksResponse, Ask, AskCountResponse, HooksResponse, BidResponse, Bid, BidsResponse, CollectionBidResponse, CollectionBid, CollectionsResponse, Decimal, ParamsResponse, SudoParams } from "./Marketplace.types";
export interface MarketplaceMessage {
  contractAddress: string;
  sender: string;
  setAsk: ({
    collection,
    expires,
    findersFeeBps,
    fundsRecipient,
    price,
    reserveFor,
    saleType,
    tokenId
  }: {
    collection: string;
    expires: Timestamp;
    findersFeeBps?: number;
    fundsRecipient?: string;
    price: Coin;
    reserveFor?: string;
    saleType: SaleType;
    tokenId: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeAsk: ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateAskPrice: ({
    collection,
    price,
    tokenId
  }: {
    collection: string;
    price: Coin;
    tokenId: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  setBid: ({
    collection,
    expires,
    finder,
    findersFeeBps,
    saleType,
    tokenId
  }: {
    collection: string;
    expires: Timestamp;
    finder?: string;
    findersFeeBps?: number;
    saleType: SaleType;
    tokenId: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  buyNow: ({
    collection,
    expires,
    finder,
    findersFeeBps,
    tokenId
  }: {
    collection: string;
    expires: Timestamp;
    finder?: string;
    findersFeeBps?: number;
    tokenId: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeBid: ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  acceptBid: ({
    bidder,
    collection,
    finder,
    tokenId
  }: {
    bidder: string;
    collection: string;
    finder?: string;
    tokenId: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  rejectBid: ({
    bidder,
    collection,
    tokenId
  }: {
    bidder: string;
    collection: string;
    tokenId: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  setCollectionBid: ({
    collection,
    expires,
    findersFeeBps
  }: {
    collection: string;
    expires: Timestamp;
    findersFeeBps?: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeCollectionBid: ({
    collection
  }: {
    collection: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  acceptCollectionBid: ({
    bidder,
    collection,
    finder,
    tokenId
  }: {
    bidder: string;
    collection: string;
    finder?: string;
    tokenId: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  syncAsk: ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeStaleAsk: ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeStaleBid: ({
    bidder,
    collection,
    tokenId
  }: {
    bidder: string;
    collection: string;
    tokenId: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeStaleCollectionBid: ({
    bidder,
    collection
  }: {
    bidder: string;
    collection: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class MarketplaceMessageComposer implements MarketplaceMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.setAsk = this.setAsk.bind(this);
    this.removeAsk = this.removeAsk.bind(this);
    this.updateAskPrice = this.updateAskPrice.bind(this);
    this.setBid = this.setBid.bind(this);
    this.buyNow = this.buyNow.bind(this);
    this.removeBid = this.removeBid.bind(this);
    this.acceptBid = this.acceptBid.bind(this);
    this.rejectBid = this.rejectBid.bind(this);
    this.setCollectionBid = this.setCollectionBid.bind(this);
    this.removeCollectionBid = this.removeCollectionBid.bind(this);
    this.acceptCollectionBid = this.acceptCollectionBid.bind(this);
    this.syncAsk = this.syncAsk.bind(this);
    this.removeStaleAsk = this.removeStaleAsk.bind(this);
    this.removeStaleBid = this.removeStaleBid.bind(this);
    this.removeStaleCollectionBid = this.removeStaleCollectionBid.bind(this);
  }

  setAsk = ({
    collection,
    expires,
    findersFeeBps,
    fundsRecipient,
    price,
    reserveFor,
    saleType,
    tokenId
  }: {
    collection: string;
    expires: Timestamp;
    findersFeeBps?: number;
    fundsRecipient?: string;
    price: Coin;
    reserveFor?: string;
    saleType: SaleType;
    tokenId: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          set_ask: {
            collection,
            expires,
            finders_fee_bps: findersFeeBps,
            funds_recipient: fundsRecipient,
            price,
            reserve_for: reserveFor,
            sale_type: saleType,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  removeAsk = ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_ask: {
            collection,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  updateAskPrice = ({
    collection,
    price,
    tokenId
  }: {
    collection: string;
    price: Coin;
    tokenId: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_ask_price: {
            collection,
            price,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  setBid = ({
    collection,
    expires,
    finder,
    findersFeeBps,
    saleType,
    tokenId
  }: {
    collection: string;
    expires: Timestamp;
    finder?: string;
    findersFeeBps?: number;
    saleType: SaleType;
    tokenId: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          set_bid: {
            collection,
            expires,
            finder,
            finders_fee_bps: findersFeeBps,
            sale_type: saleType,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  buyNow = ({
    collection,
    expires,
    finder,
    findersFeeBps,
    tokenId
  }: {
    collection: string;
    expires: Timestamp;
    finder?: string;
    findersFeeBps?: number;
    tokenId: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          buy_now: {
            collection,
            expires,
            finder,
            finders_fee_bps: findersFeeBps,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  removeBid = ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_bid: {
            collection,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  acceptBid = ({
    bidder,
    collection,
    finder,
    tokenId
  }: {
    bidder: string;
    collection: string;
    finder?: string;
    tokenId: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          accept_bid: {
            bidder,
            collection,
            finder,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  rejectBid = ({
    bidder,
    collection,
    tokenId
  }: {
    bidder: string;
    collection: string;
    tokenId: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          reject_bid: {
            bidder,
            collection,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  setCollectionBid = ({
    collection,
    expires,
    findersFeeBps
  }: {
    collection: string;
    expires: Timestamp;
    findersFeeBps?: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          set_collection_bid: {
            collection,
            expires,
            finders_fee_bps: findersFeeBps
          }
        })),
        funds
      })
    };
  };
  removeCollectionBid = ({
    collection
  }: {
    collection: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_collection_bid: {
            collection
          }
        })),
        funds
      })
    };
  };
  acceptCollectionBid = ({
    bidder,
    collection,
    finder,
    tokenId
  }: {
    bidder: string;
    collection: string;
    finder?: string;
    tokenId: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          accept_collection_bid: {
            bidder,
            collection,
            finder,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  syncAsk = ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          sync_ask: {
            collection,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  removeStaleAsk = ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_stale_ask: {
            collection,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  removeStaleBid = ({
    bidder,
    collection,
    tokenId
  }: {
    bidder: string;
    collection: string;
    tokenId: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_stale_bid: {
            bidder,
            collection,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  removeStaleCollectionBid = ({
    bidder,
    collection
  }: {
    bidder: string;
    collection: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_stale_collection_bid: {
            bidder,
            collection
          }
        })),
        funds
      })
    };
  };
}
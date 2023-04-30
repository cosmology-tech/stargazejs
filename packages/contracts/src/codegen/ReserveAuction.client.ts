/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Uint128, InstantiateMsg, Coin, ExecuteMsg, Timestamp, Uint64, QueryMsg, QueryOptionsForTupleOfStringAndString, QueryOptionsForTupleOfuint64AndTupleOfStringAndString, Addr, AuctionResponse, Auction, HighBid, AuctionsResponse, ConfigResponse, Config } from "./ReserveAuction.types";
export interface ReserveAuctionReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  auction: ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: string;
  }) => Promise<AuctionResponse>;
  auctionsBySeller: ({
    queryOptions,
    seller
  }: {
    queryOptions?: QueryOptionsForTupleOfStringAndString;
    seller: string;
  }) => Promise<AuctionsResponse>;
  auctionsByEndTime: ({
    endTime,
    queryOptions
  }: {
    endTime: Timestamp;
    queryOptions?: QueryOptionsForTupleOfuint64AndTupleOfStringAndString;
  }) => Promise<AuctionsResponse>;
}
export class ReserveAuctionQueryClient implements ReserveAuctionReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.auction = this.auction.bind(this);
    this.auctionsBySeller = this.auctionsBySeller.bind(this);
    this.auctionsByEndTime = this.auctionsByEndTime.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  auction = async ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: string;
  }): Promise<AuctionResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      auction: {
        collection,
        token_id: tokenId
      }
    });
  };
  auctionsBySeller = async ({
    queryOptions,
    seller
  }: {
    queryOptions?: QueryOptionsForTupleOfStringAndString;
    seller: string;
  }): Promise<AuctionsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      auctions_by_seller: {
        query_options: queryOptions,
        seller
      }
    });
  };
  auctionsByEndTime = async ({
    endTime,
    queryOptions
  }: {
    endTime: Timestamp;
    queryOptions?: QueryOptionsForTupleOfuint64AndTupleOfStringAndString;
  }): Promise<AuctionsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      auctions_by_end_time: {
        end_time: endTime,
        query_options: queryOptions
      }
    });
  };
}
export interface ReserveAuctionInterface extends ReserveAuctionReadOnlyInterface {
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
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateReservePrice: ({
    collection,
    reservePrice,
    tokenId
  }: {
    collection: string;
    reservePrice: Coin;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  cancelAuction: ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  placeBid: ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  settleAuction: ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class ReserveAuctionClient extends ReserveAuctionQueryClient implements ReserveAuctionInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.createAuction = this.createAuction.bind(this);
    this.updateReservePrice = this.updateReservePrice.bind(this);
    this.cancelAuction = this.cancelAuction.bind(this);
    this.placeBid = this.placeBid.bind(this);
    this.settleAuction = this.settleAuction.bind(this);
  }

  createAuction = async ({
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
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      create_auction: {
        collection,
        end_time: endTime,
        reserve_price: reservePrice,
        seller_funds_recipient: sellerFundsRecipient,
        start_time: startTime,
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  updateReservePrice = async ({
    collection,
    reservePrice,
    tokenId
  }: {
    collection: string;
    reservePrice: Coin;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_reserve_price: {
        collection,
        reserve_price: reservePrice,
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  cancelAuction = async ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      cancel_auction: {
        collection,
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  placeBid = async ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      place_bid: {
        collection,
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  settleAuction = async ({
    collection,
    tokenId
  }: {
    collection: string;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      settle_auction: {
        collection,
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
}
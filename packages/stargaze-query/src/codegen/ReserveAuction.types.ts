/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Uint128 = string;
export interface InstantiateMsg {
  create_auction_fee: Uint128;
  extend_duration: number;
  marketplace: string;
  min_bid_increment: number;
  min_duration: number;
  min_reserve_price: Coin;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  create_auction: {
    collection: string;
    end_time: Timestamp;
    reserve_price: Coin;
    seller_funds_recipient?: string | null;
    start_time: Timestamp;
    token_id: string;
  };
} | {
  update_reserve_price: {
    collection: string;
    reserve_price: Coin;
    token_id: string;
  };
} | {
  cancel_auction: {
    collection: string;
    token_id: string;
  };
} | {
  place_bid: {
    collection: string;
    token_id: string;
  };
} | {
  settle_auction: {
    collection: string;
    token_id: string;
  };
};
export type Timestamp = Uint64;
export type Uint64 = string;
export type QueryMsg = {
  config: {};
} | {
  auction: {
    collection: string;
    token_id: string;
  };
} | {
  auctions_by_seller: {
    query_options?: QueryOptionsForTupleOfStringAndString | null;
    seller: string;
  };
} | {
  auctions_by_end_time: {
    end_time: Timestamp;
    query_options?: QueryOptionsForTupleOfuint64AndTupleOfStringAndString | null;
  };
};
export interface QueryOptionsForTupleOfStringAndString {
  descending?: boolean | null;
  limit?: number | null;
  start_after?: [string, string] | null;
}
export interface QueryOptionsForTupleOfuint64AndTupleOfStringAndString {
  descending?: boolean | null;
  limit?: number | null;
  start_after?: [number, [string, string]] | null;
}
export type Addr = string;
export interface AuctionResponse {
  auction: Auction;
}
export interface Auction {
  collection: Addr;
  end_time: Timestamp;
  first_bid_time?: Timestamp | null;
  high_bid?: HighBid | null;
  reserve_price: Coin;
  seller: Addr;
  seller_funds_recipient?: Addr | null;
  start_time: Timestamp;
  token_id: string;
}
export interface HighBid {
  bidder: Addr;
  coin: Coin;
}
export interface AuctionsResponse {
  auctions: Auction[];
}
export interface ConfigResponse {
  config: Config;
}
export interface Config {
  create_auction_fee: Uint128;
  extend_duration: number;
  marketplace: Addr;
  min_bid_increment: number;
  min_duration: number;
  min_reserve_price: Coin;
}
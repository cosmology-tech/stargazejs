/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.16.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Addr = string;
export type Uint128 = string;
export interface ConfigResponse {
  collection_address: string;
  config: MinterConfigForEmpty;
  [k: string]: unknown;
}
export interface MinterConfigForEmpty {
  collection_code_id: number;
  extension: Empty;
  factory: Addr;
  mint_price: Coin;
  [k: string]: unknown;
}
export interface Empty {
  [k: string]: unknown;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  mint: {
    token_uri: string;
    [k: string]: unknown;
  };
} | {
  update_trading_start_time: Timestamp | null;
};
export type Timestamp = Uint64;
export type Uint64 = string;
export type Decimal = string;
export interface InstantiateMsg {
  create_msg: CreateMinterMsgForNullable_Empty;
  params: MinterParamsForNullable_Empty;
  [k: string]: unknown;
}
export interface CreateMinterMsgForNullable_Empty {
  collection_params: CollectionParams;
  init_msg?: Empty | null;
  [k: string]: unknown;
}
export interface CollectionParams {
  code_id: number;
  info: CollectionInfoForRoyaltyInfoResponse;
  name: string;
  symbol: string;
  [k: string]: unknown;
}
export interface CollectionInfoForRoyaltyInfoResponse {
  creator: string;
  description: string;
  explicit_content: boolean;
  external_link?: string | null;
  image: string;
  royalty_info?: RoyaltyInfoResponse | null;
  trading_start_time?: Timestamp | null;
  [k: string]: unknown;
}
export interface RoyaltyInfoResponse {
  payment_address: string;
  share: Decimal;
  [k: string]: unknown;
}
export interface MinterParamsForNullable_Empty {
  code_id: number;
  creation_fee: Coin;
  extension?: Empty | null;
  max_trading_offset_secs: number;
  min_mint_price: Coin;
  mint_fee_bps: number;
  [k: string]: unknown;
}
export type QueryMsg = {
  config: {
    [k: string]: unknown;
  };
} | {
  status: {
    [k: string]: unknown;
  };
};
export interface StatusResponse {
  status: Status;
  [k: string]: unknown;
}
export interface Status {
  is_blocked: boolean;
  is_explicit: boolean;
  is_verified: boolean;
  [k: string]: unknown;
}
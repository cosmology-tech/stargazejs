/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Decimal = string;
export type Timestamp = Uint64;
export type Uint64 = string;
export type Uint128 = string;
export interface InstantiateMsg {
  create_msg: CreateMinterMsgForNullable_Empty;
  params: MinterParamsForNullable_Empty;
}
export interface CreateMinterMsgForNullable_Empty {
  collection_params: CollectionParams;
  init_msg?: Empty | null;
}
export interface CollectionParams {
  code_id: number;
  info: CollectionInfoForRoyaltyInfoResponse;
  name: string;
  symbol: string;
}
export interface CollectionInfoForRoyaltyInfoResponse {
  creator: string;
  description: string;
  explicit_content?: boolean | null;
  external_link?: string | null;
  image: string;
  royalty_info?: RoyaltyInfoResponse | null;
  start_trading_time?: Timestamp | null;
}
export interface RoyaltyInfoResponse {
  payment_address: string;
  share: Decimal;
}
export interface Empty {
  [k: string]: unknown;
}
export interface MinterParamsForNullable_Empty {
  allowed_sg721_code_ids: number[];
  code_id: number;
  creation_fee: Coin;
  extension?: Empty | null;
  frozen: boolean;
  max_trading_offset_secs: number;
  min_mint_price: Coin;
  mint_fee_bps: number;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  mint: {
    token_uri: string;
  };
} | {
  update_start_trading_time: Timestamp | null;
};
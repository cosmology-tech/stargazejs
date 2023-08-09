/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Decimal = string;
export type Timestamp = Uint64;
export type Uint64 = string;
export type Uint128 = string;
export interface InstantiateMsg {
  create_msg: CreateMinterMsgForVendingMinterInitMsgExtension;
  params: MinterParamsForParamsExtension;
}
export interface CreateMinterMsgForVendingMinterInitMsgExtension {
  collection_params: CollectionParams;
  init_msg: VendingMinterInitMsgExtension;
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
export interface VendingMinterInitMsgExtension {
  base_token_uri: string;
  mint_price: Coin;
  num_tokens: number;
  payment_address?: string | null;
  per_address_limit: number;
  start_time: Timestamp;
  whitelist?: string | null;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export interface MinterParamsForParamsExtension {
  allowed_sg721_code_ids: number[];
  code_id: number;
  creation_fee: Coin;
  extension: ParamsExtension;
  frozen: boolean;
  max_trading_offset_secs: number;
  min_mint_price: Coin;
  mint_fee_bps: number;
}
export interface ParamsExtension {
  airdrop_mint_fee_bps: number;
  airdrop_mint_price: Coin;
  max_per_address_limit: number;
  max_token_limit: number;
  shuffle_fee: Coin;
}
export type ExecuteMsg = {
  mint: {};
} | {
  set_whitelist: {
    whitelist: string;
  };
} | {
  purge: {};
} | {
  update_mint_price: {
    price: number;
  };
} | {
  update_start_time: Timestamp;
} | {
  update_start_trading_time: Timestamp | null;
} | {
  update_per_address_limit: {
    per_address_limit: number;
  };
} | {
  mint_to: {
    recipient: string;
  };
} | {
  mint_for: {
    recipient: string;
    token_id: number;
  };
} | {
  shuffle: {};
} | {
  burn_remaining: {};
} | {
  update_discount_price: {
    price: number;
  };
} | {
  remove_discount_price: {};
};
export type QueryMsg = {
  config: {};
} | {
  mintable_num_tokens: {};
} | {
  start_time: {};
} | {
  mint_price: {};
} | {
  mint_count: {
    address: string;
  };
} | {
  status: {};
};
export interface ConfigResponse {
  admin: string;
  base_token_uri: string;
  discount_price?: Coin | null;
  factory: string;
  mint_price: Coin;
  num_tokens: number;
  per_address_limit: number;
  sg721_address: string;
  sg721_code_id: number;
  start_time: Timestamp;
  whitelist?: string | null;
}
export interface MintCountResponse {
  address: string;
  count: number;
}
export interface MintPriceResponse {
  airdrop_price: Coin;
  current_price: Coin;
  discount_price?: Coin | null;
  public_price: Coin;
  whitelist_price?: Coin | null;
}
export interface MintableNumTokensResponse {
  count: number;
}
export interface StartTimeResponse {
  start_time: string;
}
export interface StatusResponse {
  status: Status;
}
export interface Status {
  is_blocked: boolean;
  is_explicit: boolean;
  is_verified: boolean;
}
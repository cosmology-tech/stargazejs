/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
export type Uint128 = string;
export interface InstantiateMsg {
    params: MinterParamsForParamsExtension;
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
export interface Coin {
    amount: Uint128;
    denom: string;
    [k: string]: unknown;
}
export interface ParamsExtension {
    airdrop_mint_fee_bps: number;
    airdrop_mint_price: Coin;
    max_per_address_limit: number;
    max_token_limit: number;
    shuffle_fee: Coin;
}
export type Sg2QueryMsg = {
    params: {};
} | {
    allowed_collection_code_ids: {};
} | {
    allowed_collection_code_id: number;
};

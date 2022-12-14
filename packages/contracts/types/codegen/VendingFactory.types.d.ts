/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
export declare type Uint128 = string;
export interface InstantiateMsg {
    params: MinterParamsForParamsExtension;
    [k: string]: unknown;
}
export interface MinterParamsForParamsExtension {
    code_id: number;
    creation_fee: Coin;
    extension: ParamsExtension;
    max_trading_offset_secs: number;
    min_mint_price: Coin;
    mint_fee_bps: number;
    [k: string]: unknown;
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
    [k: string]: unknown;
}
export declare type Sg2QueryMsg = {
    params: {
        [k: string]: unknown;
    };
};

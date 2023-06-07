/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
export interface InstantiateMsg {
    addresses: string[];
    mint_discount_bps?: number | null;
    per_address_limit: number;
}
export declare type ExecuteMsg = string;
export declare type QueryMsg = {
    config: {};
} | {
    includes_address: {
        address: string;
    };
} | {
    admin: {};
} | {
    address_count: {};
} | {
    per_address_limit: {};
};
export declare type Uint64 = number;
export declare type Addr = string;
export interface ConfigResponse {
    config: Config;
}
export interface Config {
    admin: Addr;
    mint_discount_bps?: number | null;
    per_address_limit: number;
}
export declare type Boolean = boolean;
export interface PerAddressLimitResponse {
    limit: number;
}

/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
export interface InstantiateMsg {
    addresses: string[];
    mint_discount_bps?: number | null;
    per_address_limit: number;
}
export type ExecuteMsg = string;
export type QueryMsg = {
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
export type Uint64 = number;
export type Addr = string;
export interface ConfigResponse {
    config: Config;
}
export interface Config {
    admin: Addr;
    mint_discount_bps?: number | null;
    per_address_limit: number;
}
export type Boolean = boolean;
export interface PerAddressLimitResponse {
    limit: number;
}

/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Uint64, ConfigResponse, Boolean, PerAddressLimitResponse } from "./WhitelistImmutable.types";
export interface WhitelistImmutableReadOnlyInterface {
    contractAddress: string;
    config: () => Promise<ConfigResponse>;
    includesAddress: ({ address }: {
        address: string;
    }) => Promise<Boolean>;
    admin: () => Promise<Uint64>;
    addressCount: () => Promise<Uint64>;
    perAddressLimit: () => Promise<PerAddressLimitResponse>;
}
export declare class WhitelistImmutableQueryClient implements WhitelistImmutableReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    config: () => Promise<ConfigResponse>;
    includesAddress: ({ address }: {
        address: string;
    }) => Promise<Boolean>;
    admin: () => Promise<Uint64>;
    addressCount: () => Promise<Uint64>;
    perAddressLimit: () => Promise<PerAddressLimitResponse>;
}

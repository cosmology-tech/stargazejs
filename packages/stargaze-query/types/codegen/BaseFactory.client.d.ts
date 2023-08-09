/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Coin, Empty, CollectionParams } from "./BaseFactory.types";
export interface BaseFactoryInterface {
    contractAddress: string;
    sender: string;
    createMinter: ({ collectionParams, initMsg }: {
        collectionParams: CollectionParams;
        initMsg?: Empty;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class BaseFactoryClient implements BaseFactoryInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    createMinter: ({ collectionParams, initMsg }: {
        collectionParams: CollectionParams;
        initMsg?: Empty;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
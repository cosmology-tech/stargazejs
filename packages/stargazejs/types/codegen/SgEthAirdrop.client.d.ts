/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Addr, Boolean } from "./SgEthAirdrop.types";
export interface SgEthAirdropReadOnlyInterface {
    contractAddress: string;
    airdropEligible: ({ ethAddress }: {
        ethAddress: string;
    }) => Promise<Boolean>;
    getMinter: () => Promise<Addr>;
}
export declare class SgEthAirdropQueryClient implements SgEthAirdropReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    airdropEligible: ({ ethAddress }: {
        ethAddress: string;
    }) => Promise<Boolean>;
    getMinter: () => Promise<Addr>;
}
export interface SgEthAirdropInterface extends SgEthAirdropReadOnlyInterface {
    contractAddress: string;
    sender: string;
    claimAirdrop: ({ ethAddress, ethSig }: {
        ethAddress: string;
        ethSig: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class SgEthAirdropClient extends SgEthAirdropQueryClient implements SgEthAirdropInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    claimAirdrop: ({ ethAddress, ethSig }: {
        ethAddress: string;
        ethSig: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}

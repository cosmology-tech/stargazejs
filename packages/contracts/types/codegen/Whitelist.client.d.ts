/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { AdminListResponse, CanExecuteResponse, ConfigResponse, Coin, HasEndedResponse, HasMemberResponse, HasStartedResponse, IsActiveResponse, MembersResponse, CosmosMsgForEmpty } from "./Whitelist.types";
export interface WhitelistReadOnlyInterface {
    contractAddress: string;
    hasStarted: () => Promise<HasStartedResponse>;
    hasEnded: () => Promise<HasEndedResponse>;
    isActive: () => Promise<IsActiveResponse>;
    members: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<MembersResponse>;
    hasMember: ({ member }: {
        member: string;
    }) => Promise<HasMemberResponse>;
    config: () => Promise<ConfigResponse>;
    adminList: () => Promise<AdminListResponse>;
    canExecute: ({ msg, sender }: {
        msg: CosmosMsgForEmpty;
        sender: string;
    }) => Promise<CanExecuteResponse>;
}
export declare class WhitelistQueryClient implements WhitelistReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    hasStarted: () => Promise<HasStartedResponse>;
    hasEnded: () => Promise<HasEndedResponse>;
    isActive: () => Promise<IsActiveResponse>;
    members: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<MembersResponse>;
    hasMember: ({ member }: {
        member: string;
    }) => Promise<HasMemberResponse>;
    config: () => Promise<ConfigResponse>;
    adminList: () => Promise<AdminListResponse>;
    canExecute: ({ msg, sender }: {
        msg: CosmosMsgForEmpty;
        sender: string;
    }) => Promise<CanExecuteResponse>;
}
export interface WhitelistInterface extends WhitelistReadOnlyInterface {
    contractAddress: string;
    sender: string;
    updateStartTime: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateEndTime: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    addMembers: ({ toAdd }: {
        toAdd: string[];
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeMembers: ({ toRemove }: {
        toRemove: string[];
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updatePerAddressLimit: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    increaseMemberLimit: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateAdmins: ({ admins }: {
        admins: string[];
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    freeze: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class WhitelistClient extends WhitelistQueryClient implements WhitelistInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    updateStartTime: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateEndTime: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    addMembers: ({ toAdd }: {
        toAdd: string[];
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeMembers: ({ toRemove }: {
        toRemove: string[];
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updatePerAddressLimit: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    increaseMemberLimit: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateAdmins: ({ admins }: {
        admins: string[];
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    freeze: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}

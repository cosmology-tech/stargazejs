/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Member, Coin, CosmosMsgForEmpty, AdminListResponse, CanExecuteResponse, ConfigResponse, HasEndedResponse, HasMemberResponse, HasStartedResponse, IsActiveResponse, MemberResponse, MembersResponse } from "./WhitelistFlex.types";
export interface WhitelistFlexReadOnlyInterface {
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
    member: ({ member }: {
        member: string;
    }) => Promise<MemberResponse>;
    config: () => Promise<ConfigResponse>;
    adminList: () => Promise<AdminListResponse>;
    canExecute: ({ msg, sender }: {
        msg: CosmosMsgForEmpty;
        sender: string;
    }) => Promise<CanExecuteResponse>;
}
export declare class WhitelistFlexQueryClient implements WhitelistFlexReadOnlyInterface {
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
    member: ({ member }: {
        member: string;
    }) => Promise<MemberResponse>;
    config: () => Promise<ConfigResponse>;
    adminList: () => Promise<AdminListResponse>;
    canExecute: ({ msg, sender }: {
        msg: CosmosMsgForEmpty;
        sender: string;
    }) => Promise<CanExecuteResponse>;
}
export interface WhitelistFlexInterface extends WhitelistFlexReadOnlyInterface {
    contractAddress: string;
    sender: string;
    updateStartTime: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateEndTime: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    addMembers: ({ toAdd }: {
        toAdd: Member[];
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeMembers: ({ toRemove }: {
        toRemove: string[];
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    increaseMemberLimit: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateAdmins: ({ admins }: {
        admins: string[];
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    freeze: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class WhitelistFlexClient extends WhitelistFlexQueryClient implements WhitelistFlexInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    updateStartTime: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateEndTime: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    addMembers: ({ toAdd }: {
        toAdd: Member[];
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeMembers: ({ toRemove }: {
        toRemove: string[];
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    increaseMemberLimit: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateAdmins: ({ admins }: {
        admins: string[];
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    freeze: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}

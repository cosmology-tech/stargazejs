/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { UseQueryOptions } from "react-query";
import { AllNftInfoResponse, OwnerOfResponse, AllOperatorsResponse, AllTokensResponse, ApprovalResponse, ApprovalsResponse, CollectionInfoResponse, ContractInfoResponse, MinterResponse, NftInfoResponse, NumTokensResponse, TokensResponse } from "./Sg721Updatable.types";
import { Sg721UpdatableQueryClient } from "./Sg721Updatable.client";
export interface Sg721UpdatableReactQuery<TResponse, TData = TResponse> {
    client: Sg721UpdatableQueryClient;
    options?: UseQueryOptions<TResponse, Error, TData>;
}
export interface Sg721UpdatableCollectionInfoQuery<TData> extends Sg721UpdatableReactQuery<CollectionInfoResponse, TData> {
}
export declare function useSg721UpdatableCollectionInfoQuery<TData = CollectionInfoResponse>({ client, options }: Sg721UpdatableCollectionInfoQuery<TData>): any;
export interface Sg721UpdatableMinterQuery<TData> extends Sg721UpdatableReactQuery<MinterResponse, TData> {
}
export declare function useSg721UpdatableMinterQuery<TData = MinterResponse>({ client, options }: Sg721UpdatableMinterQuery<TData>): any;
export interface Sg721UpdatableAllTokensQuery<TData> extends Sg721UpdatableReactQuery<AllTokensResponse, TData> {
    args: {
        limit?: number;
        startAfter?: string;
    };
}
export declare function useSg721UpdatableAllTokensQuery<TData = AllTokensResponse>({ client, args, options }: Sg721UpdatableAllTokensQuery<TData>): any;
export interface Sg721UpdatableTokensQuery<TData> extends Sg721UpdatableReactQuery<TokensResponse, TData> {
    args: {
        limit?: number;
        owner: string;
        startAfter?: string;
    };
}
export declare function useSg721UpdatableTokensQuery<TData = TokensResponse>({ client, args, options }: Sg721UpdatableTokensQuery<TData>): any;
export interface Sg721UpdatableAllNftInfoQuery<TData> extends Sg721UpdatableReactQuery<AllNftInfoResponse, TData> {
    args: {
        includeExpired?: boolean;
        tokenId: string;
    };
}
export declare function useSg721UpdatableAllNftInfoQuery<TData = AllNftInfoResponse>({ client, args, options }: Sg721UpdatableAllNftInfoQuery<TData>): any;
export interface Sg721UpdatableNftInfoQuery<TData> extends Sg721UpdatableReactQuery<NftInfoResponse, TData> {
    args: {
        tokenId: string;
    };
}
export declare function useSg721UpdatableNftInfoQuery<TData = NftInfoResponse>({ client, args, options }: Sg721UpdatableNftInfoQuery<TData>): any;
export interface Sg721UpdatableContractInfoQuery<TData> extends Sg721UpdatableReactQuery<ContractInfoResponse, TData> {
}
export declare function useSg721UpdatableContractInfoQuery<TData = ContractInfoResponse>({ client, options }: Sg721UpdatableContractInfoQuery<TData>): any;
export interface Sg721UpdatableNumTokensQuery<TData> extends Sg721UpdatableReactQuery<NumTokensResponse, TData> {
}
export declare function useSg721UpdatableNumTokensQuery<TData = NumTokensResponse>({ client, options }: Sg721UpdatableNumTokensQuery<TData>): any;
export interface Sg721UpdatableAllOperatorsQuery<TData> extends Sg721UpdatableReactQuery<AllOperatorsResponse, TData> {
    args: {
        includeExpired?: boolean;
        limit?: number;
        owner: string;
        startAfter?: string;
    };
}
export declare function useSg721UpdatableAllOperatorsQuery<TData = AllOperatorsResponse>({ client, args, options }: Sg721UpdatableAllOperatorsQuery<TData>): any;
export interface Sg721UpdatableApprovalsQuery<TData> extends Sg721UpdatableReactQuery<ApprovalsResponse, TData> {
    args: {
        includeExpired?: boolean;
        tokenId: string;
    };
}
export declare function useSg721UpdatableApprovalsQuery<TData = ApprovalsResponse>({ client, args, options }: Sg721UpdatableApprovalsQuery<TData>): any;
export interface Sg721UpdatableApprovalQuery<TData> extends Sg721UpdatableReactQuery<ApprovalResponse, TData> {
    args: {
        includeExpired?: boolean;
        spender: string;
        tokenId: string;
    };
}
export declare function useSg721UpdatableApprovalQuery<TData = ApprovalResponse>({ client, args, options }: Sg721UpdatableApprovalQuery<TData>): any;
export interface Sg721UpdatableOwnerOfQuery<TData> extends Sg721UpdatableReactQuery<OwnerOfResponse, TData> {
    args: {
        includeExpired?: boolean;
        tokenId: string;
    };
}
export declare function useSg721UpdatableOwnerOfQuery<TData = OwnerOfResponse>({ client, args, options }: Sg721UpdatableOwnerOfQuery<TData>): any;

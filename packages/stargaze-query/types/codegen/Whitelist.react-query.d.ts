/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { UseQueryOptions } from "react-query";
import { AdminListResponse, CanExecuteResponse, ConfigResponse, HasEndedResponse, HasMemberResponse, HasStartedResponse, IsActiveResponse, MembersResponse, CosmosMsgForEmpty } from "./Whitelist.types";
import { WhitelistQueryClient } from "./Whitelist.client";
export interface WhitelistReactQuery<TResponse, TData = TResponse> {
    client: WhitelistQueryClient;
    options?: UseQueryOptions<TResponse, Error, TData>;
}
export interface WhitelistCanExecuteQuery<TData> extends WhitelistReactQuery<CanExecuteResponse, TData> {
    args: {
        msg: CosmosMsgForEmpty;
        sender: string;
    };
}
export declare function useWhitelistCanExecuteQuery<TData = CanExecuteResponse>({ client, args, options }: WhitelistCanExecuteQuery<TData>): any;
export interface WhitelistAdminListQuery<TData> extends WhitelistReactQuery<AdminListResponse, TData> {
}
export declare function useWhitelistAdminListQuery<TData = AdminListResponse>({ client, options }: WhitelistAdminListQuery<TData>): any;
export interface WhitelistConfigQuery<TData> extends WhitelistReactQuery<ConfigResponse, TData> {
}
export declare function useWhitelistConfigQuery<TData = ConfigResponse>({ client, options }: WhitelistConfigQuery<TData>): any;
export interface WhitelistHasMemberQuery<TData> extends WhitelistReactQuery<HasMemberResponse, TData> {
    args: {
        member: string;
    };
}
export declare function useWhitelistHasMemberQuery<TData = HasMemberResponse>({ client, args, options }: WhitelistHasMemberQuery<TData>): any;
export interface WhitelistMembersQuery<TData> extends WhitelistReactQuery<MembersResponse, TData> {
    args: {
        limit?: number;
        startAfter?: string;
    };
}
export declare function useWhitelistMembersQuery<TData = MembersResponse>({ client, args, options }: WhitelistMembersQuery<TData>): any;
export interface WhitelistIsActiveQuery<TData> extends WhitelistReactQuery<IsActiveResponse, TData> {
}
export declare function useWhitelistIsActiveQuery<TData = IsActiveResponse>({ client, options }: WhitelistIsActiveQuery<TData>): any;
export interface WhitelistHasEndedQuery<TData> extends WhitelistReactQuery<HasEndedResponse, TData> {
}
export declare function useWhitelistHasEndedQuery<TData = HasEndedResponse>({ client, options }: WhitelistHasEndedQuery<TData>): any;
export interface WhitelistHasStartedQuery<TData> extends WhitelistReactQuery<HasStartedResponse, TData> {
}
export declare function useWhitelistHasStartedQuery<TData = HasStartedResponse>({ client, options }: WhitelistHasStartedQuery<TData>): any;
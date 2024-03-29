/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { UseQueryOptions } from "@tanstack/react-query";
import { CosmosMsgForEmpty, AdminListResponse, CanExecuteResponse, ConfigResponse, HasEndedResponse, HasMemberResponse, HasStartedResponse, IsActiveResponse, MemberResponse, MembersResponse } from "./WhitelistFlex.types";
import { WhitelistFlexQueryClient } from "./WhitelistFlex.client";
export interface WhitelistFlexReactQuery<TResponse, TData = TResponse> {
    client: WhitelistFlexQueryClient;
    options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
        initialData?: undefined;
    };
}
export interface WhitelistFlexCanExecuteQuery<TData> extends WhitelistFlexReactQuery<CanExecuteResponse, TData> {
    args: {
        msg: CosmosMsgForEmpty;
        sender: string;
    };
}
export declare function useWhitelistFlexCanExecuteQuery<TData = CanExecuteResponse>({ client, args, options }: WhitelistFlexCanExecuteQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface WhitelistFlexAdminListQuery<TData> extends WhitelistFlexReactQuery<AdminListResponse, TData> {
}
export declare function useWhitelistFlexAdminListQuery<TData = AdminListResponse>({ client, options }: WhitelistFlexAdminListQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface WhitelistFlexConfigQuery<TData> extends WhitelistFlexReactQuery<ConfigResponse, TData> {
}
export declare function useWhitelistFlexConfigQuery<TData = ConfigResponse>({ client, options }: WhitelistFlexConfigQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface WhitelistFlexMemberQuery<TData> extends WhitelistFlexReactQuery<MemberResponse, TData> {
    args: {
        member: string;
    };
}
export declare function useWhitelistFlexMemberQuery<TData = MemberResponse>({ client, args, options }: WhitelistFlexMemberQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface WhitelistFlexHasMemberQuery<TData> extends WhitelistFlexReactQuery<HasMemberResponse, TData> {
    args: {
        member: string;
    };
}
export declare function useWhitelistFlexHasMemberQuery<TData = HasMemberResponse>({ client, args, options }: WhitelistFlexHasMemberQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface WhitelistFlexMembersQuery<TData> extends WhitelistFlexReactQuery<MembersResponse, TData> {
    args: {
        limit?: number;
        startAfter?: string;
    };
}
export declare function useWhitelistFlexMembersQuery<TData = MembersResponse>({ client, args, options }: WhitelistFlexMembersQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface WhitelistFlexIsActiveQuery<TData> extends WhitelistFlexReactQuery<IsActiveResponse, TData> {
}
export declare function useWhitelistFlexIsActiveQuery<TData = IsActiveResponse>({ client, options }: WhitelistFlexIsActiveQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface WhitelistFlexHasEndedQuery<TData> extends WhitelistFlexReactQuery<HasEndedResponse, TData> {
}
export declare function useWhitelistFlexHasEndedQuery<TData = HasEndedResponse>({ client, options }: WhitelistFlexHasEndedQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface WhitelistFlexHasStartedQuery<TData> extends WhitelistFlexReactQuery<HasStartedResponse, TData> {
}
export declare function useWhitelistFlexHasStartedQuery<TData = HasStartedResponse>({ client, options }: WhitelistFlexHasStartedQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;

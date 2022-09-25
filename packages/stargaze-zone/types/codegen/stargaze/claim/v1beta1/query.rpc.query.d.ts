import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordResponseSDKType, QueryClaimableForActionRequest, QueryClaimableForActionResponseSDKType, QueryTotalClaimableRequest, QueryTotalClaimableResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponseSDKType>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponseSDKType>;
    claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponseSDKType>;
    totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponseSDKType>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponseSDKType>;
    claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponseSDKType>;
    totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponseSDKType>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponseSDKType>;
    claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponseSDKType>;
    totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponseSDKType>;
};

import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
/** Query defines the RPC service */

export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Params returns the total set of minting parameters.*/

  annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
  /*AnnualProvisions current minting annual provisions value.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.annualProvisions = this.annualProvisions.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stargaze.mint.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  annualProvisions(request: QueryAnnualProvisionsRequest = {}): Promise<QueryAnnualProvisionsResponse> {
    const data = QueryAnnualProvisionsRequest.encode(request).finish();
    const promise = this.rpc.request("stargaze.mint.v1beta1.Query", "AnnualProvisions", data);
    return promise.then(data => QueryAnnualProvisionsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse> {
      return queryService.annualProvisions(request);
    }

  };
};
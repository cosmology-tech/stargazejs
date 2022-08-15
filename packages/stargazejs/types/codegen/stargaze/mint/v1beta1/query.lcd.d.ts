import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: any;
    });
    params(params: QueryParamsRequest): Promise<QueryParamsResponse>;
    annualProvisions(params: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
}

import { Params } from "./mint";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* Params returns the total set of minting parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `stargaze/mint/v1beta1/params`;
    return await this.get<QueryParamsResponse>(endpoint);
  }

  /* AnnualProvisions current minting annual provisions value. */
  async annualProvisions(_params: QueryAnnualProvisionsRequest = {}): Promise<QueryAnnualProvisionsResponse> {
    const endpoint = `stargaze/mint/v1beta1/annual_provisions`;
    return await this.get<QueryAnnualProvisionsResponse>(endpoint);
  }

}
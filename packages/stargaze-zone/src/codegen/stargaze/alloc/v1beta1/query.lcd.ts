import { Params } from "./params";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* this line is used by starport scaffolding # 2 */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `stargaze/alloc/v1beta1/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

}
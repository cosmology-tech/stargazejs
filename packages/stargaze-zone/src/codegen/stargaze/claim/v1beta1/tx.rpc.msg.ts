import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgInitialClaim, MsgInitialClaimResponse, MsgInitialClaimResponseSDKType, MsgClaimFor, MsgClaimForResponse, MsgClaimForResponseSDKType } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  initialClaim(request: MsgInitialClaim): Promise<MsgInitialClaimResponseSDKType>;
  /*null*/

  claimFor(request: MsgClaimFor): Promise<MsgClaimForResponseSDKType>;
  /*this line is used by starport scaffolding # proto/tx/rpc*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.initialClaim = this.initialClaim.bind(this);
    this.claimFor = this.claimFor.bind(this);
  }

  initialClaim(request: MsgInitialClaim): Promise<MsgInitialClaimResponseSDKType> {
    const data = MsgInitialClaim.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.claim.v1beta1.Msg", "InitialClaim", data);
    return promise.then(data => MsgInitialClaimResponse.decode(new _m0.Reader(data)));
  }

  claimFor(request: MsgClaimFor): Promise<MsgClaimForResponseSDKType> {
    const data = MsgClaimFor.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.claim.v1beta1.Msg", "ClaimFor", data);
    return promise.then(data => MsgClaimForResponse.decode(new _m0.Reader(data)));
  }

}
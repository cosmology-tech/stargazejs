import { Rpc } from "@osmonauts/helpers";
import { MsgInitialClaim, MsgInitialClaimResponseSDKType, MsgClaimFor, MsgClaimForResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    initialClaim(request: MsgInitialClaim): Promise<MsgInitialClaimResponseSDKType>;
    claimFor(request: MsgClaimFor): Promise<MsgClaimForResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    initialClaim(request: MsgInitialClaim): Promise<MsgInitialClaimResponseSDKType>;
    claimFor(request: MsgClaimFor): Promise<MsgClaimForResponseSDKType>;
}

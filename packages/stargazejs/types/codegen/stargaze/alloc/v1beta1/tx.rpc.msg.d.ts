import { Rpc } from "@osmonauts/helpers";
import { MsgCreateVestingAccount, MsgCreateVestingAccountResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponseSDKType>;
}

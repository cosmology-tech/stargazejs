import { Action } from "./claim_record";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface MsgInitialClaim {
    sender: string;
}
export interface MsgInitialClaimResponse {
    /** total initial claimable amount for the user */
    claimedAmount: Coin[];
}
export interface MsgClaimFor {
    sender: string;
    address: string;
    action: Action;
}
export interface MsgClaimForResponse {
    address: string;
    /** total initial claimable amount for the user */
    claimedAmount: Coin[];
}
export declare const MsgInitialClaim: {
    encode(message: MsgInitialClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitialClaim;
    fromJSON(object: any): MsgInitialClaim;
    toJSON(message: MsgInitialClaim): unknown;
    fromPartial(object: DeepPartial<MsgInitialClaim>): MsgInitialClaim;
};
export declare const MsgInitialClaimResponse: {
    encode(message: MsgInitialClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitialClaimResponse;
    fromJSON(object: any): MsgInitialClaimResponse;
    toJSON(message: MsgInitialClaimResponse): unknown;
    fromPartial(object: DeepPartial<MsgInitialClaimResponse>): MsgInitialClaimResponse;
};
export declare const MsgClaimFor: {
    encode(message: MsgClaimFor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimFor;
    fromJSON(object: any): MsgClaimFor;
    toJSON(message: MsgClaimFor): unknown;
    fromPartial(object: DeepPartial<MsgClaimFor>): MsgClaimFor;
};
export declare const MsgClaimForResponse: {
    encode(message: MsgClaimForResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimForResponse;
    fromJSON(object: any): MsgClaimForResponse;
    toJSON(message: MsgClaimForResponse): unknown;
    fromPartial(object: DeepPartial<MsgClaimForResponse>): MsgClaimForResponse;
};

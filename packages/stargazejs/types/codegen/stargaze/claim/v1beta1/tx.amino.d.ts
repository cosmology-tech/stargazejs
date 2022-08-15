import { AminoMsg } from "@cosmjs/amino";
import { MsgInitialClaim, MsgClaimFor } from "./tx";
export interface AminoMsgInitialClaim extends AminoMsg {
    type: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim";
    value: {
        sender: string;
    };
}
export interface AminoMsgClaimFor extends AminoMsg {
    type: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor";
    value: {
        sender: string;
        address: string;
        action: number;
    };
}
export declare const AminoConverter: {
    "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
        aminoType: string;
        toAmino: ({ sender }: MsgInitialClaim) => AminoMsgInitialClaim["value"];
        fromAmino: ({ sender }: AminoMsgInitialClaim["value"]) => MsgInitialClaim;
    };
    "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
        aminoType: string;
        toAmino: ({ sender, address, action }: MsgClaimFor) => AminoMsgClaimFor["value"];
        fromAmino: ({ sender, address, action }: AminoMsgClaimFor["value"]) => MsgClaimFor;
    };
};

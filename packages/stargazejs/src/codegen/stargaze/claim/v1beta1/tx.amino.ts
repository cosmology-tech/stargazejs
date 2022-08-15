import { Action, actionFromJSON } from "./claim_record";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
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
export const AminoConverter = {
  "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
    aminoType: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim",
    toAmino: ({
      sender
    }: MsgInitialClaim): AminoMsgInitialClaim["value"] => {
      return {
        sender
      };
    },
    fromAmino: ({
      sender
    }: AminoMsgInitialClaim["value"]): MsgInitialClaim => {
      return {
        sender
      };
    }
  },
  "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
    aminoType: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor",
    toAmino: ({
      sender,
      address,
      action
    }: MsgClaimFor): AminoMsgClaimFor["value"] => {
      return {
        sender,
        address,
        action
      };
    },
    fromAmino: ({
      sender,
      address,
      action
    }: AminoMsgClaimFor["value"]): MsgClaimFor => {
      return {
        sender,
        address,
        action: actionFromJSON(action)
      };
    }
  }
};
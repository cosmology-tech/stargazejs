/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { AdminListResponse, Timestamp, Uint64, Uint128, ConfigResponse, Coin, Config, ExecuteMsg, AddMembersMsg, RemoveMembersMsg, HasEndedResponse, HasMemberResponse, HasStartedResponse, InstantiateMsg, IsActiveResponse, MembersResponse, QueryMsg, CosmosMsgForEmpty, BankMsg, WasmMsg, Binary, Empty } from "./Whitelist.types";
export interface WhitelistMessage {
  contractAddress: string;
  sender: string;
  updateStartTime: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateEndTime: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  addMembers: ({
    toAdd
  }: {
    toAdd: string[];
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeMembers: ({
    toRemove
  }: {
    toRemove: string[];
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updatePerAddressLimit: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  increaseMemberLimit: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateAdmins: ({
    admins
  }: {
    admins: string[];
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  freeze: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class WhitelistMessageComposer implements WhitelistMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateStartTime = this.updateStartTime.bind(this);
    this.updateEndTime = this.updateEndTime.bind(this);
    this.addMembers = this.addMembers.bind(this);
    this.removeMembers = this.removeMembers.bind(this);
    this.updatePerAddressLimit = this.updatePerAddressLimit.bind(this);
    this.increaseMemberLimit = this.increaseMemberLimit.bind(this);
    this.updateAdmins = this.updateAdmins.bind(this);
    this.freeze = this.freeze.bind(this);
  }

  updateStartTime = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_start_time: {}
        })),
        funds
      })
    };
  };
  updateEndTime = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_end_time: {}
        })),
        funds
      })
    };
  };
  addMembers = ({
    toAdd
  }: {
    toAdd: string[];
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          add_members: {
            to_add: toAdd
          }
        })),
        funds
      })
    };
  };
  removeMembers = ({
    toRemove
  }: {
    toRemove: string[];
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_members: {
            to_remove: toRemove
          }
        })),
        funds
      })
    };
  };
  updatePerAddressLimit = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_per_address_limit: {}
        })),
        funds
      })
    };
  };
  increaseMemberLimit = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          increase_member_limit: {}
        })),
        funds
      })
    };
  };
  updateAdmins = ({
    admins
  }: {
    admins: string[];
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_admins: {
            admins
          }
        })),
        funds
      })
    };
  };
  freeze = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          freeze: {}
        })),
        funds
      })
    };
  };
}
/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { AdminListResponse, CanExecuteResponse, Timestamp, Uint64, Uint128, ConfigResponse, Coin, Config, ExecuteMsg, AddMembersMsg, RemoveMembersMsg, HasEndedResponse, HasMemberResponse, HasStartedResponse, InstantiateMsg, IsActiveResponse, MembersResponse, QueryMsg, CosmosMsgForEmpty, BankMsg, Binary, IbcMsg, WasmMsg, GovMsg, VoteOption, Empty, IbcTimeout, IbcTimeoutBlock } from "./Whitelist.types";
export interface WhitelistReadOnlyInterface {
  contractAddress: string;
  hasStarted: () => Promise<HasStartedResponse>;
  hasEnded: () => Promise<HasEndedResponse>;
  isActive: () => Promise<IsActiveResponse>;
  members: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<MembersResponse>;
  hasMember: ({
    member
  }: {
    member: string;
  }) => Promise<HasMemberResponse>;
  config: () => Promise<ConfigResponse>;
  adminList: () => Promise<AdminListResponse>;
  canExecute: ({
    msg,
    sender
  }: {
    msg: CosmosMsgForEmpty;
    sender: string;
  }) => Promise<CanExecuteResponse>;
}
export class WhitelistQueryClient implements WhitelistReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.hasStarted = this.hasStarted.bind(this);
    this.hasEnded = this.hasEnded.bind(this);
    this.isActive = this.isActive.bind(this);
    this.members = this.members.bind(this);
    this.hasMember = this.hasMember.bind(this);
    this.config = this.config.bind(this);
    this.adminList = this.adminList.bind(this);
    this.canExecute = this.canExecute.bind(this);
  }

  hasStarted = async (): Promise<HasStartedResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      has_started: {}
    });
  };
  hasEnded = async (): Promise<HasEndedResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      has_ended: {}
    });
  };
  isActive = async (): Promise<IsActiveResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      is_active: {}
    });
  };
  members = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<MembersResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      members: {
        limit,
        start_after: startAfter
      }
    });
  };
  hasMember = async ({
    member
  }: {
    member: string;
  }): Promise<HasMemberResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      has_member: {
        member
      }
    });
  };
  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  adminList = async (): Promise<AdminListResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      admin_list: {}
    });
  };
  canExecute = async ({
    msg,
    sender
  }: {
    msg: CosmosMsgForEmpty;
    sender: string;
  }): Promise<CanExecuteResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      can_execute: {
        msg,
        sender
      }
    });
  };
}
export interface WhitelistInterface extends WhitelistReadOnlyInterface {
  contractAddress: string;
  sender: string;
  updateStartTime: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateEndTime: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  addMembers: ({
    toAdd
  }: {
    toAdd: string[];
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  removeMembers: ({
    toRemove
  }: {
    toRemove: string[];
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updatePerAddressLimit: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  increaseMemberLimit: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateAdmins: ({
    admins
  }: {
    admins: string[];
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  freeze: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class WhitelistClient extends WhitelistQueryClient implements WhitelistInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
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

  updateStartTime = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_start_time: {}
    }, fee, memo, _funds);
  };
  updateEndTime = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_end_time: {}
    }, fee, memo, _funds);
  };
  addMembers = async ({
    toAdd
  }: {
    toAdd: string[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_members: {
        to_add: toAdd
      }
    }, fee, memo, _funds);
  };
  removeMembers = async ({
    toRemove
  }: {
    toRemove: string[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_members: {
        to_remove: toRemove
      }
    }, fee, memo, _funds);
  };
  updatePerAddressLimit = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_per_address_limit: {}
    }, fee, memo, _funds);
  };
  increaseMemberLimit = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      increase_member_limit: {}
    }, fee, memo, _funds);
  };
  updateAdmins = async ({
    admins
  }: {
    admins: string[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_admins: {
        admins
      }
    }, fee, memo, _funds);
  };
  freeze = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      freeze: {}
    }, fee, memo, _funds);
  };
}
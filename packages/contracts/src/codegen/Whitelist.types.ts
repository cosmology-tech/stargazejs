/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Timestamp = Uint64;
export type Uint64 = string;
export type Uint128 = string;
export interface ConfigResponse {
  end_time: Timestamp;
  is_active: boolean;
  member_limit: number;
  num_members: number;
  per_address_limit: number;
  start_time: Timestamp;
  unit_price: Coin;
  [k: string]: unknown;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export type Addr = string;
export interface Config {
  admin: Addr;
  end_time: Timestamp;
  member_limit: number;
  num_members: number;
  per_address_limit: number;
  start_time: Timestamp;
  unit_price: Coin;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  update_start_time: Timestamp;
} | {
  update_end_time: Timestamp;
} | {
  add_members: AddMembersMsg;
} | {
  remove_members: RemoveMembersMsg;
} | {
  update_per_address_limit: number;
} | {
  increase_member_limit: number;
};
export interface AddMembersMsg {
  to_add: string[];
  [k: string]: unknown;
}
export interface RemoveMembersMsg {
  to_remove: string[];
  [k: string]: unknown;
}
export interface HasEndedResponse {
  has_ended: boolean;
  [k: string]: unknown;
}
export interface HasMemberResponse {
  has_member: boolean;
  [k: string]: unknown;
}
export interface HasStartedResponse {
  has_started: boolean;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  end_time: Timestamp;
  member_limit: number;
  members: string[];
  per_address_limit: number;
  start_time: Timestamp;
  unit_price: Coin;
  [k: string]: unknown;
}
export interface IsActiveResponse {
  is_active: boolean;
  [k: string]: unknown;
}
export interface MembersResponse {
  members: string[];
  [k: string]: unknown;
}
export type QueryMsg = {
  has_started: {
    [k: string]: unknown;
  };
} | {
  has_ended: {
    [k: string]: unknown;
  };
} | {
  is_active: {
    [k: string]: unknown;
  };
} | {
  members: {
    limit?: number | null;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  has_member: {
    member: string;
    [k: string]: unknown;
  };
} | {
  config: {
    [k: string]: unknown;
  };
};
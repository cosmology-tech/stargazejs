/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export interface AdminListResponse {
  admins: string[];
  mutable: boolean;
}
export interface CanExecuteResponse {
  can_execute: boolean;
}
export type Timestamp = Uint64;
export type Uint64 = string;
export type Uint128 = string;
export interface ConfigResponse {
  end_time: Timestamp;
  is_active: boolean;
  member_limit: number;
  mint_price: Coin;
  num_members: number;
  per_address_limit: number;
  start_time: Timestamp;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export interface Config {
  end_time: Timestamp;
  member_limit: number;
  mint_price: Coin;
  num_members: number;
  per_address_limit: number;
  start_time: Timestamp;
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
} | {
  update_admins: {
    admins: string[];
  };
} | {
  freeze: {};
};
export interface AddMembersMsg {
  to_add: string[];
}
export interface RemoveMembersMsg {
  to_remove: string[];
}
export interface HasEndedResponse {
  has_ended: boolean;
}
export interface HasMemberResponse {
  has_member: boolean;
}
export interface HasStartedResponse {
  has_started: boolean;
}
export interface InstantiateMsg {
  admins: string[];
  admins_mutable: boolean;
  end_time: Timestamp;
  member_limit: number;
  members: string[];
  mint_price: Coin;
  per_address_limit: number;
  start_time: Timestamp;
}
export interface IsActiveResponse {
  is_active: boolean;
}
export interface MembersResponse {
  members: string[];
}
export type QueryMsg = {
  has_started: {};
} | {
  has_ended: {};
} | {
  is_active: {};
} | {
  members: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  has_member: {
    member: string;
  };
} | {
  config: {};
} | {
  admin_list: {};
} | {
  can_execute: {
    msg: CosmosMsgForEmpty;
    sender: string;
  };
};
export type CosmosMsgForEmpty = {
  bank: BankMsg;
} | {
  custom: Empty;
} | {
  wasm: WasmMsg;
};
export type BankMsg = {
  send: {
    amount: Coin[];
    to_address: string;
    [k: string]: unknown;
  };
} | {
  burn: {
    amount: Coin[];
    [k: string]: unknown;
  };
};
export type WasmMsg = {
  execute: {
    contract_addr: string;
    funds: Coin[];
    msg: Binary;
    [k: string]: unknown;
  };
} | {
  instantiate: {
    admin?: string | null;
    code_id: number;
    funds: Coin[];
    label: string;
    msg: Binary;
    [k: string]: unknown;
  };
} | {
  migrate: {
    contract_addr: string;
    msg: Binary;
    new_code_id: number;
    [k: string]: unknown;
  };
} | {
  update_admin: {
    admin: string;
    contract_addr: string;
    [k: string]: unknown;
  };
} | {
  clear_admin: {
    contract_addr: string;
    [k: string]: unknown;
  };
};
export type Binary = string;
export interface Empty {
  [k: string]: unknown;
}
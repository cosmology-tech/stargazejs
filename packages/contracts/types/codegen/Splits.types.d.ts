/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
export declare type Group = {
    cw4_instantiate: ContractInstantiateMsg;
} | {
    cw4_address: string;
};
export declare type Admin = {
    address: {
        addr: string;
    };
} | {
    creator: {};
};
export declare type Binary = string;
export interface InstantiateMsg {
    admin?: string | null;
    group: Group;
}
export interface ContractInstantiateMsg {
    admin?: Admin | null;
    code_id: number;
    label: string;
    msg: Binary;
}
export declare type ExecuteMsg = {
    update_admin: {
        admin?: string | null;
    };
} | {
    distribute: {};
};
export declare type QueryMsg = {
    admin: {};
} | {
    group: {};
} | {
    member: {
        address: string;
    };
} | {
    list_members: {
        limit?: number | null;
        start_after?: string | null;
    };
};
export interface AdminResponse {
    admin?: string | null;
}
export declare type Addr = string;
export interface MemberListResponse {
    members: Member[];
}
export interface Member {
    addr: string;
    weight: number;
}
export interface MemberResponse {
    weight?: number | null;
}

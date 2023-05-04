/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
export type Addr = string;
export interface InstantiateMsg {
    addresses: string[];
    admin: Addr;
    airdrop_amount: number;
    claim_msg_plaintext: string;
    minter_address: Addr;
    per_address_limit: number;
    whitelist_code_id: number;
}
export type ExecuteMsg = {
    claim_airdrop: {
        eth_address: string;
        eth_sig: string;
    };
};
export type QueryMsg = {
    airdrop_eligible: {
        eth_address: string;
    };
} | {
    get_minter: {};
};
export type Boolean = boolean;

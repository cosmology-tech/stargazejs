/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
export declare type Expiration = {
    at_height: number;
} | {
    at_time: Timestamp;
} | {
    never: {
        [k: string]: unknown;
    };
};
export declare type Timestamp = Uint64;
export declare type Uint64 = string;
export interface AllNftInfoResponse {
    access: OwnerOfResponse;
    info: NftInfoResponseForEmpty;
    [k: string]: unknown;
}
export interface OwnerOfResponse {
    approvals: Approval[];
    owner: string;
    [k: string]: unknown;
}
export interface Approval {
    expires: Expiration;
    spender: string;
    [k: string]: unknown;
}
export interface NftInfoResponseForEmpty {
    extension: Empty;
    token_uri?: string | null;
    [k: string]: unknown;
}
export interface Empty {
    [k: string]: unknown;
}
export interface AllOperatorsResponse {
    operators: Approval[];
    [k: string]: unknown;
}
export interface AllTokensResponse {
    tokens: string[];
    [k: string]: unknown;
}
export interface ApprovalResponse {
    approval: Approval;
    [k: string]: unknown;
}
export interface ApprovalsResponse {
    approvals: Approval[];
    [k: string]: unknown;
}
export declare type Decimal = string;
export interface CollectionInfoResponse {
    creator: string;
    description: string;
    explicit_content: boolean;
    external_link?: string | null;
    image: string;
    royalty_info?: RoyaltyInfoResponse | null;
    trading_start_time?: Timestamp | null;
    [k: string]: unknown;
}
export interface RoyaltyInfoResponse {
    payment_address: string;
    share: Decimal;
    [k: string]: unknown;
}
export interface ContractInfoResponse {
    name: string;
    symbol: string;
    [k: string]: unknown;
}
export interface InstantiateMsg {
    collection_info: CollectionInfoForRoyaltyInfoResponse;
    minter: string;
    name: string;
    symbol: string;
    [k: string]: unknown;
}
export interface CollectionInfoForRoyaltyInfoResponse {
    creator: string;
    description: string;
    explicit_content: boolean;
    external_link?: string | null;
    image: string;
    royalty_info?: RoyaltyInfoResponse | null;
    trading_start_time?: Timestamp | null;
    [k: string]: unknown;
}
export interface MinterResponse {
    minter: string;
    [k: string]: unknown;
}
export interface NftInfoResponse {
    extension: Empty;
    token_uri?: string | null;
    [k: string]: unknown;
}
export interface NumTokensResponse {
    count: number;
    [k: string]: unknown;
}
export interface OperatorsResponse {
    operators: Approval[];
    [k: string]: unknown;
}
export declare type QueryMsg = {
    owner_of: {
        include_expired?: boolean | null;
        token_id: string;
        [k: string]: unknown;
    };
} | {
    approval: {
        include_expired?: boolean | null;
        spender: string;
        token_id: string;
        [k: string]: unknown;
    };
} | {
    approvals: {
        include_expired?: boolean | null;
        token_id: string;
        [k: string]: unknown;
    };
} | {
    all_operators: {
        include_expired?: boolean | null;
        limit?: number | null;
        owner: string;
        start_after?: string | null;
        [k: string]: unknown;
    };
} | {
    num_tokens: {
        [k: string]: unknown;
    };
} | {
    contract_info: {
        [k: string]: unknown;
    };
} | {
    nft_info: {
        token_id: string;
        [k: string]: unknown;
    };
} | {
    all_nft_info: {
        include_expired?: boolean | null;
        token_id: string;
        [k: string]: unknown;
    };
} | {
    tokens: {
        limit?: number | null;
        owner: string;
        start_after?: string | null;
        [k: string]: unknown;
    };
} | {
    all_tokens: {
        limit?: number | null;
        start_after?: string | null;
        [k: string]: unknown;
    };
} | {
    minter: {
        [k: string]: unknown;
    };
} | {
    collection_info: {
        [k: string]: unknown;
    };
};
export interface TokensResponse {
    tokens: string[];
    [k: string]: unknown;
}

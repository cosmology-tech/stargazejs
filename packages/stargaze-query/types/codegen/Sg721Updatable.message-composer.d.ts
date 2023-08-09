/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { Expiration, Empty, Binary, UpdateCollectionInfoMsgForRoyaltyInfoResponse } from "./Sg721Updatable.types";
export interface Sg721UpdatableMessage {
    contractAddress: string;
    sender: string;
    freezeTokenMetadata: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateTokenMetadata: ({ tokenId, tokenUri }: {
        tokenId: string;
        tokenUri?: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    enableUpdatable: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
    transferNft: ({ recipient, tokenId }: {
        recipient: string;
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    sendNft: ({ contract, msg, tokenId }: {
        contract: string;
        msg: Binary;
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    approve: ({ expires, spender, tokenId }: {
        expires?: Expiration;
        spender: string;
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    revoke: ({ spender, tokenId }: {
        spender: string;
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    approveAll: ({ expires, operator }: {
        expires?: Expiration;
        operator: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    revokeAll: ({ operator }: {
        operator: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    burn: ({ tokenId }: {
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateCollectionInfo: ({ collectionInfo }: {
        collectionInfo: UpdateCollectionInfoMsgForRoyaltyInfoResponse;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateTradingStartTime: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
    freezeCollectionInfo: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
    mint: ({ extension, owner, tokenId, tokenUri }: {
        extension?: Empty;
        owner: string;
        tokenId: string;
        tokenUri?: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    extension: ({ msg }: {
        msg: Empty;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class Sg721UpdatableMessageComposer implements Sg721UpdatableMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    freezeTokenMetadata: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateTokenMetadata: ({ tokenId, tokenUri }: {
        tokenId: string;
        tokenUri?: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    enableUpdatable: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
    transferNft: ({ recipient, tokenId }: {
        recipient: string;
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    sendNft: ({ contract, msg, tokenId }: {
        contract: string;
        msg: Binary;
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    approve: ({ expires, spender, tokenId }: {
        expires?: Expiration;
        spender: string;
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    revoke: ({ spender, tokenId }: {
        spender: string;
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    approveAll: ({ expires, operator }: {
        expires?: Expiration;
        operator: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    revokeAll: ({ operator }: {
        operator: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    burn: ({ tokenId }: {
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateCollectionInfo: ({ collectionInfo }: {
        collectionInfo: UpdateCollectionInfoMsgForRoyaltyInfoResponse;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateTradingStartTime: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
    freezeCollectionInfo: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
    mint: ({ extension, owner, tokenId, tokenUri }: {
        extension?: Empty;
        owner: string;
        tokenId: string;
        tokenUri?: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    extension: ({ msg }: {
        msg: Empty;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}

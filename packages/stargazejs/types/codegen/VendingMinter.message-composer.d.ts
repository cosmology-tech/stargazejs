/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { Coin } from "./VendingMinter.types";
export interface VendingMinterMessage {
    contractAddress: string;
    sender: string;
    mint: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    setWhitelist: ({ whitelist }: {
        whitelist: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    purge: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateMintPrice: ({ price }: {
        price: number;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateStartTime: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateTradingStartTime: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updatePerAddressLimit: ({ perAddressLimit }: {
        perAddressLimit: number;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    mintTo: ({ recipient }: {
        recipient: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    mintFor: ({ recipient, tokenId }: {
        recipient: string;
        tokenId: number;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    shuffle: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    burnRemaining: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class VendingMinterMessageComposer implements VendingMinterMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    mint: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    setWhitelist: ({ whitelist }: {
        whitelist: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    purge: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateMintPrice: ({ price }: {
        price: number;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateStartTime: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateTradingStartTime: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updatePerAddressLimit: ({ perAddressLimit }: {
        perAddressLimit: number;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    mintTo: ({ recipient }: {
        recipient: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    mintFor: ({ recipient, tokenId }: {
        recipient: string;
        tokenId: number;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    shuffle: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    burnRemaining: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}

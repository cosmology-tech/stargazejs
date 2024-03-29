/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
export interface SgEthAirdropMessage {
    contractAddress: string;
    sender: string;
    claimAirdrop: ({ ethAddress, ethSig }: {
        ethAddress: string;
        ethSig: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class SgEthAirdropMessageComposer implements SgEthAirdropMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    claimAirdrop: ({ ethAddress, ethSig }: {
        ethAddress: string;
        ethSig: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}

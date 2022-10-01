/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.16.5.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
export interface SplitsMessage {
    contractAddress: string;
    sender: string;
    distribute: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class SplitsMessageComposer implements SplitsMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    distribute: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}

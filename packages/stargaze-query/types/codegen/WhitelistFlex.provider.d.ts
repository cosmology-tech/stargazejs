/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { ContractBase, IContractConstructor } from "./contractContextBase";
import { WhitelistFlexClient, WhitelistFlexQueryClient } from "./WhitelistFlex.client";
import { WhitelistFlexMessageComposer } from "./WhitelistFlex.message-composer";
export declare class WhitelistFlex extends ContractBase<WhitelistFlexClient, WhitelistFlexQueryClient, WhitelistFlexMessageComposer> {
    constructor({ address, cosmWasmClient, signingCosmWasmClient }: IContractConstructor);
}

/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { ContractBase, IContractConstructor } from "./contractContextBase";
import { Sg721UpdatableClient, Sg721UpdatableQueryClient } from "./Sg721Updatable.client";
import { Sg721UpdatableMessageComposer } from "./Sg721Updatable.message-composer";
export declare class Sg721Updatable extends ContractBase<Sg721UpdatableClient, Sg721UpdatableQueryClient, Sg721UpdatableMessageComposer> {
    constructor({ address, cosmWasmClient, signingCosmWasmClient }: IContractConstructor);
}

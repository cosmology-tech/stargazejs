/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { ContractBase, IContractConstructor, IEmptyClient } from "./contractContextBase";
import { SG721BaseQueryClient } from "./SG721Base.client";
export declare class SG721Base extends ContractBase<IEmptyClient, SG721BaseQueryClient, IEmptyClient> {
    constructor({ address, cosmWasmClient, signingCosmWasmClient }: IContractConstructor);
}

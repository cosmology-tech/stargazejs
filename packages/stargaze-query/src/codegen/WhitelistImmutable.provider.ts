/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { ContractBase, IContractConstructor, IEmptyClient } from "./contractContextBase";
import { WhitelistImmutableQueryClient } from "./WhitelistImmutable.client";
export class WhitelistImmutable extends ContractBase<IEmptyClient, WhitelistImmutableQueryClient, IEmptyClient> {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient
  }: IContractConstructor) {
    super(address, cosmWasmClient, signingCosmWasmClient, undefined, WhitelistImmutableQueryClient, undefined);
  }

}
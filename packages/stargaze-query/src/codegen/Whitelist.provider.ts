/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { ContractBase, IContractConstructor } from "./contractContextBase";
import { WhitelistClient, WhitelistQueryClient } from "./Whitelist.client";
import { WhitelistMessageComposer } from "./Whitelist.message-composer";
export class Whitelist extends ContractBase<WhitelistClient, WhitelistQueryClient, WhitelistMessageComposer> {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient
  }: IContractConstructor) {
    super(address, cosmWasmClient, signingCosmWasmClient, WhitelistClient, WhitelistQueryClient, WhitelistMessageComposer);
  }

}
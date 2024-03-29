/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { ContractBase, IContractConstructor } from "./contractContextBase";
import { SplitsClient, SplitsQueryClient } from "./Splits.client";
import { SplitsMessageComposer } from "./Splits.message-composer";
export class Splits extends ContractBase<SplitsClient, SplitsQueryClient, SplitsMessageComposer> {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient
  }: IContractConstructor) {
    super(address, cosmWasmClient, signingCosmWasmClient, SplitsClient, SplitsQueryClient, SplitsMessageComposer);
  }

}
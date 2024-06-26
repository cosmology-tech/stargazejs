/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { ContractBase, IContractConstructor } from "./contractContextBase";
import { Sg721UpdatableClient, Sg721UpdatableQueryClient } from "./Sg721Updatable.client";
import { Sg721UpdatableMsgComposer } from "./Sg721Updatable.message-composer";
export class Sg721Updatable extends ContractBase<Sg721UpdatableClient, Sg721UpdatableQueryClient, Sg721UpdatableMsgComposer> {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient
  }: IContractConstructor) {
    super(address, cosmWasmClient, signingCosmWasmClient, Sg721UpdatableClient, Sg721UpdatableQueryClient, Sg721UpdatableMsgComposer);
  }

}
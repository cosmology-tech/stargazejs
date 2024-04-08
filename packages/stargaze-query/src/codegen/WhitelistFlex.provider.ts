/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { ContractBase, IContractConstructor } from "./contractContextBase";
import { WhitelistFlexClient, WhitelistFlexQueryClient } from "./WhitelistFlex.client";
import { WhitelistFlexMsgComposer } from "./WhitelistFlex.message-composer";
export class WhitelistFlex extends ContractBase<WhitelistFlexClient, WhitelistFlexQueryClient, WhitelistFlexMsgComposer> {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient
  }: IContractConstructor) {
    super(address, cosmWasmClient, signingCosmWasmClient, WhitelistFlexClient, WhitelistFlexQueryClient, WhitelistFlexMsgComposer);
  }

}
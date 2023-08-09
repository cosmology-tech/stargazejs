/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { ContractBase, IContractConstructor } from "./contractContextBase";
import { MarketplaceClient, MarketplaceQueryClient } from "./Marketplace.client";
import { MarketplaceMessageComposer } from "./Marketplace.message-composer";
export class Marketplace extends ContractBase<MarketplaceClient, MarketplaceQueryClient, MarketplaceMessageComposer> {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient
  }: IContractConstructor) {
    super(address, cosmWasmClient, signingCosmWasmClient, MarketplaceClient, MarketplaceQueryClient, MarketplaceMessageComposer);
  }

}
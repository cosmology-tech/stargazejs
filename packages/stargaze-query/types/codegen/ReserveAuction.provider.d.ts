/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { ContractBase, IContractConstructor } from "./contractContextBase";
import { ReserveAuctionClient, ReserveAuctionQueryClient } from "./ReserveAuction.client";
import { ReserveAuctionMessageComposer } from "./ReserveAuction.message-composer";
export declare class ReserveAuction extends ContractBase<ReserveAuctionClient, ReserveAuctionQueryClient, ReserveAuctionMessageComposer> {
    constructor({ address, cosmWasmClient, signingCosmWasmClient }: IContractConstructor);
}

/**
* This file and any referenced files were automatically generated by @cosmwasm/ts-codegen@0.34.0
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or yarn proto command to regenerate this bundle.
*/
import { CosmWasmClient, SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
export interface IContractConstructor {
    address: string | undefined;
    cosmWasmClient: CosmWasmClient | undefined;
    signingCosmWasmClient: SigningCosmWasmClient | undefined;
}
export declare const NO_SINGING_ERROR_MESSAGE = "signingCosmWasmClient not connected";
export declare const NO_COSMWASW_CLIENT_ERROR_MESSAGE = "cosmWasmClient not connected";
export declare const NO_ADDRESS_ERROR_MESSAGE = "address doesn't exist";
export declare const NO_SIGNING_CLIENT_ERROR_MESSAGE = "Signing client is not generated. Please check ts-codegen config";
export declare const NO_QUERY_CLIENT_ERROR_MESSAGE = "Query client is not generated. Please check ts-codegen config";
export declare const NO_MESSAGE_COMPOSER_ERROR_MESSAGE = "Message composer client is not generated. Please check ts-codegen config";
/**
 * a placeholder for non-generated classes
 */
export interface IEmptyClient {
}
export interface ISigningClientProvider<T> {
    getSigningClient(contractAddr: string): T;
}
export interface IQueryClientProvider<T> {
    getQueryClient(contractAddr: string): T;
}
export interface IMessageComposerProvider<T> {
    getMessageComposer(contractAddr: string): T;
}
export declare class ContractBase<TSign = IEmptyClient, TQuery = IEmptyClient, TMsgComposer = IEmptyClient> {
    address: string | undefined;
    cosmWasmClient: CosmWasmClient | undefined;
    signingCosmWasmClient: SigningCosmWasmClient | undefined;
    TSign?: new (client: SigningCosmWasmClient, sender: string, contractAddress: string) => TSign;
    TQuery?: new (client: CosmWasmClient, contractAddress: string) => TQuery;
    TMsgComposer?: new (sender: string, contractAddress: string) => TMsgComposer;
    constructor(address: string | undefined, cosmWasmClient: CosmWasmClient | undefined, signingCosmWasmClient: SigningCosmWasmClient | undefined, TSign?: new (client: SigningCosmWasmClient, sender: string, contractAddress: string) => TSign, TQuery?: new (client: CosmWasmClient, contractAddress: string) => TQuery, TMsgComposer?: new (sender: string, contractAddress: string) => TMsgComposer);
    getSigningClient(contractAddr: string): TSign;
    getQueryClient(contractAddr: string): TQuery;
    getMessageComposer(contractAddr: string): TMsgComposer;
}

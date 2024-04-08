/**
* This file and any referenced files were automatically generated by @cosmwasm/ts-codegen@0.35.7
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or yarn proto command to regenerate this bundle.
*/


import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate';

export interface IContractConstructor {
  address: string | undefined;
  cosmWasmClient: CosmWasmClient | undefined;
  signingCosmWasmClient: SigningCosmWasmClient | undefined;
}

export const NO_SINGING_ERROR_MESSAGE = 'signingCosmWasmClient not connected';

export const NO_COSMWASW_CLIENT_ERROR_MESSAGE = 'cosmWasmClient not connected';

export const NO_ADDRESS_ERROR_MESSAGE = "address doesn't exist";

export const NO_SIGNING_CLIENT_ERROR_MESSAGE =
  'Signing client is not generated. Please check ts-codegen config';

export const NO_QUERY_CLIENT_ERROR_MESSAGE =
  'Query client is not generated. Please check ts-codegen config';

export const NO_MESSAGE_COMPOSER_ERROR_MESSAGE =
  'Message composer client is not generated. Please check ts-codegen config';

/**
 * a placeholder for non-generated classes
 */
export interface IEmptyClient {}

export interface ISigningClientProvider<T> {
  getSigningClient(contractAddr: string): T;
}

export interface IQueryClientProvider<T> {
  getQueryClient(contractAddr: string): T;
}

export interface IMessageComposerProvider<T> {
  getMessageComposer(contractAddr: string): T;
}

export class ContractBase<
  TSign = IEmptyClient,
  TQuery = IEmptyClient,
  TMsgComposer = IEmptyClient
> {
  constructor(
    protected address: string | undefined,
    protected cosmWasmClient: CosmWasmClient | undefined,
    protected signingCosmWasmClient: SigningCosmWasmClient | undefined,
    private TSign?: new (
      client: SigningCosmWasmClient,
      sender: string,
      contractAddress: string
    ) => TSign,
    private TQuery?: new (
      client: CosmWasmClient,
      contractAddress: string
    ) => TQuery,
    private TMsgComposer?: new (
      sender: string,
      contractAddress: string
    ) => TMsgComposer
  ) {}

  public getSigningClient(contractAddr: string): TSign {
    if (!this.signingCosmWasmClient) throw new Error(NO_SINGING_ERROR_MESSAGE);
    if (!this.address) throw new Error(NO_ADDRESS_ERROR_MESSAGE);
    if (!this.TSign) throw new Error(NO_SIGNING_CLIENT_ERROR_MESSAGE);
    return new this.TSign(
      this.signingCosmWasmClient,
      this.address,
      contractAddr
    );
  }

  public getQueryClient(contractAddr: string): TQuery {
    if (!this.cosmWasmClient) throw new Error(NO_COSMWASW_CLIENT_ERROR_MESSAGE);
    if (!this.TQuery) throw new Error(NO_QUERY_CLIENT_ERROR_MESSAGE);
    return new this.TQuery(this.cosmWasmClient, contractAddr);
  }

  public getMessageComposer(contractAddr: string): TMsgComposer {
    if (!this.address) throw new Error(NO_ADDRESS_ERROR_MESSAGE);
    if (!this.TMsgComposer) throw new Error(NO_MESSAGE_COMPOSER_ERROR_MESSAGE);
    return new this.TMsgComposer(this.address, contractAddr);
  }
}

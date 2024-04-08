/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Uint128, Timestamp, Uint64, ConfigResponse, Coin, ExecuteMsg, MintCountResponse, MintPriceResponse, MintableNumTokensResponse, Addr, MinterConfigForConfigExtension, ConfigExtension, QueryMsg, StartTimeResponse, StatusResponse, Status } from "./VendingMinter.types";
export interface VendingMinterReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  mintableNumTokens: () => Promise<MintableNumTokensResponse>;
  startTime: () => Promise<StartTimeResponse>;
  mintPrice: () => Promise<MintPriceResponse>;
  mintCount: ({
    address
  }: {
    address: string;
  }) => Promise<MintCountResponse>;
  status: () => Promise<StatusResponse>;
}
export class VendingMinterQueryClient implements VendingMinterReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.mintableNumTokens = this.mintableNumTokens.bind(this);
    this.startTime = this.startTime.bind(this);
    this.mintPrice = this.mintPrice.bind(this);
    this.mintCount = this.mintCount.bind(this);
    this.status = this.status.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  mintableNumTokens = async (): Promise<MintableNumTokensResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      mintable_num_tokens: {}
    });
  };
  startTime = async (): Promise<StartTimeResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      start_time: {}
    });
  };
  mintPrice = async (): Promise<MintPriceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      mint_price: {}
    });
  };
  mintCount = async ({
    address
  }: {
    address: string;
  }): Promise<MintCountResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      mint_count: {
        address
      }
    });
  };
  status = async (): Promise<StatusResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      status: {}
    });
  };
}
export interface VendingMinterInterface extends VendingMinterReadOnlyInterface {
  contractAddress: string;
  sender: string;
  mint: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  setWhitelist: ({
    whitelist
  }: {
    whitelist: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  purge: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateMintPrice: ({
    price
  }: {
    price: number;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateStartTime: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateStartTradingTime: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updatePerAddressLimit: ({
    perAddressLimit
  }: {
    perAddressLimit: number;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  mintTo: ({
    recipient
  }: {
    recipient: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  mintFor: ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: number;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  shuffle: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  burnRemaining: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateDiscountPrice: ({
    price
  }: {
    price: number;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  removeDiscountPrice: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class VendingMinterClient extends VendingMinterQueryClient implements VendingMinterInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.mint = this.mint.bind(this);
    this.setWhitelist = this.setWhitelist.bind(this);
    this.purge = this.purge.bind(this);
    this.updateMintPrice = this.updateMintPrice.bind(this);
    this.updateStartTime = this.updateStartTime.bind(this);
    this.updateStartTradingTime = this.updateStartTradingTime.bind(this);
    this.updatePerAddressLimit = this.updatePerAddressLimit.bind(this);
    this.mintTo = this.mintTo.bind(this);
    this.mintFor = this.mintFor.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.burnRemaining = this.burnRemaining.bind(this);
    this.updateDiscountPrice = this.updateDiscountPrice.bind(this);
    this.removeDiscountPrice = this.removeDiscountPrice.bind(this);
  }

  mint = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint: {}
    }, fee, memo, _funds);
  };
  setWhitelist = async ({
    whitelist
  }: {
    whitelist: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_whitelist: {
        whitelist
      }
    }, fee, memo, _funds);
  };
  purge = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      purge: {}
    }, fee, memo, _funds);
  };
  updateMintPrice = async ({
    price
  }: {
    price: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_mint_price: {
        price
      }
    }, fee, memo, _funds);
  };
  updateStartTime = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_start_time: {}
    }, fee, memo, _funds);
  };
  updateStartTradingTime = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_start_trading_time: {}
    }, fee, memo, _funds);
  };
  updatePerAddressLimit = async ({
    perAddressLimit
  }: {
    perAddressLimit: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_per_address_limit: {
        per_address_limit: perAddressLimit
      }
    }, fee, memo, _funds);
  };
  mintTo = async ({
    recipient
  }: {
    recipient: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint_to: {
        recipient
      }
    }, fee, memo, _funds);
  };
  mintFor = async ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint_for: {
        recipient,
        token_id: tokenId
      }
    }, fee, memo, _funds);
  };
  shuffle = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      shuffle: {}
    }, fee, memo, _funds);
  };
  burnRemaining = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      burn_remaining: {}
    }, fee, memo, _funds);
  };
  updateDiscountPrice = async ({
    price
  }: {
    price: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_discount_price: {
        price
      }
    }, fee, memo, _funds);
  };
  removeDiscountPrice = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_discount_price: {}
    }, fee, memo, _funds);
  };
}
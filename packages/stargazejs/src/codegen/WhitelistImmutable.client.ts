/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { InstantiateMsg, ExecuteMsg, QueryMsg, Uint64, Addr, ConfigResponse, Config, Boolean, PerAddressLimitResponse } from "./WhitelistImmutable.types";
export interface WhitelistImmutableReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  includesAddress: ({
    address
  }: {
    address: string;
  }) => Promise<Boolean>;
  admin: () => Promise<Uint64>;
  addressCount: () => Promise<Uint64>;
  perAddressLimit: () => Promise<PerAddressLimitResponse>;
}
export class WhitelistImmutableQueryClient implements WhitelistImmutableReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.includesAddress = this.includesAddress.bind(this);
    this.admin = this.admin.bind(this);
    this.addressCount = this.addressCount.bind(this);
    this.perAddressLimit = this.perAddressLimit.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  includesAddress = async ({
    address
  }: {
    address: string;
  }): Promise<Boolean> => {
    return this.client.queryContractSmart(this.contractAddress, {
      includes_address: {
        address
      }
    });
  };
  admin = async (): Promise<Uint64> => {
    return this.client.queryContractSmart(this.contractAddress, {
      admin: {}
    });
  };
  addressCount = async (): Promise<Uint64> => {
    return this.client.queryContractSmart(this.contractAddress, {
      address_count: {}
    });
  };
  perAddressLimit = async (): Promise<PerAddressLimitResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      per_address_limit: {}
    });
  };
}
/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Addr, InstantiateMsg, ExecuteMsg, QueryMsg, Boolean } from "./SgEthAirdrop.types";
export interface SgEthAirdropReadOnlyInterface {
  contractAddress: string;
  airdropEligible: ({
    ethAddress
  }: {
    ethAddress: string;
  }) => Promise<Boolean>;
  getMinter: () => Promise<Addr>;
}
export class SgEthAirdropQueryClient implements SgEthAirdropReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.airdropEligible = this.airdropEligible.bind(this);
    this.getMinter = this.getMinter.bind(this);
  }

  airdropEligible = async ({
    ethAddress
  }: {
    ethAddress: string;
  }): Promise<Boolean> => {
    return this.client.queryContractSmart(this.contractAddress, {
      airdrop_eligible: {
        eth_address: ethAddress
      }
    });
  };
  getMinter = async (): Promise<Addr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_minter: {}
    });
  };
}
export interface SgEthAirdropInterface extends SgEthAirdropReadOnlyInterface {
  contractAddress: string;
  sender: string;
  claimAirdrop: ({
    ethAddress,
    ethSig
  }: {
    ethAddress: string;
    ethSig: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class SgEthAirdropClient extends SgEthAirdropQueryClient implements SgEthAirdropInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.claimAirdrop = this.claimAirdrop.bind(this);
  }

  claimAirdrop = async ({
    ethAddress,
    ethSig
  }: {
    ethAddress: string;
    ethSig: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      claim_airdrop: {
        eth_address: ethAddress,
        eth_sig: ethSig
      }
    }, fee, memo, _funds);
  };
}
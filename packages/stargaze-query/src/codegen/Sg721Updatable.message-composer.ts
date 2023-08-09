/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Expiration, Timestamp, Uint64, AllNftInfoResponse, OwnerOfResponse, Approval, NftInfoResponseForEmpty, Empty, AllOperatorsResponse, AllTokensResponse, ApprovalResponse, ApprovalsResponse, Decimal, CollectionInfoResponse, RoyaltyInfoResponse, ContractInfoResponse, ExecuteMsgForNullable_EmptyAndEmpty, Binary, UpdateCollectionInfoMsgForRoyaltyInfoResponse, MintMsgForNullable_Empty, InstantiateMsg, CollectionInfoForRoyaltyInfoResponse, MinterResponse, NftInfoResponse, NumTokensResponse, QueryMsg, TokensResponse } from "./Sg721Updatable.types";
export interface Sg721UpdatableMessage {
  contractAddress: string;
  sender: string;
  freezeTokenMetadata: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateTokenMetadata: ({
    tokenId,
    tokenUri
  }: {
    tokenId: string;
    tokenUri?: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  enableUpdatable: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  transferNft: ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  sendNft: ({
    contract,
    msg,
    tokenId
  }: {
    contract: string;
    msg: Binary;
    tokenId: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  approve: ({
    expires,
    spender,
    tokenId
  }: {
    expires?: Expiration;
    spender: string;
    tokenId: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  revoke: ({
    spender,
    tokenId
  }: {
    spender: string;
    tokenId: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  approveAll: ({
    expires,
    operator
  }: {
    expires?: Expiration;
    operator: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  revokeAll: ({
    operator
  }: {
    operator: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  burn: ({
    tokenId
  }: {
    tokenId: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateCollectionInfo: ({
    collectionInfo
  }: {
    collectionInfo: UpdateCollectionInfoMsgForRoyaltyInfoResponse;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateTradingStartTime: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  freezeCollectionInfo: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  mint: ({
    extension,
    owner,
    tokenId,
    tokenUri
  }: {
    extension?: Empty;
    owner: string;
    tokenId: string;
    tokenUri?: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  extension: ({
    msg
  }: {
    msg: Empty;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class Sg721UpdatableMessageComposer implements Sg721UpdatableMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.freezeTokenMetadata = this.freezeTokenMetadata.bind(this);
    this.updateTokenMetadata = this.updateTokenMetadata.bind(this);
    this.enableUpdatable = this.enableUpdatable.bind(this);
    this.transferNft = this.transferNft.bind(this);
    this.sendNft = this.sendNft.bind(this);
    this.approve = this.approve.bind(this);
    this.revoke = this.revoke.bind(this);
    this.approveAll = this.approveAll.bind(this);
    this.revokeAll = this.revokeAll.bind(this);
    this.burn = this.burn.bind(this);
    this.updateCollectionInfo = this.updateCollectionInfo.bind(this);
    this.updateTradingStartTime = this.updateTradingStartTime.bind(this);
    this.freezeCollectionInfo = this.freezeCollectionInfo.bind(this);
    this.mint = this.mint.bind(this);
    this.extension = this.extension.bind(this);
  }

  freezeTokenMetadata = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          freeze_token_metadata: {}
        })),
        funds: _funds
      })
    };
  };
  updateTokenMetadata = ({
    tokenId,
    tokenUri
  }: {
    tokenId: string;
    tokenUri?: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_token_metadata: {
            token_id: tokenId,
            token_uri: tokenUri
          }
        })),
        funds: _funds
      })
    };
  };
  enableUpdatable = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          enable_updatable: {}
        })),
        funds: _funds
      })
    };
  };
  transferNft = ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          transfer_nft: {
            recipient,
            token_id: tokenId
          }
        })),
        funds: _funds
      })
    };
  };
  sendNft = ({
    contract,
    msg,
    tokenId
  }: {
    contract: string;
    msg: Binary;
    tokenId: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          send_nft: {
            contract,
            msg,
            token_id: tokenId
          }
        })),
        funds: _funds
      })
    };
  };
  approve = ({
    expires,
    spender,
    tokenId
  }: {
    expires?: Expiration;
    spender: string;
    tokenId: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          approve: {
            expires,
            spender,
            token_id: tokenId
          }
        })),
        funds: _funds
      })
    };
  };
  revoke = ({
    spender,
    tokenId
  }: {
    spender: string;
    tokenId: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          revoke: {
            spender,
            token_id: tokenId
          }
        })),
        funds: _funds
      })
    };
  };
  approveAll = ({
    expires,
    operator
  }: {
    expires?: Expiration;
    operator: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          approve_all: {
            expires,
            operator
          }
        })),
        funds: _funds
      })
    };
  };
  revokeAll = ({
    operator
  }: {
    operator: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          revoke_all: {
            operator
          }
        })),
        funds: _funds
      })
    };
  };
  burn = ({
    tokenId
  }: {
    tokenId: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          burn: {
            token_id: tokenId
          }
        })),
        funds: _funds
      })
    };
  };
  updateCollectionInfo = ({
    collectionInfo
  }: {
    collectionInfo: UpdateCollectionInfoMsgForRoyaltyInfoResponse;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_collection_info: {
            collection_info: collectionInfo
          }
        })),
        funds: _funds
      })
    };
  };
  updateTradingStartTime = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_trading_start_time: {}
        })),
        funds: _funds
      })
    };
  };
  freezeCollectionInfo = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          freeze_collection_info: {}
        })),
        funds: _funds
      })
    };
  };
  mint = ({
    extension,
    owner,
    tokenId,
    tokenUri
  }: {
    extension?: Empty;
    owner: string;
    tokenId: string;
    tokenUri?: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          mint: {
            extension,
            owner,
            token_id: tokenId,
            token_uri: tokenUri
          }
        })),
        funds: _funds
      })
    };
  };
  extension = ({
    msg
  }: {
    msg: Empty;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          extension: {
            msg
          }
        })),
        funds: _funds
      })
    };
  };
}
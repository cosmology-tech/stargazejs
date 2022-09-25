import * as _82 from "../stargaze/alloc/v1beta1/genesis";
import * as _83 from "../stargaze/alloc/v1beta1/params";
import * as _84 from "../stargaze/alloc/v1beta1/query";
import * as _85 from "../stargaze/alloc/v1beta1/tx";
import * as _86 from "../stargaze/claim/v1beta1/claim_record";
import * as _87 from "../stargaze/claim/v1beta1/genesis";
import * as _88 from "../stargaze/claim/v1beta1/params";
import * as _89 from "../stargaze/claim/v1beta1/query";
import * as _90 from "../stargaze/claim/v1beta1/tx";
import * as _171 from "../stargaze/alloc/v1beta1/query.lcd";
import * as _172 from "../stargaze/claim/v1beta1/query.lcd";
import * as _173 from "../stargaze/alloc/v1beta1/query.rpc.query";
import * as _174 from "../stargaze/claim/v1beta1/query.rpc.query";
import * as _175 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _176 from "../stargaze/claim/v1beta1/tx.rpc.msg";
export declare namespace publicawesome {
    namespace stargaze {
        namespace alloc {
            const v1beta1: {
                MsgClientImpl: typeof _175.MsgClientImpl;
                QueryClientImpl: typeof _173.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponseSDKType>;
                };
                LCDQueryClient: typeof _171.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createVestingAccount(value: _85.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createVestingAccount(value: _85.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _85.MsgCreateVestingAccount;
                        };
                    };
                    fromPartial: {
                        createVestingAccount(value: _85.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _85.MsgCreateVestingAccount;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
                        aminoType: string;
                        toAmino: ({ fromAddress, toAddress, amount, startTime, endTime, delayed }: _85.MsgCreateVestingAccount) => {
                            from_address: string;
                            to_address: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                            start_time: string;
                            end_time: string;
                            delayed: boolean;
                        };
                        fromAmino: ({ from_address, to_address, amount, start_time, end_time, delayed }: {
                            from_address: string;
                            to_address: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                            start_time: string;
                            end_time: string;
                            delayed: boolean;
                        }) => _85.MsgCreateVestingAccount;
                    };
                };
                MsgCreateVestingAccount: {
                    encode(message: _85.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgCreateVestingAccount;
                    fromPartial(object: {
                        fromAddress?: string;
                        toAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        startTime?: any;
                        endTime?: any;
                        delayed?: boolean;
                    }): _85.MsgCreateVestingAccount;
                };
                MsgCreateVestingAccountResponse: {
                    encode(_: _85.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgCreateVestingAccountResponseSDKType;
                    fromPartial(_: {}): _85.MsgCreateVestingAccountResponse;
                };
                QueryParamsRequest: {
                    encode(_: _84.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryParamsRequest;
                    fromPartial(_: {}): _84.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _84.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryParamsResponseSDKType;
                    fromPartial(object: {
                        params?: {
                            distributionProportions?: {
                                nftIncentives?: string;
                                developerRewards?: string;
                            };
                            weightedDeveloperRewardsReceivers?: {
                                address?: string;
                                weight?: string;
                            }[];
                        };
                    }): _84.QueryParamsResponse;
                };
                WeightedAddress: {
                    encode(message: _83.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.WeightedAddress;
                    fromPartial(object: {
                        address?: string;
                        weight?: string;
                    }): _83.WeightedAddress;
                };
                DistributionProportions: {
                    encode(message: _83.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.DistributionProportions;
                    fromPartial(object: {
                        nftIncentives?: string;
                        developerRewards?: string;
                    }): _83.DistributionProportions;
                };
                Params: {
                    encode(message: _83.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Params;
                    fromPartial(object: {
                        distributionProportions?: {
                            nftIncentives?: string;
                            developerRewards?: string;
                        };
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                    }): _83.Params;
                };
                GenesisState: {
                    encode(message: _82.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GenesisState;
                    fromPartial(object: {
                        params?: {
                            distributionProportions?: {
                                nftIncentives?: string;
                                developerRewards?: string;
                            };
                            weightedDeveloperRewardsReceivers?: {
                                address?: string;
                                weight?: string;
                            }[];
                        };
                    }): _82.GenesisState;
                };
            };
        }
        namespace claim {
            const v1beta1: {
                MsgClientImpl: typeof _176.MsgClientImpl;
                QueryClientImpl: typeof _174.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    moduleAccountBalance(request?: _89.QueryModuleAccountBalanceRequest): Promise<_89.QueryModuleAccountBalanceResponseSDKType>;
                    params(request?: _89.QueryParamsRequest): Promise<_89.QueryParamsResponseSDKType>;
                    claimRecord(request: _89.QueryClaimRecordRequest): Promise<_89.QueryClaimRecordResponseSDKType>;
                    claimableForAction(request: _89.QueryClaimableForActionRequest): Promise<_89.QueryClaimableForActionResponseSDKType>;
                    totalClaimable(request: _89.QueryTotalClaimableRequest): Promise<_89.QueryTotalClaimableResponseSDKType>;
                };
                LCDQueryClient: typeof _172.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        initialClaim(value: _90.MsgInitialClaim): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        claimFor(value: _90.MsgClaimFor): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        initialClaim(value: _90.MsgInitialClaim): {
                            typeUrl: string;
                            value: _90.MsgInitialClaim;
                        };
                        claimFor(value: _90.MsgClaimFor): {
                            typeUrl: string;
                            value: _90.MsgClaimFor;
                        };
                    };
                    fromPartial: {
                        initialClaim(value: _90.MsgInitialClaim): {
                            typeUrl: string;
                            value: _90.MsgInitialClaim;
                        };
                        claimFor(value: _90.MsgClaimFor): {
                            typeUrl: string;
                            value: _90.MsgClaimFor;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
                        aminoType: string;
                        toAmino: ({ sender }: _90.MsgInitialClaim) => {
                            sender: string;
                        };
                        fromAmino: ({ sender }: {
                            sender: string;
                        }) => _90.MsgInitialClaim;
                    };
                    "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
                        aminoType: string;
                        toAmino: ({ sender, address, action }: _90.MsgClaimFor) => {
                            sender: string;
                            address: string;
                            action: number;
                        };
                        fromAmino: ({ sender, address, action }: {
                            sender: string;
                            address: string;
                            action: number;
                        }) => _90.MsgClaimFor;
                    };
                };
                MsgInitialClaim: {
                    encode(message: _90.MsgInitialClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgInitialClaim;
                    fromPartial(object: {
                        sender?: string;
                    }): _90.MsgInitialClaim;
                };
                MsgInitialClaimResponse: {
                    encode(message: _90.MsgInitialClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgInitialClaimResponseSDKType;
                    fromPartial(object: {
                        claimedAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _90.MsgInitialClaimResponse;
                };
                MsgClaimFor: {
                    encode(message: _90.MsgClaimFor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgClaimFor;
                    fromPartial(object: {
                        sender?: string;
                        address?: string;
                        action?: _86.Action;
                    }): _90.MsgClaimFor;
                };
                MsgClaimForResponse: {
                    encode(message: _90.MsgClaimForResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgClaimForResponseSDKType;
                    fromPartial(object: {
                        address?: string;
                        claimedAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _90.MsgClaimForResponse;
                };
                QueryModuleAccountBalanceRequest: {
                    encode(_: _89.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryModuleAccountBalanceRequest;
                    fromPartial(_: {}): _89.QueryModuleAccountBalanceRequest;
                };
                QueryModuleAccountBalanceResponse: {
                    encode(message: _89.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryModuleAccountBalanceResponseSDKType;
                    fromPartial(object: {
                        moduleAccountBalance?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _89.QueryModuleAccountBalanceResponse;
                };
                QueryParamsRequest: {
                    encode(_: _89.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryParamsRequest;
                    fromPartial(_: {}): _89.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _89.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryParamsResponseSDKType;
                    fromPartial(object: {
                        params?: {
                            airdropEnabled?: boolean;
                            airdropStartTime?: Date;
                            durationUntilDecay?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            durationOfDecay?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            claimDenom?: string;
                            allowedClaimers?: {
                                contractAddress?: string;
                                action?: _86.Action;
                            }[];
                        };
                    }): _89.QueryParamsResponse;
                };
                QueryClaimRecordRequest: {
                    encode(message: _89.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryClaimRecordRequest;
                    fromPartial(object: {
                        address?: string;
                    }): _89.QueryClaimRecordRequest;
                };
                QueryClaimRecordResponse: {
                    encode(message: _89.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryClaimRecordResponseSDKType;
                    fromPartial(object: {
                        claimRecord?: {
                            address?: string;
                            initialClaimableAmount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            actionCompleted?: boolean[];
                        };
                    }): _89.QueryClaimRecordResponse;
                };
                QueryClaimableForActionRequest: {
                    encode(message: _89.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryClaimableForActionRequest;
                    fromPartial(object: {
                        address?: string;
                        action?: _86.Action;
                    }): _89.QueryClaimableForActionRequest;
                };
                QueryClaimableForActionResponse: {
                    encode(message: _89.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryClaimableForActionResponseSDKType;
                    fromPartial(object: {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _89.QueryClaimableForActionResponse;
                };
                QueryTotalClaimableRequest: {
                    encode(message: _89.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryTotalClaimableRequest;
                    fromPartial(object: {
                        address?: string;
                    }): _89.QueryTotalClaimableRequest;
                };
                QueryTotalClaimableResponse: {
                    encode(message: _89.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryTotalClaimableResponseSDKType;
                    fromPartial(object: {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _89.QueryTotalClaimableResponse;
                };
                ClaimAuthorization: {
                    encode(message: _88.ClaimAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ClaimAuthorization;
                    fromPartial(object: {
                        contractAddress?: string;
                        action?: _86.Action;
                    }): _88.ClaimAuthorization;
                };
                Params: {
                    encode(message: _88.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Params;
                    fromPartial(object: {
                        airdropEnabled?: boolean;
                        airdropStartTime?: Date;
                        durationUntilDecay?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        durationOfDecay?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        claimDenom?: string;
                        allowedClaimers?: {
                            contractAddress?: string;
                            action?: _86.Action;
                        }[];
                    }): _88.Params;
                };
                GenesisState: {
                    encode(message: _87.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GenesisState;
                    fromPartial(object: {
                        moduleAccountBalance?: {
                            denom?: string;
                            amount?: string;
                        };
                        params?: {
                            airdropEnabled?: boolean;
                            airdropStartTime?: Date;
                            durationUntilDecay?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            durationOfDecay?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            claimDenom?: string;
                            allowedClaimers?: {
                                contractAddress?: string;
                                action?: _86.Action;
                            }[];
                        };
                        claimRecords?: {
                            address?: string;
                            initialClaimableAmount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            actionCompleted?: boolean[];
                        }[];
                    }): _87.GenesisState;
                };
                actionFromJSON(object: any): _86.Action;
                actionToJSON(object: _86.Action): string;
                Action: typeof _86.Action;
                ActionSDKType: typeof _86.ActionSDKType;
                ClaimRecord: {
                    encode(message: _86.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ClaimRecord;
                    fromPartial(object: {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    }): _86.ClaimRecord;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            publicawesome: {
                stargaze: {
                    alloc: {
                        v1beta1: _175.MsgClientImpl;
                    };
                    claim: {
                        v1beta1: _176.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponseSDKType>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponseSDKType>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponseSDKType>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponseSDKType>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponseSDKType>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponseSDKType>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponseSDKType>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponseSDKType>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponseSDKType>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponseSDKType>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponseSDKType>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponseSDKType>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponseSDKType>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponseSDKType>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponseSDKType>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponseSDKType>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponseSDKType>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponseSDKType>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponseSDKType>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponseSDKType>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponseSDKType>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponseSDKType>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponseSDKType>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponseSDKType>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponseSDKType>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponseSDKType>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponseSDKType>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponseSDKType>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponseSDKType>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponseSDKType>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponseSDKType>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponseSDKType>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponseSDKType>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponseSDKType>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponseSDKType>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponseSDKType>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponseSDKType>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponseSDKType>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponseSDKType>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponseSDKType>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponseSDKType>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponseSDKType>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponseSDKType>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponseSDKType>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponseSDKType>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponseSDKType>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponseSDKType>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponseSDKType>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponseSDKType>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponseSDKType>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponseSDKType>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponseSDKType>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponseSDKType>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponseSDKType>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponseSDKType>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponseSDKType>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponseSDKType>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponseSDKType>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponseSDKType>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponseSDKType>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponseSDKType>;
                    };
                };
            };
            publicawesome: {
                stargaze: {
                    alloc: {
                        v1beta1: {
                            params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponseSDKType>;
                        };
                    };
                    claim: {
                        v1beta1: {
                            moduleAccountBalance(request?: _89.QueryModuleAccountBalanceRequest): Promise<_89.QueryModuleAccountBalanceResponseSDKType>;
                            params(request?: _89.QueryParamsRequest): Promise<_89.QueryParamsResponseSDKType>;
                            claimRecord(request: _89.QueryClaimRecordRequest): Promise<_89.QueryClaimRecordResponseSDKType>;
                            claimableForAction(request: _89.QueryClaimableForActionRequest): Promise<_89.QueryClaimableForActionResponseSDKType>;
                            totalClaimable(request: _89.QueryTotalClaimableRequest): Promise<_89.QueryTotalClaimableResponseSDKType>;
                        };
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            publicawesome: {
                stargaze: {
                    alloc: {
                        v1beta1: _171.LCDQueryClient;
                    };
                    claim: {
                        v1beta1: _172.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}

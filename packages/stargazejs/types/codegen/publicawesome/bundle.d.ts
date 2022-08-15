import * as _104 from "../stargaze/alloc/v1beta1/genesis";
import * as _105 from "../stargaze/alloc/v1beta1/params";
import * as _106 from "../stargaze/alloc/v1beta1/query";
import * as _107 from "../stargaze/alloc/v1beta1/tx";
import * as _108 from "../stargaze/claim/v1beta1/claim_record";
import * as _109 from "../stargaze/claim/v1beta1/genesis";
import * as _110 from "../stargaze/claim/v1beta1/params";
import * as _111 from "../stargaze/claim/v1beta1/query";
import * as _112 from "../stargaze/claim/v1beta1/tx";
import * as _162 from "../stargaze/alloc/v1beta1/query.lcd";
import * as _163 from "../stargaze/claim/v1beta1/query.lcd";
import * as _164 from "../stargaze/alloc/v1beta1/query.rpc.query";
import * as _165 from "../stargaze/claim/v1beta1/query.rpc.query";
import * as _166 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _167 from "../stargaze/claim/v1beta1/tx.rpc.msg";
export declare namespace publicawesome {
    namespace stargaze {
        namespace alloc {
            const v1beta1: {
                MsgClientImpl: typeof _166.MsgClientImpl;
                QueryClientImpl: typeof _164.QueryClientImpl;
                LCDQueryClient: typeof _162.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("cosmwasm").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createVestingAccount(value: _107.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createVestingAccount(value: _107.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _107.MsgCreateVestingAccount;
                        };
                    };
                    toJSON: {
                        createVestingAccount(value: _107.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createVestingAccount(value: any): {
                            typeUrl: string;
                            value: _107.MsgCreateVestingAccount;
                        };
                    };
                    fromPartial: {
                        createVestingAccount(value: _107.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _107.MsgCreateVestingAccount;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
                        aminoType: string;
                        toAmino: ({ fromAddress, toAddress, amount, startTime, endTime, delayed }: _107.MsgCreateVestingAccount) => {
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
                        }) => _107.MsgCreateVestingAccount;
                    };
                };
                MsgCreateVestingAccount: {
                    encode(message: _107.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgCreateVestingAccount;
                    fromJSON(object: any): _107.MsgCreateVestingAccount;
                    toJSON(message: _107.MsgCreateVestingAccount): unknown;
                    fromPartial(object: {
                        fromAddress?: string;
                        toAddress?: string;
                        amount?: any[];
                        startTime?: any;
                        endTime?: any;
                        delayed?: boolean;
                    }): _107.MsgCreateVestingAccount;
                };
                MsgCreateVestingAccountResponse: {
                    encode(_: _107.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgCreateVestingAccountResponse;
                    fromJSON(_: any): _107.MsgCreateVestingAccountResponse;
                    toJSON(_: _107.MsgCreateVestingAccountResponse): unknown;
                    fromPartial(_: {}): _107.MsgCreateVestingAccountResponse;
                };
                QueryParamsRequest: {
                    encode(_: _106.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryParamsRequest;
                    fromJSON(_: any): _106.QueryParamsRequest;
                    toJSON(_: _106.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _106.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _106.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryParamsResponse;
                    fromJSON(object: any): _106.QueryParamsResponse;
                    toJSON(message: _106.QueryParamsResponse): unknown;
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
                    }): _106.QueryParamsResponse;
                };
                WeightedAddress: {
                    encode(message: _105.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.WeightedAddress;
                    fromJSON(object: any): _105.WeightedAddress;
                    toJSON(message: _105.WeightedAddress): unknown;
                    fromPartial(object: {
                        address?: string;
                        weight?: string;
                    }): _105.WeightedAddress;
                };
                DistributionProportions: {
                    encode(message: _105.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.DistributionProportions;
                    fromJSON(object: any): _105.DistributionProportions;
                    toJSON(message: _105.DistributionProportions): unknown;
                    fromPartial(object: {
                        nftIncentives?: string;
                        developerRewards?: string;
                    }): _105.DistributionProportions;
                };
                Params: {
                    encode(message: _105.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Params;
                    fromJSON(object: any): _105.Params;
                    toJSON(message: _105.Params): unknown;
                    fromPartial(object: {
                        distributionProportions?: {
                            nftIncentives?: string;
                            developerRewards?: string;
                        };
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                    }): _105.Params;
                };
                GenesisState: {
                    encode(message: _104.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GenesisState;
                    fromJSON(object: any): _104.GenesisState;
                    toJSON(message: _104.GenesisState): unknown;
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
                    }): _104.GenesisState;
                };
            };
        }
        namespace claim {
            const v1beta1: {
                MsgClientImpl: typeof _167.MsgClientImpl;
                QueryClientImpl: typeof _165.QueryClientImpl;
                LCDQueryClient: typeof _163.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("cosmwasm").Registry) => void;
                MessageComposer: {
                    encoded: {
                        initialClaim(value: _112.MsgInitialClaim): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        claimFor(value: _112.MsgClaimFor): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        initialClaim(value: _112.MsgInitialClaim): {
                            typeUrl: string;
                            value: _112.MsgInitialClaim;
                        };
                        claimFor(value: _112.MsgClaimFor): {
                            typeUrl: string;
                            value: _112.MsgClaimFor;
                        };
                    };
                    toJSON: {
                        initialClaim(value: _112.MsgInitialClaim): {
                            typeUrl: string;
                            value: unknown;
                        };
                        claimFor(value: _112.MsgClaimFor): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        initialClaim(value: any): {
                            typeUrl: string;
                            value: _112.MsgInitialClaim;
                        };
                        claimFor(value: any): {
                            typeUrl: string;
                            value: _112.MsgClaimFor;
                        };
                    };
                    fromPartial: {
                        initialClaim(value: _112.MsgInitialClaim): {
                            typeUrl: string;
                            value: _112.MsgInitialClaim;
                        };
                        claimFor(value: _112.MsgClaimFor): {
                            typeUrl: string;
                            value: _112.MsgClaimFor;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
                        aminoType: string;
                        toAmino: ({ sender }: _112.MsgInitialClaim) => {
                            sender: string;
                        };
                        fromAmino: ({ sender }: {
                            sender: string;
                        }) => _112.MsgInitialClaim;
                    };
                    "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
                        aminoType: string;
                        toAmino: ({ sender, address, action }: _112.MsgClaimFor) => {
                            sender: string;
                            address: string;
                            action: number;
                        };
                        fromAmino: ({ sender, address, action }: {
                            sender: string;
                            address: string;
                            action: number;
                        }) => _112.MsgClaimFor;
                    };
                };
                MsgInitialClaim: {
                    encode(message: _112.MsgInitialClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgInitialClaim;
                    fromJSON(object: any): _112.MsgInitialClaim;
                    toJSON(message: _112.MsgInitialClaim): unknown;
                    fromPartial(object: {
                        sender?: string;
                    }): _112.MsgInitialClaim;
                };
                MsgInitialClaimResponse: {
                    encode(message: _112.MsgInitialClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgInitialClaimResponse;
                    fromJSON(object: any): _112.MsgInitialClaimResponse;
                    toJSON(message: _112.MsgInitialClaimResponse): unknown;
                    fromPartial(object: {
                        claimedAmount?: any[];
                    }): _112.MsgInitialClaimResponse;
                };
                MsgClaimFor: {
                    encode(message: _112.MsgClaimFor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgClaimFor;
                    fromJSON(object: any): _112.MsgClaimFor;
                    toJSON(message: _112.MsgClaimFor): unknown;
                    fromPartial(object: {
                        sender?: string;
                        address?: string;
                        action?: _108.Action;
                    }): _112.MsgClaimFor;
                };
                MsgClaimForResponse: {
                    encode(message: _112.MsgClaimForResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgClaimForResponse;
                    fromJSON(object: any): _112.MsgClaimForResponse;
                    toJSON(message: _112.MsgClaimForResponse): unknown;
                    fromPartial(object: {
                        address?: string;
                        claimedAmount?: any[];
                    }): _112.MsgClaimForResponse;
                };
                QueryModuleAccountBalanceRequest: {
                    encode(_: _111.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryModuleAccountBalanceRequest;
                    fromJSON(_: any): _111.QueryModuleAccountBalanceRequest;
                    toJSON(_: _111.QueryModuleAccountBalanceRequest): unknown;
                    fromPartial(_: {}): _111.QueryModuleAccountBalanceRequest;
                };
                QueryModuleAccountBalanceResponse: {
                    encode(message: _111.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryModuleAccountBalanceResponse;
                    fromJSON(object: any): _111.QueryModuleAccountBalanceResponse;
                    toJSON(message: _111.QueryModuleAccountBalanceResponse): unknown;
                    fromPartial(object: {
                        moduleAccountBalance?: any[];
                    }): _111.QueryModuleAccountBalanceResponse;
                };
                QueryParamsRequest: {
                    encode(_: _111.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryParamsRequest;
                    fromJSON(_: any): _111.QueryParamsRequest;
                    toJSON(_: _111.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _111.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _111.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryParamsResponse;
                    fromJSON(object: any): _111.QueryParamsResponse;
                    toJSON(message: _111.QueryParamsResponse): unknown;
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
                                action?: _108.Action;
                            }[];
                        };
                    }): _111.QueryParamsResponse;
                };
                QueryClaimRecordRequest: {
                    encode(message: _111.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryClaimRecordRequest;
                    fromJSON(object: any): _111.QueryClaimRecordRequest;
                    toJSON(message: _111.QueryClaimRecordRequest): unknown;
                    fromPartial(object: {
                        address?: string;
                    }): _111.QueryClaimRecordRequest;
                };
                QueryClaimRecordResponse: {
                    encode(message: _111.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryClaimRecordResponse;
                    fromJSON(object: any): _111.QueryClaimRecordResponse;
                    toJSON(message: _111.QueryClaimRecordResponse): unknown;
                    fromPartial(object: {
                        claimRecord?: {
                            address?: string;
                            initialClaimableAmount?: any[];
                            actionCompleted?: boolean[];
                        };
                    }): _111.QueryClaimRecordResponse;
                };
                QueryClaimableForActionRequest: {
                    encode(message: _111.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryClaimableForActionRequest;
                    fromJSON(object: any): _111.QueryClaimableForActionRequest;
                    toJSON(message: _111.QueryClaimableForActionRequest): unknown;
                    fromPartial(object: {
                        address?: string;
                        action?: _108.Action;
                    }): _111.QueryClaimableForActionRequest;
                };
                QueryClaimableForActionResponse: {
                    encode(message: _111.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryClaimableForActionResponse;
                    fromJSON(object: any): _111.QueryClaimableForActionResponse;
                    toJSON(message: _111.QueryClaimableForActionResponse): unknown;
                    fromPartial(object: {
                        coins?: any[];
                    }): _111.QueryClaimableForActionResponse;
                };
                QueryTotalClaimableRequest: {
                    encode(message: _111.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryTotalClaimableRequest;
                    fromJSON(object: any): _111.QueryTotalClaimableRequest;
                    toJSON(message: _111.QueryTotalClaimableRequest): unknown;
                    fromPartial(object: {
                        address?: string;
                    }): _111.QueryTotalClaimableRequest;
                };
                QueryTotalClaimableResponse: {
                    encode(message: _111.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryTotalClaimableResponse;
                    fromJSON(object: any): _111.QueryTotalClaimableResponse;
                    toJSON(message: _111.QueryTotalClaimableResponse): unknown;
                    fromPartial(object: {
                        coins?: any[];
                    }): _111.QueryTotalClaimableResponse;
                };
                ClaimAuthorization: {
                    encode(message: _110.ClaimAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ClaimAuthorization;
                    fromJSON(object: any): _110.ClaimAuthorization;
                    toJSON(message: _110.ClaimAuthorization): unknown;
                    fromPartial(object: {
                        contractAddress?: string;
                        action?: _108.Action;
                    }): _110.ClaimAuthorization;
                };
                Params: {
                    encode(message: _110.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Params;
                    fromJSON(object: any): _110.Params;
                    toJSON(message: _110.Params): unknown;
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
                            action?: _108.Action;
                        }[];
                    }): _110.Params;
                };
                GenesisState: {
                    encode(message: _109.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.GenesisState;
                    fromJSON(object: any): _109.GenesisState;
                    toJSON(message: _109.GenesisState): unknown;
                    fromPartial(object: {
                        moduleAccountBalance?: any;
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
                                action?: _108.Action;
                            }[];
                        };
                        claimRecords?: {
                            address?: string;
                            initialClaimableAmount?: any[];
                            actionCompleted?: boolean[];
                        }[];
                    }): _109.GenesisState;
                };
                actionFromJSON(object: any): _108.Action;
                actionToJSON(object: _108.Action): string;
                Action: typeof _108.Action;
                ClaimRecord: {
                    encode(message: _108.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ClaimRecord;
                    fromJSON(object: any): _108.ClaimRecord;
                    toJSON(message: _108.ClaimRecord): unknown;
                    fromPartial(object: {
                        address?: string;
                        initialClaimableAmount?: any[];
                        actionCompleted?: boolean[];
                    }): _108.ClaimRecord;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
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
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            publicawesome: {
                stargaze: {
                    alloc: {
                        v1beta1: _166.MsgClientImpl;
                    };
                    claim: {
                        v1beta1: _167.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.rpc.query").QueryClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.rpc.query").QueryClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.rpc.query").QueryClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/query.rpc.query").QueryClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.rpc.query").QueryClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.rpc.query").QueryClientImpl;
                };
            };
            publicawesome: {
                stargaze: {
                    alloc: {
                        v1beta1: _164.QueryClientImpl;
                    };
                    claim: {
                        v1beta1: _165.QueryClientImpl;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: any;
        }) => Promise<{
            cosmos: {
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
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            publicawesome: {
                stargaze: {
                    alloc: {
                        v1beta1: _162.LCDQueryClient;
                    };
                    claim: {
                        v1beta1: _163.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}

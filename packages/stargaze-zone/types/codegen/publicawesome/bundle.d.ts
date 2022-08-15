import * as _135 from "../stargaze/alloc/v1beta1/genesis";
import * as _136 from "../stargaze/alloc/v1beta1/params";
import * as _137 from "../stargaze/alloc/v1beta1/query";
import * as _138 from "../stargaze/alloc/v1beta1/tx";
import * as _139 from "../stargaze/claim/v1beta1/claim_record";
import * as _140 from "../stargaze/claim/v1beta1/genesis";
import * as _141 from "../stargaze/claim/v1beta1/params";
import * as _142 from "../stargaze/claim/v1beta1/query";
import * as _143 from "../stargaze/claim/v1beta1/tx";
import * as _208 from "../stargaze/alloc/v1beta1/query.lcd";
import * as _209 from "../stargaze/claim/v1beta1/query.lcd";
import * as _210 from "../stargaze/alloc/v1beta1/query.rpc.query";
import * as _211 from "../stargaze/claim/v1beta1/query.rpc.query";
import * as _212 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _213 from "../stargaze/claim/v1beta1/tx.rpc.msg";
export declare namespace publicawesome {
    namespace stargaze {
        namespace alloc {
            const v1beta1: {
                MsgClientImpl: typeof _212.MsgClientImpl;
                QueryClientImpl: typeof _210.QueryClientImpl;
                LCDQueryClient: typeof _208.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("cosmwasm").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createVestingAccount(value: _138.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createVestingAccount(value: _138.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _138.MsgCreateVestingAccount;
                        };
                    };
                    toJSON: {
                        createVestingAccount(value: _138.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createVestingAccount(value: any): {
                            typeUrl: string;
                            value: _138.MsgCreateVestingAccount;
                        };
                    };
                    fromPartial: {
                        createVestingAccount(value: _138.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _138.MsgCreateVestingAccount;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
                        aminoType: string;
                        toAmino: ({ fromAddress, toAddress, amount, startTime, endTime, delayed }: _138.MsgCreateVestingAccount) => {
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
                        }) => _138.MsgCreateVestingAccount;
                    };
                };
                MsgCreateVestingAccount: {
                    encode(message: _138.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgCreateVestingAccount;
                    fromJSON(object: any): _138.MsgCreateVestingAccount;
                    toJSON(message: _138.MsgCreateVestingAccount): unknown;
                    fromPartial(object: {
                        fromAddress?: string;
                        toAddress?: string;
                        amount?: any[];
                        startTime?: any;
                        endTime?: any;
                        delayed?: boolean;
                    }): _138.MsgCreateVestingAccount;
                };
                MsgCreateVestingAccountResponse: {
                    encode(_: _138.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgCreateVestingAccountResponse;
                    fromJSON(_: any): _138.MsgCreateVestingAccountResponse;
                    toJSON(_: _138.MsgCreateVestingAccountResponse): unknown;
                    fromPartial(_: {}): _138.MsgCreateVestingAccountResponse;
                };
                QueryParamsRequest: {
                    encode(_: _137.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryParamsRequest;
                    fromJSON(_: any): _137.QueryParamsRequest;
                    toJSON(_: _137.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _137.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _137.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryParamsResponse;
                    fromJSON(object: any): _137.QueryParamsResponse;
                    toJSON(message: _137.QueryParamsResponse): unknown;
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
                    }): _137.QueryParamsResponse;
                };
                WeightedAddress: {
                    encode(message: _136.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.WeightedAddress;
                    fromJSON(object: any): _136.WeightedAddress;
                    toJSON(message: _136.WeightedAddress): unknown;
                    fromPartial(object: {
                        address?: string;
                        weight?: string;
                    }): _136.WeightedAddress;
                };
                DistributionProportions: {
                    encode(message: _136.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.DistributionProportions;
                    fromJSON(object: any): _136.DistributionProportions;
                    toJSON(message: _136.DistributionProportions): unknown;
                    fromPartial(object: {
                        nftIncentives?: string;
                        developerRewards?: string;
                    }): _136.DistributionProportions;
                };
                Params: {
                    encode(message: _136.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Params;
                    fromJSON(object: any): _136.Params;
                    toJSON(message: _136.Params): unknown;
                    fromPartial(object: {
                        distributionProportions?: {
                            nftIncentives?: string;
                            developerRewards?: string;
                        };
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                    }): _136.Params;
                };
                GenesisState: {
                    encode(message: _135.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.GenesisState;
                    fromJSON(object: any): _135.GenesisState;
                    toJSON(message: _135.GenesisState): unknown;
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
                    }): _135.GenesisState;
                };
            };
        }
        namespace claim {
            const v1beta1: {
                MsgClientImpl: typeof _213.MsgClientImpl;
                QueryClientImpl: typeof _211.QueryClientImpl;
                LCDQueryClient: typeof _209.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("cosmwasm").Registry) => void;
                MessageComposer: {
                    encoded: {
                        initialClaim(value: _143.MsgInitialClaim): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        claimFor(value: _143.MsgClaimFor): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        initialClaim(value: _143.MsgInitialClaim): {
                            typeUrl: string;
                            value: _143.MsgInitialClaim;
                        };
                        claimFor(value: _143.MsgClaimFor): {
                            typeUrl: string;
                            value: _143.MsgClaimFor;
                        };
                    };
                    toJSON: {
                        initialClaim(value: _143.MsgInitialClaim): {
                            typeUrl: string;
                            value: unknown;
                        };
                        claimFor(value: _143.MsgClaimFor): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        initialClaim(value: any): {
                            typeUrl: string;
                            value: _143.MsgInitialClaim;
                        };
                        claimFor(value: any): {
                            typeUrl: string;
                            value: _143.MsgClaimFor;
                        };
                    };
                    fromPartial: {
                        initialClaim(value: _143.MsgInitialClaim): {
                            typeUrl: string;
                            value: _143.MsgInitialClaim;
                        };
                        claimFor(value: _143.MsgClaimFor): {
                            typeUrl: string;
                            value: _143.MsgClaimFor;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
                        aminoType: string;
                        toAmino: ({ sender }: _143.MsgInitialClaim) => {
                            sender: string;
                        };
                        fromAmino: ({ sender }: {
                            sender: string;
                        }) => _143.MsgInitialClaim;
                    };
                    "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
                        aminoType: string;
                        toAmino: ({ sender, address, action }: _143.MsgClaimFor) => {
                            sender: string;
                            address: string;
                            action: number;
                        };
                        fromAmino: ({ sender, address, action }: {
                            sender: string;
                            address: string;
                            action: number;
                        }) => _143.MsgClaimFor;
                    };
                };
                MsgInitialClaim: {
                    encode(message: _143.MsgInitialClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgInitialClaim;
                    fromJSON(object: any): _143.MsgInitialClaim;
                    toJSON(message: _143.MsgInitialClaim): unknown;
                    fromPartial(object: {
                        sender?: string;
                    }): _143.MsgInitialClaim;
                };
                MsgInitialClaimResponse: {
                    encode(message: _143.MsgInitialClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgInitialClaimResponse;
                    fromJSON(object: any): _143.MsgInitialClaimResponse;
                    toJSON(message: _143.MsgInitialClaimResponse): unknown;
                    fromPartial(object: {
                        claimedAmount?: any[];
                    }): _143.MsgInitialClaimResponse;
                };
                MsgClaimFor: {
                    encode(message: _143.MsgClaimFor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgClaimFor;
                    fromJSON(object: any): _143.MsgClaimFor;
                    toJSON(message: _143.MsgClaimFor): unknown;
                    fromPartial(object: {
                        sender?: string;
                        address?: string;
                        action?: _139.Action;
                    }): _143.MsgClaimFor;
                };
                MsgClaimForResponse: {
                    encode(message: _143.MsgClaimForResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgClaimForResponse;
                    fromJSON(object: any): _143.MsgClaimForResponse;
                    toJSON(message: _143.MsgClaimForResponse): unknown;
                    fromPartial(object: {
                        address?: string;
                        claimedAmount?: any[];
                    }): _143.MsgClaimForResponse;
                };
                QueryModuleAccountBalanceRequest: {
                    encode(_: _142.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryModuleAccountBalanceRequest;
                    fromJSON(_: any): _142.QueryModuleAccountBalanceRequest;
                    toJSON(_: _142.QueryModuleAccountBalanceRequest): unknown;
                    fromPartial(_: {}): _142.QueryModuleAccountBalanceRequest;
                };
                QueryModuleAccountBalanceResponse: {
                    encode(message: _142.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryModuleAccountBalanceResponse;
                    fromJSON(object: any): _142.QueryModuleAccountBalanceResponse;
                    toJSON(message: _142.QueryModuleAccountBalanceResponse): unknown;
                    fromPartial(object: {
                        moduleAccountBalance?: any[];
                    }): _142.QueryModuleAccountBalanceResponse;
                };
                QueryParamsRequest: {
                    encode(_: _142.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryParamsRequest;
                    fromJSON(_: any): _142.QueryParamsRequest;
                    toJSON(_: _142.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _142.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _142.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryParamsResponse;
                    fromJSON(object: any): _142.QueryParamsResponse;
                    toJSON(message: _142.QueryParamsResponse): unknown;
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
                                action?: _139.Action;
                            }[];
                        };
                    }): _142.QueryParamsResponse;
                };
                QueryClaimRecordRequest: {
                    encode(message: _142.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryClaimRecordRequest;
                    fromJSON(object: any): _142.QueryClaimRecordRequest;
                    toJSON(message: _142.QueryClaimRecordRequest): unknown;
                    fromPartial(object: {
                        address?: string;
                    }): _142.QueryClaimRecordRequest;
                };
                QueryClaimRecordResponse: {
                    encode(message: _142.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryClaimRecordResponse;
                    fromJSON(object: any): _142.QueryClaimRecordResponse;
                    toJSON(message: _142.QueryClaimRecordResponse): unknown;
                    fromPartial(object: {
                        claimRecord?: {
                            address?: string;
                            initialClaimableAmount?: any[];
                            actionCompleted?: boolean[];
                        };
                    }): _142.QueryClaimRecordResponse;
                };
                QueryClaimableForActionRequest: {
                    encode(message: _142.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryClaimableForActionRequest;
                    fromJSON(object: any): _142.QueryClaimableForActionRequest;
                    toJSON(message: _142.QueryClaimableForActionRequest): unknown;
                    fromPartial(object: {
                        address?: string;
                        action?: _139.Action;
                    }): _142.QueryClaimableForActionRequest;
                };
                QueryClaimableForActionResponse: {
                    encode(message: _142.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryClaimableForActionResponse;
                    fromJSON(object: any): _142.QueryClaimableForActionResponse;
                    toJSON(message: _142.QueryClaimableForActionResponse): unknown;
                    fromPartial(object: {
                        coins?: any[];
                    }): _142.QueryClaimableForActionResponse;
                };
                QueryTotalClaimableRequest: {
                    encode(message: _142.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryTotalClaimableRequest;
                    fromJSON(object: any): _142.QueryTotalClaimableRequest;
                    toJSON(message: _142.QueryTotalClaimableRequest): unknown;
                    fromPartial(object: {
                        address?: string;
                    }): _142.QueryTotalClaimableRequest;
                };
                QueryTotalClaimableResponse: {
                    encode(message: _142.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryTotalClaimableResponse;
                    fromJSON(object: any): _142.QueryTotalClaimableResponse;
                    toJSON(message: _142.QueryTotalClaimableResponse): unknown;
                    fromPartial(object: {
                        coins?: any[];
                    }): _142.QueryTotalClaimableResponse;
                };
                ClaimAuthorization: {
                    encode(message: _141.ClaimAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.ClaimAuthorization;
                    fromJSON(object: any): _141.ClaimAuthorization;
                    toJSON(message: _141.ClaimAuthorization): unknown;
                    fromPartial(object: {
                        contractAddress?: string;
                        action?: _139.Action;
                    }): _141.ClaimAuthorization;
                };
                Params: {
                    encode(message: _141.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Params;
                    fromJSON(object: any): _141.Params;
                    toJSON(message: _141.Params): unknown;
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
                            action?: _139.Action;
                        }[];
                    }): _141.Params;
                };
                GenesisState: {
                    encode(message: _140.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.GenesisState;
                    fromJSON(object: any): _140.GenesisState;
                    toJSON(message: _140.GenesisState): unknown;
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
                                action?: _139.Action;
                            }[];
                        };
                        claimRecords?: {
                            address?: string;
                            initialClaimableAmount?: any[];
                            actionCompleted?: boolean[];
                        }[];
                    }): _140.GenesisState;
                };
                actionFromJSON(object: any): _139.Action;
                actionToJSON(object: _139.Action): string;
                Action: typeof _139.Action;
                ClaimRecord: {
                    encode(message: _139.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ClaimRecord;
                    fromJSON(object: any): _139.ClaimRecord;
                    toJSON(message: _139.ClaimRecord): unknown;
                    fromPartial(object: {
                        address?: string;
                        initialClaimableAmount?: any[];
                        actionCompleted?: boolean[];
                    }): _139.ClaimRecord;
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
                        v1beta1: _212.MsgClientImpl;
                    };
                    claim: {
                        v1beta1: _213.MsgClientImpl;
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
                        v1beta1: _210.QueryClientImpl;
                    };
                    claim: {
                        v1beta1: _211.QueryClientImpl;
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
                        v1beta1: _208.LCDQueryClient;
                    };
                    claim: {
                        v1beta1: _209.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}

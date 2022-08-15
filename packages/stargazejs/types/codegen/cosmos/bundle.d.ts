import * as _12 from "./bank/v1beta1/authz";
import * as _13 from "./bank/v1beta1/bank";
import * as _14 from "./bank/v1beta1/genesis";
import * as _15 from "./bank/v1beta1/query";
import * as _16 from "./bank/v1beta1/tx";
import * as _21 from "./base/reflection/v2alpha1/reflection";
import * as _27 from "./capability/v1beta1/capability";
import * as _28 from "./capability/v1beta1/genesis";
import * as _31 from "./crypto/ed25519/keys";
import * as _32 from "./crypto/hd/v1/hd";
import * as _33 from "./crypto/keyring/v1/record";
import * as _34 from "./crypto/multisig/keys";
import * as _35 from "./crypto/secp256k1/keys";
import * as _36 from "./crypto/secp256r1/keys";
import * as _37 from "./distribution/v1beta1/distribution";
import * as _38 from "./distribution/v1beta1/genesis";
import * as _39 from "./distribution/v1beta1/query";
import * as _40 from "./distribution/v1beta1/tx";
import * as _50 from "./gov/v1/genesis";
import * as _51 from "./gov/v1/gov";
import * as _52 from "./gov/v1/query";
import * as _53 from "./gov/v1/tx";
import * as _54 from "./gov/v1beta1/genesis";
import * as _55 from "./gov/v1beta1/gov";
import * as _56 from "./gov/v1beta1/query";
import * as _57 from "./gov/v1beta1/tx";
import * as _58 from "./group/v1/events";
import * as _59 from "./group/v1/genesis";
import * as _60 from "./group/v1/query";
import * as _61 from "./group/v1/tx";
import * as _62 from "./group/v1/types";
import * as _73 from "./orm/v1alpha1/schema";
import * as _80 from "./staking/v1beta1/authz";
import * as _81 from "./staking/v1beta1/genesis";
import * as _82 from "./staking/v1beta1/query";
import * as _83 from "./staking/v1beta1/staking";
import * as _84 from "./staking/v1beta1/tx";
import * as _85 from "./tx/signing/v1beta1/signing";
import * as _86 from "./tx/v1beta1/service";
import * as _87 from "./tx/v1beta1/tx";
import * as _139 from "./bank/v1beta1/query.lcd";
import * as _140 from "./distribution/v1beta1/query.lcd";
import * as _141 from "./gov/v1/query.lcd";
import * as _142 from "./gov/v1beta1/query.lcd";
import * as _143 from "./group/v1/query.lcd";
import * as _144 from "./staking/v1beta1/query.lcd";
import * as _145 from "./bank/v1beta1/query.rpc.query";
import * as _146 from "./distribution/v1beta1/query.rpc.query";
import * as _147 from "./gov/v1/query.rpc.query";
import * as _148 from "./gov/v1beta1/query.rpc.query";
import * as _149 from "./group/v1/query.rpc.query";
import * as _150 from "./staking/v1beta1/query.rpc.query";
import * as _151 from "./tx/v1beta1/service.rpc.svc";
import * as _152 from "./bank/v1beta1/tx.rpc.msg";
import * as _153 from "./distribution/v1beta1/tx.rpc.msg";
import * as _154 from "./gov/v1/tx.rpc.msg";
import * as _155 from "./gov/v1beta1/tx.rpc.msg";
import * as _156 from "./group/v1/tx.rpc.msg";
import * as _157 from "./staking/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: any;
    }
    namespace auth {
        const v1beta1: any;
    }
    namespace authz {
        const v1beta1: any;
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _152.MsgClientImpl;
            QueryClientImpl: typeof _145.QueryClientImpl;
            LCDQueryClient: typeof _139.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("cosmwasm").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _16.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _16.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _16.MsgSend): {
                        typeUrl: string;
                        value: _16.MsgSend;
                    };
                    multiSend(value: _16.MsgMultiSend): {
                        typeUrl: string;
                        value: _16.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _16.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _16.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _16.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _16.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _16.MsgSend): {
                        typeUrl: string;
                        value: _16.MsgSend;
                    };
                    multiSend(value: _16.MsgMultiSend): {
                        typeUrl: string;
                        value: _16.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _16.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _16.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _16.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _16.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _16.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgSend;
                fromJSON(object: any): _16.MsgSend;
                toJSON(message: _16.MsgSend): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: any[];
                }): _16.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _16.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgSendResponse;
                fromJSON(_: any): _16.MsgSendResponse;
                toJSON(_: _16.MsgSendResponse): unknown;
                fromPartial(_: {}): _16.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _16.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgMultiSend;
                fromJSON(object: any): _16.MsgMultiSend;
                toJSON(message: _16.MsgMultiSend): unknown;
                fromPartial(object: {
                    inputs?: {
                        address?: string;
                        coins?: any[];
                    }[];
                    outputs?: {
                        address?: string;
                        coins?: any[];
                    }[];
                }): _16.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _16.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgMultiSendResponse;
                fromJSON(_: any): _16.MsgMultiSendResponse;
                toJSON(_: _16.MsgMultiSendResponse): unknown;
                fromPartial(_: {}): _16.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _15.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryBalanceRequest;
                fromJSON(object: any): _15.QueryBalanceRequest;
                toJSON(message: _15.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _15.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _15.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryBalanceResponse;
                fromJSON(object: any): _15.QueryBalanceResponse;
                toJSON(message: _15.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    balance?: any;
                }): _15.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _15.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryAllBalancesRequest;
                fromJSON(object: any): _15.QueryAllBalancesRequest;
                toJSON(message: _15.QueryAllBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: any;
                }): _15.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _15.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryAllBalancesResponse;
                fromJSON(object: any): _15.QueryAllBalancesResponse;
                toJSON(message: _15.QueryAllBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: any[];
                    pagination?: any;
                }): _15.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _15.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QuerySpendableBalancesRequest;
                fromJSON(object: any): _15.QuerySpendableBalancesRequest;
                toJSON(message: _15.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: any;
                }): _15.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _15.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QuerySpendableBalancesResponse;
                fromJSON(object: any): _15.QuerySpendableBalancesResponse;
                toJSON(message: _15.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: any[];
                    pagination?: any;
                }): _15.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _15.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryTotalSupplyRequest;
                fromJSON(object: any): _15.QueryTotalSupplyRequest;
                toJSON(message: _15.QueryTotalSupplyRequest): unknown;
                fromPartial(object: {
                    pagination?: any;
                }): _15.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _15.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryTotalSupplyResponse;
                fromJSON(object: any): _15.QueryTotalSupplyResponse;
                toJSON(message: _15.QueryTotalSupplyResponse): unknown;
                fromPartial(object: {
                    supply?: any[];
                    pagination?: any;
                }): _15.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _15.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QuerySupplyOfRequest;
                fromJSON(object: any): _15.QuerySupplyOfRequest;
                toJSON(message: _15.QuerySupplyOfRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _15.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _15.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QuerySupplyOfResponse;
                fromJSON(object: any): _15.QuerySupplyOfResponse;
                toJSON(message: _15.QuerySupplyOfResponse): unknown;
                fromPartial(object: {
                    amount?: any;
                }): _15.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _15.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryParamsRequest;
                fromJSON(_: any): _15.QueryParamsRequest;
                toJSON(_: _15.QueryParamsRequest): unknown;
                fromPartial(_: {}): _15.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _15.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryParamsResponse;
                fromJSON(object: any): _15.QueryParamsResponse;
                toJSON(message: _15.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _15.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _15.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryDenomsMetadataRequest;
                fromJSON(object: any): _15.QueryDenomsMetadataRequest;
                toJSON(message: _15.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: {
                    pagination?: any;
                }): _15.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _15.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryDenomsMetadataResponse;
                fromJSON(object: any): _15.QueryDenomsMetadataResponse;
                toJSON(message: _15.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: {
                    metadatas?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                    pagination?: any;
                }): _15.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _15.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryDenomMetadataRequest;
                fromJSON(object: any): _15.QueryDenomMetadataRequest;
                toJSON(message: _15.QueryDenomMetadataRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _15.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _15.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryDenomMetadataResponse;
                fromJSON(object: any): _15.QueryDenomMetadataResponse;
                toJSON(message: _15.QueryDenomMetadataResponse): unknown;
                fromPartial(object: {
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    };
                }): _15.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _15.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryDenomOwnersRequest;
                fromJSON(object: any): _15.QueryDenomOwnersRequest;
                toJSON(message: _15.QueryDenomOwnersRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                    pagination?: any;
                }): _15.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _15.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.DenomOwner;
                fromJSON(object: any): _15.DenomOwner;
                toJSON(message: _15.DenomOwner): unknown;
                fromPartial(object: {
                    address?: string;
                    balance?: any;
                }): _15.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _15.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryDenomOwnersResponse;
                fromJSON(object: any): _15.QueryDenomOwnersResponse;
                toJSON(message: _15.QueryDenomOwnersResponse): unknown;
                fromPartial(object: {
                    denomOwners?: {
                        address?: string;
                        balance?: any;
                    }[];
                    pagination?: any;
                }): _15.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _14.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GenesisState;
                fromJSON(object: any): _14.GenesisState;
                toJSON(message: _14.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                    balances?: {
                        address?: string;
                        coins?: any[];
                    }[];
                    supply?: any[];
                    denomMetadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                }): _14.GenesisState;
            };
            Balance: {
                encode(message: _14.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Balance;
                fromJSON(object: any): _14.Balance;
                toJSON(message: _14.Balance): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: any[];
                }): _14.Balance;
            };
            Params: {
                encode(message: _13.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Params;
                fromJSON(object: any): _13.Params;
                toJSON(message: _13.Params): unknown;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    defaultSendEnabled?: boolean;
                }): _13.Params;
            };
            SendEnabled: {
                encode(message: _13.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.SendEnabled;
                fromJSON(object: any): _13.SendEnabled;
                toJSON(message: _13.SendEnabled): unknown;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _13.SendEnabled;
            };
            Input: {
                encode(message: _13.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Input;
                fromJSON(object: any): _13.Input;
                toJSON(message: _13.Input): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: any[];
                }): _13.Input;
            };
            Output: {
                encode(message: _13.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Output;
                fromJSON(object: any): _13.Output;
                toJSON(message: _13.Output): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: any[];
                }): _13.Output;
            };
            Supply: {
                encode(message: _13.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Supply;
                fromJSON(object: any): _13.Supply;
                toJSON(message: _13.Supply): unknown;
                fromPartial(object: {
                    total?: any[];
                }): _13.Supply;
            };
            DenomUnit: {
                encode(message: _13.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.DenomUnit;
                fromJSON(object: any): _13.DenomUnit;
                toJSON(message: _13.DenomUnit): unknown;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _13.DenomUnit;
            };
            Metadata: {
                encode(message: _13.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Metadata;
                fromJSON(object: any): _13.Metadata;
                toJSON(message: _13.Metadata): unknown;
                fromPartial(object: {
                    description?: string;
                    denomUnits?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                    uri?: string;
                    uriHash?: string;
                }): _13.Metadata;
            };
            SendAuthorization: {
                encode(message: _12.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.SendAuthorization;
                fromJSON(object: any): _12.SendAuthorization;
                toJSON(message: _12.SendAuthorization): unknown;
                fromPartial(object: {
                    spendLimit?: any[];
                }): _12.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: any;
        }
        namespace kv {
            const v1beta1: any;
        }
        namespace query {
            const v1beta1: any;
        }
        namespace reflection {
            const v1beta1: any;
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _21.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.AppDescriptor;
                    fromJSON(object: any): _21.AppDescriptor;
                    toJSON(message: _21.AppDescriptor): unknown;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                        chain?: {
                            id?: string;
                        };
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                        configuration?: {
                            bech32AccountAddressPrefix?: string;
                        };
                        queryServices?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _21.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _21.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.TxDescriptor;
                    fromJSON(object: any): _21.TxDescriptor;
                    toJSON(message: _21.TxDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msgTypeUrl?: string;
                        }[];
                    }): _21.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _21.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.AuthnDescriptor;
                    fromJSON(object: any): _21.AuthnDescriptor;
                    toJSON(message: _21.AuthnDescriptor): unknown;
                    fromPartial(object: {
                        signModes?: {
                            name?: string;
                            number?: number;
                            authnInfoProviderMethodFullname?: string;
                        }[];
                    }): _21.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _21.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.SigningModeDescriptor;
                    fromJSON(object: any): _21.SigningModeDescriptor;
                    toJSON(message: _21.SigningModeDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authnInfoProviderMethodFullname?: string;
                    }): _21.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _21.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ChainDescriptor;
                    fromJSON(object: any): _21.ChainDescriptor;
                    toJSON(message: _21.ChainDescriptor): unknown;
                    fromPartial(object: {
                        id?: string;
                    }): _21.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _21.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.CodecDescriptor;
                    fromJSON(object: any): _21.CodecDescriptor;
                    toJSON(message: _21.CodecDescriptor): unknown;
                    fromPartial(object: {
                        interfaces?: {
                            fullname?: string;
                            interfaceAcceptingMessages?: {
                                fullname?: string;
                                fieldDescriptorNames?: string[];
                            }[];
                            interfaceImplementers?: {
                                fullname?: string;
                                typeUrl?: string;
                            }[];
                        }[];
                    }): _21.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _21.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.InterfaceDescriptor;
                    fromJSON(object: any): _21.InterfaceDescriptor;
                    toJSON(message: _21.InterfaceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        interfaceAcceptingMessages?: {
                            fullname?: string;
                            fieldDescriptorNames?: string[];
                        }[];
                        interfaceImplementers?: {
                            fullname?: string;
                            typeUrl?: string;
                        }[];
                    }): _21.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _21.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _21.InterfaceImplementerDescriptor;
                    toJSON(message: _21.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        typeUrl?: string;
                    }): _21.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _21.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _21.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _21.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        fieldDescriptorNames?: string[];
                    }): _21.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _21.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ConfigurationDescriptor;
                    fromJSON(object: any): _21.ConfigurationDescriptor;
                    toJSON(message: _21.ConfigurationDescriptor): unknown;
                    fromPartial(object: {
                        bech32AccountAddressPrefix?: string;
                    }): _21.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _21.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgDescriptor;
                    fromJSON(object: any): _21.MsgDescriptor;
                    toJSON(message: _21.MsgDescriptor): unknown;
                    fromPartial(object: {
                        msgTypeUrl?: string;
                    }): _21.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _21.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _21.GetAuthnDescriptorRequest;
                    toJSON(_: _21.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: {}): _21.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _21.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _21.GetAuthnDescriptorResponse;
                    toJSON(message: _21.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                    }): _21.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _21.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetChainDescriptorRequest;
                    fromJSON(_: any): _21.GetChainDescriptorRequest;
                    toJSON(_: _21.GetChainDescriptorRequest): unknown;
                    fromPartial(_: {}): _21.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _21.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetChainDescriptorResponse;
                    fromJSON(object: any): _21.GetChainDescriptorResponse;
                    toJSON(message: _21.GetChainDescriptorResponse): unknown;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _21.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _21.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetCodecDescriptorRequest;
                    fromJSON(_: any): _21.GetCodecDescriptorRequest;
                    toJSON(_: _21.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: {}): _21.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _21.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetCodecDescriptorResponse;
                    fromJSON(object: any): _21.GetCodecDescriptorResponse;
                    toJSON(message: _21.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: {
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                    }): _21.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _21.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _21.GetConfigurationDescriptorRequest;
                    toJSON(_: _21.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: {}): _21.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _21.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _21.GetConfigurationDescriptorResponse;
                    toJSON(message: _21.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: {
                        config?: {
                            bech32AccountAddressPrefix?: string;
                        };
                    }): _21.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _21.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _21.GetQueryServicesDescriptorRequest;
                    toJSON(_: _21.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: {}): _21.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _21.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _21.GetQueryServicesDescriptorResponse;
                    toJSON(message: _21.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: {
                        queries?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                    }): _21.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _21.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetTxDescriptorRequest;
                    fromJSON(_: any): _21.GetTxDescriptorRequest;
                    toJSON(_: _21.GetTxDescriptorRequest): unknown;
                    fromPartial(_: {}): _21.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _21.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetTxDescriptorResponse;
                    fromJSON(object: any): _21.GetTxDescriptorResponse;
                    toJSON(message: _21.GetTxDescriptorResponse): unknown;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _21.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _21.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryServicesDescriptor;
                    fromJSON(object: any): _21.QueryServicesDescriptor;
                    toJSON(message: _21.QueryServicesDescriptor): unknown;
                    fromPartial(object: {
                        queryServices?: {
                            fullname?: string;
                            isModule?: boolean;
                            methods?: {
                                name?: string;
                                fullQueryPath?: string;
                            }[];
                        }[];
                    }): _21.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _21.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryServiceDescriptor;
                    fromJSON(object: any): _21.QueryServiceDescriptor;
                    toJSON(message: _21.QueryServiceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        isModule?: boolean;
                        methods?: {
                            name?: string;
                            fullQueryPath?: string;
                        }[];
                    }): _21.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _21.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryMethodDescriptor;
                    fromJSON(object: any): _21.QueryMethodDescriptor;
                    toJSON(message: _21.QueryMethodDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        fullQueryPath?: string;
                    }): _21.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: any;
        }
        namespace store {
            const v1beta1: any;
        }
        namespace tendermint {
            const v1beta1: any;
        }
        const v1beta1: any;
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _28.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GenesisOwners;
                fromJSON(object: any): _28.GenesisOwners;
                toJSON(message: _28.GenesisOwners): unknown;
                fromPartial(object: {
                    index?: any;
                    indexOwners?: {
                        owners?: {
                            module?: string;
                            name?: string;
                        }[];
                    };
                }): _28.GenesisOwners;
            };
            GenesisState: {
                encode(message: _28.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GenesisState;
                fromJSON(object: any): _28.GenesisState;
                toJSON(message: _28.GenesisState): unknown;
                fromPartial(object: {
                    index?: any;
                    owners?: {
                        index?: any;
                        indexOwners?: {
                            owners?: {
                                module?: string;
                                name?: string;
                            }[];
                        };
                    }[];
                }): _28.GenesisState;
            };
            Capability: {
                encode(message: _27.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Capability;
                fromJSON(object: any): _27.Capability;
                toJSON(message: _27.Capability): unknown;
                fromPartial(object: {
                    index?: any;
                }): _27.Capability;
            };
            Owner: {
                encode(message: _27.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Owner;
                fromJSON(object: any): _27.Owner;
                toJSON(message: _27.Owner): unknown;
                fromPartial(object: {
                    module?: string;
                    name?: string;
                }): _27.Owner;
            };
            CapabilityOwners: {
                encode(message: _27.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.CapabilityOwners;
                fromJSON(object: any): _27.CapabilityOwners;
                toJSON(message: _27.CapabilityOwners): unknown;
                fromPartial(object: {
                    owners?: {
                        module?: string;
                        name?: string;
                    }[];
                }): _27.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: any;
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _31.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.PubKey;
                fromJSON(object: any): _31.PubKey;
                toJSON(message: _31.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _31.PubKey;
            };
            PrivKey: {
                encode(message: _31.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.PrivKey;
                fromJSON(object: any): _31.PrivKey;
                toJSON(message: _31.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _31.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _32.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.BIP44Params;
                    fromJSON(object: any): _32.BIP44Params;
                    toJSON(message: _32.BIP44Params): unknown;
                    fromPartial(object: {
                        purpose?: number;
                        coinType?: number;
                        account?: number;
                        change?: boolean;
                        addressIndex?: number;
                    }): _32.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _33.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Record;
                    fromJSON(object: any): _33.Record;
                    toJSON(message: _33.Record): unknown;
                    fromPartial(object: {
                        name?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        local?: {
                            privKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            privKeyType?: string;
                        };
                        ledger?: {
                            path?: {
                                purpose?: number;
                                coinType?: number;
                                account?: number;
                                change?: boolean;
                                addressIndex?: number;
                            };
                        };
                        multi?: {};
                        offline?: {};
                    }): _33.Record;
                };
                Record_Local: {
                    encode(message: _33.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Record_Local;
                    fromJSON(object: any): _33.Record_Local;
                    toJSON(message: _33.Record_Local): unknown;
                    fromPartial(object: {
                        privKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        privKeyType?: string;
                    }): _33.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _33.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Record_Ledger;
                    fromJSON(object: any): _33.Record_Ledger;
                    toJSON(message: _33.Record_Ledger): unknown;
                    fromPartial(object: {
                        path?: {
                            purpose?: number;
                            coinType?: number;
                            account?: number;
                            change?: boolean;
                            addressIndex?: number;
                        };
                    }): _33.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _33.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Record_Multi;
                    fromJSON(_: any): _33.Record_Multi;
                    toJSON(_: _33.Record_Multi): unknown;
                    fromPartial(_: {}): _33.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _33.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Record_Offline;
                    fromJSON(_: any): _33.Record_Offline;
                    toJSON(_: _33.Record_Offline): unknown;
                    fromPartial(_: {}): _33.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _34.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.LegacyAminoPubKey;
                fromJSON(object: any): _34.LegacyAminoPubKey;
                toJSON(message: _34.LegacyAminoPubKey): unknown;
                fromPartial(object: {
                    threshold?: number;
                    publicKeys?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _34.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _35.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.PubKey;
                fromJSON(object: any): _35.PubKey;
                toJSON(message: _35.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _35.PubKey;
            };
            PrivKey: {
                encode(message: _35.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.PrivKey;
                fromJSON(object: any): _35.PrivKey;
                toJSON(message: _35.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _35.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _36.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PubKey;
                fromJSON(object: any): _36.PubKey;
                toJSON(message: _36.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _36.PubKey;
            };
            PrivKey: {
                encode(message: _36.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PrivKey;
                fromJSON(object: any): _36.PrivKey;
                toJSON(message: _36.PrivKey): unknown;
                fromPartial(object: {
                    secret?: Uint8Array;
                }): _36.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _153.MsgClientImpl;
            QueryClientImpl: typeof _146.QueryClientImpl;
            LCDQueryClient: typeof _140.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("cosmwasm").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _40.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _40.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _40.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _40.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _40.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _40.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _40.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _40.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _40.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _40.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _40.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _40.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _40.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _40.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _40.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _40.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _40.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _40.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _40.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _40.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _40.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _40.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _40.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _40.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _40.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _40.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _40.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _40.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _40.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _40.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _40.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _40.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _40.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _40.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _40.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _40.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _40.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgSetWithdrawAddress;
                fromJSON(object: any): _40.MsgSetWithdrawAddress;
                toJSON(message: _40.MsgSetWithdrawAddress): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _40.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _40.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _40.MsgSetWithdrawAddressResponse;
                toJSON(_: _40.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: {}): _40.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _40.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _40.MsgWithdrawDelegatorReward;
                toJSON(message: _40.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _40.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _40.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _40.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _40.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: {
                    amount?: any[];
                }): _40.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _40.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _40.MsgWithdrawValidatorCommission;
                toJSON(message: _40.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _40.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _40.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _40.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _40.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    amount?: any[];
                }): _40.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _40.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgFundCommunityPool;
                fromJSON(object: any): _40.MsgFundCommunityPool;
                toJSON(message: _40.MsgFundCommunityPool): unknown;
                fromPartial(object: {
                    amount?: any[];
                    depositor?: string;
                }): _40.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _40.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _40.MsgFundCommunityPoolResponse;
                toJSON(_: _40.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: {}): _40.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _39.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryParamsRequest;
                fromJSON(_: any): _39.QueryParamsRequest;
                toJSON(_: _39.QueryParamsRequest): unknown;
                fromPartial(_: {}): _39.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _39.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryParamsResponse;
                fromJSON(object: any): _39.QueryParamsResponse;
                toJSON(message: _39.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _39.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _39.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _39.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _39.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _39.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _39.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _39.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _39.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        rewards?: any[];
                    };
                }): _39.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _39.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorCommissionRequest;
                fromJSON(object: any): _39.QueryValidatorCommissionRequest;
                toJSON(message: _39.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _39.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _39.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorCommissionResponse;
                fromJSON(object: any): _39.QueryValidatorCommissionResponse;
                toJSON(message: _39.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    commission?: {
                        commission?: any[];
                    };
                }): _39.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _39.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorSlashesRequest;
                fromJSON(object: any): _39.QueryValidatorSlashesRequest;
                toJSON(message: _39.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    startingHeight?: any;
                    endingHeight?: any;
                    pagination?: any;
                }): _39.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _39.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorSlashesResponse;
                fromJSON(object: any): _39.QueryValidatorSlashesResponse;
                toJSON(message: _39.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: {
                    slashes?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    }[];
                    pagination?: any;
                }): _39.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _39.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegationRewardsRequest;
                fromJSON(object: any): _39.QueryDelegationRewardsRequest;
                toJSON(message: _39.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _39.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _39.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegationRewardsResponse;
                fromJSON(object: any): _39.QueryDelegationRewardsResponse;
                toJSON(message: _39.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: any[];
                }): _39.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _39.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _39.QueryDelegationTotalRewardsRequest;
                toJSON(message: _39.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _39.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _39.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _39.QueryDelegationTotalRewardsResponse;
                toJSON(message: _39.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        validatorAddress?: string;
                        reward?: any[];
                    }[];
                    total?: any[];
                }): _39.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _39.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _39.QueryDelegatorValidatorsRequest;
                toJSON(message: _39.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _39.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _39.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _39.QueryDelegatorValidatorsResponse;
                toJSON(message: _39.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: string[];
                }): _39.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _39.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _39.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _39.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _39.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _39.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _39.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _39.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: {
                    withdrawAddress?: string;
                }): _39.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _39.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryCommunityPoolRequest;
                fromJSON(_: any): _39.QueryCommunityPoolRequest;
                toJSON(_: _39.QueryCommunityPoolRequest): unknown;
                fromPartial(_: {}): _39.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _39.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryCommunityPoolResponse;
                fromJSON(object: any): _39.QueryCommunityPoolResponse;
                toJSON(message: _39.QueryCommunityPoolResponse): unknown;
                fromPartial(object: {
                    pool?: any[];
                }): _39.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _38.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DelegatorWithdrawInfo;
                fromJSON(object: any): _38.DelegatorWithdrawInfo;
                toJSON(message: _38.DelegatorWithdrawInfo): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _38.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _38.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _38.ValidatorOutstandingRewardsRecord;
                toJSON(message: _38.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    outstandingRewards?: any[];
                }): _38.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _38.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _38.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _38.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    accumulated?: {
                        commission?: any[];
                    };
                }): _38.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _38.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _38.ValidatorHistoricalRewardsRecord;
                toJSON(message: _38.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    period?: any;
                    rewards?: {
                        cumulativeRewardRatio?: any[];
                        referenceCount?: number;
                    };
                }): _38.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _38.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _38.ValidatorCurrentRewardsRecord;
                toJSON(message: _38.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    rewards?: {
                        rewards?: any[];
                        period?: any;
                    };
                }): _38.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _38.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DelegatorStartingInfoRecord;
                fromJSON(object: any): _38.DelegatorStartingInfoRecord;
                toJSON(message: _38.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    startingInfo?: {
                        previousPeriod?: any;
                        stake?: string;
                        height?: any;
                    };
                }): _38.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _38.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorSlashEventRecord;
                fromJSON(object: any): _38.ValidatorSlashEventRecord;
                toJSON(message: _38.ValidatorSlashEventRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    height?: any;
                    period?: any;
                    validatorSlashEvent?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    };
                }): _38.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _38.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.GenesisState;
                fromJSON(object: any): _38.GenesisState;
                toJSON(message: _38.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                    feePool?: {
                        communityPool?: any[];
                    };
                    delegatorWithdrawInfos?: {
                        delegatorAddress?: string;
                        withdrawAddress?: string;
                    }[];
                    previousProposer?: string;
                    outstandingRewards?: {
                        validatorAddress?: string;
                        outstandingRewards?: any[];
                    }[];
                    validatorAccumulatedCommissions?: {
                        validatorAddress?: string;
                        accumulated?: {
                            commission?: any[];
                        };
                    }[];
                    validatorHistoricalRewards?: {
                        validatorAddress?: string;
                        period?: any;
                        rewards?: {
                            cumulativeRewardRatio?: any[];
                            referenceCount?: number;
                        };
                    }[];
                    validatorCurrentRewards?: {
                        validatorAddress?: string;
                        rewards?: {
                            rewards?: any[];
                            period?: any;
                        };
                    }[];
                    delegatorStartingInfos?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        startingInfo?: {
                            previousPeriod?: any;
                            stake?: string;
                            height?: any;
                        };
                    }[];
                    validatorSlashEvents?: {
                        validatorAddress?: string;
                        height?: any;
                        period?: any;
                        validatorSlashEvent?: {
                            validatorPeriod?: any;
                            fraction?: string;
                        };
                    }[];
                }): _38.GenesisState;
            };
            Params: {
                encode(message: _37.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Params;
                fromJSON(object: any): _37.Params;
                toJSON(message: _37.Params): unknown;
                fromPartial(object: {
                    communityTax?: string;
                    baseProposerReward?: string;
                    bonusProposerReward?: string;
                    withdrawAddrEnabled?: boolean;
                }): _37.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _37.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValidatorHistoricalRewards;
                fromJSON(object: any): _37.ValidatorHistoricalRewards;
                toJSON(message: _37.ValidatorHistoricalRewards): unknown;
                fromPartial(object: {
                    cumulativeRewardRatio?: any[];
                    referenceCount?: number;
                }): _37.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _37.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValidatorCurrentRewards;
                fromJSON(object: any): _37.ValidatorCurrentRewards;
                toJSON(message: _37.ValidatorCurrentRewards): unknown;
                fromPartial(object: {
                    rewards?: any[];
                    period?: any;
                }): _37.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _37.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValidatorAccumulatedCommission;
                fromJSON(object: any): _37.ValidatorAccumulatedCommission;
                toJSON(message: _37.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: {
                    commission?: any[];
                }): _37.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _37.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValidatorOutstandingRewards;
                fromJSON(object: any): _37.ValidatorOutstandingRewards;
                toJSON(message: _37.ValidatorOutstandingRewards): unknown;
                fromPartial(object: {
                    rewards?: any[];
                }): _37.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _37.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValidatorSlashEvent;
                fromJSON(object: any): _37.ValidatorSlashEvent;
                toJSON(message: _37.ValidatorSlashEvent): unknown;
                fromPartial(object: {
                    validatorPeriod?: any;
                    fraction?: string;
                }): _37.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _37.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValidatorSlashEvents;
                fromJSON(object: any): _37.ValidatorSlashEvents;
                toJSON(message: _37.ValidatorSlashEvents): unknown;
                fromPartial(object: {
                    validatorSlashEvents?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    }[];
                }): _37.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _37.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.FeePool;
                fromJSON(object: any): _37.FeePool;
                toJSON(message: _37.FeePool): unknown;
                fromPartial(object: {
                    communityPool?: any[];
                }): _37.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _37.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.CommunityPoolSpendProposal;
                fromJSON(object: any): _37.CommunityPoolSpendProposal;
                toJSON(message: _37.CommunityPoolSpendProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: any[];
                }): _37.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _37.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DelegatorStartingInfo;
                fromJSON(object: any): _37.DelegatorStartingInfo;
                toJSON(message: _37.DelegatorStartingInfo): unknown;
                fromPartial(object: {
                    previousPeriod?: any;
                    stake?: string;
                    height?: any;
                }): _37.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _37.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DelegationDelegatorReward;
                fromJSON(object: any): _37.DelegationDelegatorReward;
                toJSON(message: _37.DelegationDelegatorReward): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    reward?: any[];
                }): _37.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _37.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _37.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _37.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _37.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: any;
    }
    namespace feegrant {
        const v1beta1: any;
    }
    namespace genutil {
        const v1beta1: any;
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _154.MsgClientImpl;
            QueryClientImpl: typeof _147.QueryClientImpl;
            LCDQueryClient: typeof _141.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("cosmwasm").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _53.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _53.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _53.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _53.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _53.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _53.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _53.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _53.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _53.MsgExecLegacyContent;
                    };
                    vote(value: _53.MsgVote): {
                        typeUrl: string;
                        value: _53.MsgVote;
                    };
                    voteWeighted(value: _53.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _53.MsgVoteWeighted;
                    };
                    deposit(value: _53.MsgDeposit): {
                        typeUrl: string;
                        value: _53.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _53.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _53.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _53.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _53.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _53.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _53.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _53.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _53.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _53.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _53.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _53.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _53.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _53.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _53.MsgExecLegacyContent;
                    };
                    vote(value: _53.MsgVote): {
                        typeUrl: string;
                        value: _53.MsgVote;
                    };
                    voteWeighted(value: _53.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _53.MsgVoteWeighted;
                    };
                    deposit(value: _53.MsgDeposit): {
                        typeUrl: string;
                        value: _53.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _53.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _53.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _53.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _53.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _53.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _53.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _53.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _53.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _53.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _53.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _53.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgSubmitProposal;
                fromJSON(object: any): _53.MsgSubmitProposal;
                toJSON(message: _53.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    initialDeposit?: any[];
                    proposer?: string;
                    metadata?: string;
                }): _53.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _53.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgSubmitProposalResponse;
                fromJSON(object: any): _53.MsgSubmitProposalResponse;
                toJSON(message: _53.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _53.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _53.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgExecLegacyContent;
                fromJSON(object: any): _53.MsgExecLegacyContent;
                toJSON(message: _53.MsgExecLegacyContent): unknown;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    authority?: string;
                }): _53.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _53.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgExecLegacyContentResponse;
                fromJSON(_: any): _53.MsgExecLegacyContentResponse;
                toJSON(_: _53.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: {}): _53.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _53.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgVote;
                fromJSON(object: any): _53.MsgVote;
                toJSON(message: _53.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _51.VoteOption;
                    metadata?: string;
                }): _53.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _53.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgVoteResponse;
                fromJSON(_: any): _53.MsgVoteResponse;
                toJSON(_: _53.MsgVoteResponse): unknown;
                fromPartial(_: {}): _53.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _53.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgVoteWeighted;
                fromJSON(object: any): _53.MsgVoteWeighted;
                toJSON(message: _53.MsgVoteWeighted): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _51.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _53.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _53.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgVoteWeightedResponse;
                fromJSON(_: any): _53.MsgVoteWeightedResponse;
                toJSON(_: _53.MsgVoteWeightedResponse): unknown;
                fromPartial(_: {}): _53.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _53.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgDeposit;
                fromJSON(object: any): _53.MsgDeposit;
                toJSON(message: _53.MsgDeposit): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: any[];
                }): _53.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _53.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgDepositResponse;
                fromJSON(_: any): _53.MsgDepositResponse;
                toJSON(_: _53.MsgDepositResponse): unknown;
                fromPartial(_: {}): _53.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _52.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryProposalRequest;
                fromJSON(object: any): _52.QueryProposalRequest;
                toJSON(message: _52.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _52.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _52.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryProposalResponse;
                fromJSON(object: any): _52.QueryProposalResponse;
                toJSON(message: _52.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _51.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: any[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    };
                }): _52.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _52.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryProposalsRequest;
                fromJSON(object: any): _52.QueryProposalsRequest;
                toJSON(message: _52.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    proposalStatus?: _51.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: any;
                }): _52.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _52.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryProposalsResponse;
                fromJSON(object: any): _52.QueryProposalsResponse;
                toJSON(message: _52.QueryProposalsResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _51.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: any[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    }[];
                    pagination?: any;
                }): _52.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _52.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryVoteRequest;
                fromJSON(object: any): _52.QueryVoteRequest;
                toJSON(message: _52.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _52.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _52.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryVoteResponse;
                fromJSON(object: any): _52.QueryVoteResponse;
                toJSON(message: _52.QueryVoteResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _51.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    };
                }): _52.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _52.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryVotesRequest;
                fromJSON(object: any): _52.QueryVotesRequest;
                toJSON(message: _52.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: any;
                }): _52.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _52.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryVotesResponse;
                fromJSON(object: any): _52.QueryVotesResponse;
                toJSON(message: _52.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _51.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    pagination?: any;
                }): _52.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _52.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryParamsRequest;
                fromJSON(object: any): _52.QueryParamsRequest;
                toJSON(message: _52.QueryParamsRequest): unknown;
                fromPartial(object: {
                    paramsType?: string;
                }): _52.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _52.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryParamsResponse;
                fromJSON(object: any): _52.QueryParamsResponse;
                toJSON(message: _52.QueryParamsResponse): unknown;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: any[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _52.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _52.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryDepositRequest;
                fromJSON(object: any): _52.QueryDepositRequest;
                toJSON(message: _52.QueryDepositRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                }): _52.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _52.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryDepositResponse;
                fromJSON(object: any): _52.QueryDepositResponse;
                toJSON(message: _52.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: any[];
                    };
                }): _52.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _52.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryDepositsRequest;
                fromJSON(object: any): _52.QueryDepositsRequest;
                toJSON(message: _52.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: any;
                }): _52.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _52.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryDepositsResponse;
                fromJSON(object: any): _52.QueryDepositsResponse;
                toJSON(message: _52.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: any[];
                    }[];
                    pagination?: any;
                }): _52.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _52.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryTallyResultRequest;
                fromJSON(object: any): _52.QueryTallyResultRequest;
                toJSON(message: _52.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _52.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _52.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryTallyResultResponse;
                fromJSON(object: any): _52.QueryTallyResultResponse;
                toJSON(message: _52.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _52.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _51.VoteOption;
            voteOptionToJSON(object: _51.VoteOption): string;
            proposalStatusFromJSON(object: any): _51.ProposalStatus;
            proposalStatusToJSON(object: _51.ProposalStatus): string;
            VoteOption: typeof _51.VoteOption;
            ProposalStatus: typeof _51.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _51.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.WeightedVoteOption;
                fromJSON(object: any): _51.WeightedVoteOption;
                toJSON(message: _51.WeightedVoteOption): unknown;
                fromPartial(object: {
                    option?: _51.VoteOption;
                    weight?: string;
                }): _51.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _51.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Deposit;
                fromJSON(object: any): _51.Deposit;
                toJSON(message: _51.Deposit): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: any[];
                }): _51.Deposit;
            };
            Proposal: {
                encode(message: _51.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Proposal;
                fromJSON(object: any): _51.Proposal;
                toJSON(message: _51.Proposal): unknown;
                fromPartial(object: {
                    id?: any;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    status?: _51.ProposalStatus;
                    finalTallyResult?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: any[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                    metadata?: string;
                }): _51.Proposal;
            };
            TallyResult: {
                encode(message: _51.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.TallyResult;
                fromJSON(object: any): _51.TallyResult;
                toJSON(message: _51.TallyResult): unknown;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _51.TallyResult;
            };
            Vote: {
                encode(message: _51.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Vote;
                fromJSON(object: any): _51.Vote;
                toJSON(message: _51.Vote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _51.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _51.Vote;
            };
            DepositParams: {
                encode(message: _51.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.DepositParams;
                fromJSON(object: any): _51.DepositParams;
                toJSON(message: _51.DepositParams): unknown;
                fromPartial(object: {
                    minDeposit?: any[];
                    maxDepositPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _51.DepositParams;
            };
            VotingParams: {
                encode(message: _51.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.VotingParams;
                fromJSON(object: any): _51.VotingParams;
                toJSON(message: _51.VotingParams): unknown;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _51.VotingParams;
            };
            TallyParams: {
                encode(message: _51.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.TallyParams;
                fromJSON(object: any): _51.TallyParams;
                toJSON(message: _51.TallyParams): unknown;
                fromPartial(object: {
                    quorum?: string;
                    threshold?: string;
                    vetoThreshold?: string;
                }): _51.TallyParams;
            };
            GenesisState: {
                encode(message: _50.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GenesisState;
                fromJSON(object: any): _50.GenesisState;
                toJSON(message: _50.GenesisState): unknown;
                fromPartial(object: {
                    startingProposalId?: any;
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: any[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _51.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    proposals?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _51.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: any[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    }[];
                    depositParams?: {
                        minDeposit?: any[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _50.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _155.MsgClientImpl;
            QueryClientImpl: typeof _148.QueryClientImpl;
            LCDQueryClient: typeof _142.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("cosmwasm").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _57.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _57.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _57.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _57.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _57.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _57.MsgSubmitProposal;
                    };
                    vote(value: _57.MsgVote): {
                        typeUrl: string;
                        value: _57.MsgVote;
                    };
                    voteWeighted(value: _57.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _57.MsgVoteWeighted;
                    };
                    deposit(value: _57.MsgDeposit): {
                        typeUrl: string;
                        value: _57.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _57.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _57.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _57.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _57.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _57.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _57.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _57.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _57.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _57.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _57.MsgSubmitProposal;
                    };
                    vote(value: _57.MsgVote): {
                        typeUrl: string;
                        value: _57.MsgVote;
                    };
                    voteWeighted(value: _57.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _57.MsgVoteWeighted;
                    };
                    deposit(value: _57.MsgDeposit): {
                        typeUrl: string;
                        value: _57.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _57.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _57.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _57.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _57.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _57.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _57.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _57.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _57.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _57.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgSubmitProposal;
                fromJSON(object: any): _57.MsgSubmitProposal;
                toJSON(message: _57.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    initialDeposit?: any[];
                    proposer?: string;
                }): _57.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _57.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgSubmitProposalResponse;
                fromJSON(object: any): _57.MsgSubmitProposalResponse;
                toJSON(message: _57.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _57.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _57.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgVote;
                fromJSON(object: any): _57.MsgVote;
                toJSON(message: _57.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _55.VoteOption;
                }): _57.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _57.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgVoteResponse;
                fromJSON(_: any): _57.MsgVoteResponse;
                toJSON(_: _57.MsgVoteResponse): unknown;
                fromPartial(_: {}): _57.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _57.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgVoteWeighted;
                fromJSON(object: any): _57.MsgVoteWeighted;
                toJSON(message: _57.MsgVoteWeighted): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _55.VoteOption;
                        weight?: string;
                    }[];
                }): _57.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _57.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgVoteWeightedResponse;
                fromJSON(_: any): _57.MsgVoteWeightedResponse;
                toJSON(_: _57.MsgVoteWeightedResponse): unknown;
                fromPartial(_: {}): _57.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _57.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgDeposit;
                fromJSON(object: any): _57.MsgDeposit;
                toJSON(message: _57.MsgDeposit): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: any[];
                }): _57.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _57.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgDepositResponse;
                fromJSON(_: any): _57.MsgDepositResponse;
                toJSON(_: _57.MsgDepositResponse): unknown;
                fromPartial(_: {}): _57.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _56.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryProposalRequest;
                fromJSON(object: any): _56.QueryProposalRequest;
                toJSON(message: _56.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _56.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _56.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryProposalResponse;
                fromJSON(object: any): _56.QueryProposalResponse;
                toJSON(message: _56.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _55.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: any[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    };
                }): _56.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _56.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryProposalsRequest;
                fromJSON(object: any): _56.QueryProposalsRequest;
                toJSON(message: _56.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    proposalStatus?: _55.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: any;
                }): _56.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _56.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryProposalsResponse;
                fromJSON(object: any): _56.QueryProposalsResponse;
                toJSON(message: _56.QueryProposalsResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _55.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: any[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    pagination?: any;
                }): _56.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _56.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryVoteRequest;
                fromJSON(object: any): _56.QueryVoteRequest;
                toJSON(message: _56.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _56.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _56.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryVoteResponse;
                fromJSON(object: any): _56.QueryVoteResponse;
                toJSON(message: _56.QueryVoteResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _55.VoteOption;
                        options?: {
                            option?: _55.VoteOption;
                            weight?: string;
                        }[];
                    };
                }): _56.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _56.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryVotesRequest;
                fromJSON(object: any): _56.QueryVotesRequest;
                toJSON(message: _56.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: any;
                }): _56.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _56.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryVotesResponse;
                fromJSON(object: any): _56.QueryVotesResponse;
                toJSON(message: _56.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _55.VoteOption;
                        options?: {
                            option?: _55.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    pagination?: any;
                }): _56.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _56.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryParamsRequest;
                fromJSON(object: any): _56.QueryParamsRequest;
                toJSON(message: _56.QueryParamsRequest): unknown;
                fromPartial(object: {
                    paramsType?: string;
                }): _56.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _56.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryParamsResponse;
                fromJSON(object: any): _56.QueryParamsResponse;
                toJSON(message: _56.QueryParamsResponse): unknown;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: any[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _56.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _56.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDepositRequest;
                fromJSON(object: any): _56.QueryDepositRequest;
                toJSON(message: _56.QueryDepositRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                }): _56.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _56.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDepositResponse;
                fromJSON(object: any): _56.QueryDepositResponse;
                toJSON(message: _56.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: any[];
                    };
                }): _56.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _56.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDepositsRequest;
                fromJSON(object: any): _56.QueryDepositsRequest;
                toJSON(message: _56.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: any;
                }): _56.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _56.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDepositsResponse;
                fromJSON(object: any): _56.QueryDepositsResponse;
                toJSON(message: _56.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: any[];
                    }[];
                    pagination?: any;
                }): _56.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _56.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryTallyResultRequest;
                fromJSON(object: any): _56.QueryTallyResultRequest;
                toJSON(message: _56.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _56.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _56.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryTallyResultResponse;
                fromJSON(object: any): _56.QueryTallyResultResponse;
                toJSON(message: _56.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                }): _56.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _55.VoteOption;
            voteOptionToJSON(object: _55.VoteOption): string;
            proposalStatusFromJSON(object: any): _55.ProposalStatus;
            proposalStatusToJSON(object: _55.ProposalStatus): string;
            VoteOption: typeof _55.VoteOption;
            ProposalStatus: typeof _55.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _55.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.WeightedVoteOption;
                fromJSON(object: any): _55.WeightedVoteOption;
                toJSON(message: _55.WeightedVoteOption): unknown;
                fromPartial(object: {
                    option?: _55.VoteOption;
                    weight?: string;
                }): _55.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _55.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.TextProposal;
                fromJSON(object: any): _55.TextProposal;
                toJSON(message: _55.TextProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _55.TextProposal;
            };
            Deposit: {
                encode(message: _55.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Deposit;
                fromJSON(object: any): _55.Deposit;
                toJSON(message: _55.Deposit): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: any[];
                }): _55.Deposit;
            };
            Proposal: {
                encode(message: _55.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Proposal;
                fromJSON(object: any): _55.Proposal;
                toJSON(message: _55.Proposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    status?: _55.ProposalStatus;
                    finalTallyResult?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: any[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                }): _55.Proposal;
            };
            TallyResult: {
                encode(message: _55.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.TallyResult;
                fromJSON(object: any): _55.TallyResult;
                toJSON(message: _55.TallyResult): unknown;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    noWithVeto?: string;
                }): _55.TallyResult;
            };
            Vote: {
                encode(message: _55.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Vote;
                fromJSON(object: any): _55.Vote;
                toJSON(message: _55.Vote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _55.VoteOption;
                    options?: {
                        option?: _55.VoteOption;
                        weight?: string;
                    }[];
                }): _55.Vote;
            };
            DepositParams: {
                encode(message: _55.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.DepositParams;
                fromJSON(object: any): _55.DepositParams;
                toJSON(message: _55.DepositParams): unknown;
                fromPartial(object: {
                    minDeposit?: any[];
                    maxDepositPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _55.DepositParams;
            };
            VotingParams: {
                encode(message: _55.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.VotingParams;
                fromJSON(object: any): _55.VotingParams;
                toJSON(message: _55.VotingParams): unknown;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _55.VotingParams;
            };
            TallyParams: {
                encode(message: _55.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.TallyParams;
                fromJSON(object: any): _55.TallyParams;
                toJSON(message: _55.TallyParams): unknown;
                fromPartial(object: {
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    vetoThreshold?: Uint8Array;
                }): _55.TallyParams;
            };
            GenesisState: {
                encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.GenesisState;
                fromJSON(object: any): _54.GenesisState;
                toJSON(message: _54.GenesisState): unknown;
                fromPartial(object: {
                    startingProposalId?: any;
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: any[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _55.VoteOption;
                        options?: {
                            option?: _55.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    proposals?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _55.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: any[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    depositParams?: {
                        minDeposit?: any[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _54.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _156.MsgClientImpl;
            QueryClientImpl: typeof _149.QueryClientImpl;
            LCDQueryClient: typeof _143.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("cosmwasm").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _61.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _61.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _61.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _61.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _61.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _61.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _61.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _61.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _61.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _61.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _61.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _61.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _61.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _61.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _61.MsgCreateGroup): {
                        typeUrl: string;
                        value: _61.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _61.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _61.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _61.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _61.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _61.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _61.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _61.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _61.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _61.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _61.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _61.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _61.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _61.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _61.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _61.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _61.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _61.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _61.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _61.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _61.MsgWithdrawProposal;
                    };
                    vote(value: _61.MsgVote): {
                        typeUrl: string;
                        value: _61.MsgVote;
                    };
                    exec(value: _61.MsgExec): {
                        typeUrl: string;
                        value: _61.MsgExec;
                    };
                    leaveGroup(value: _61.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _61.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _61.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _61.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _61.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _61.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _61.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _61.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _61.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _61.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _61.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _61.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _61.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _61.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _61.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _61.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _61.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _61.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _61.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _61.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _61.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _61.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _61.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _61.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _61.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _61.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _61.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _61.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _61.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _61.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _61.MsgCreateGroup): {
                        typeUrl: string;
                        value: _61.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _61.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _61.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _61.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _61.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _61.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _61.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _61.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _61.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _61.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _61.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _61.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _61.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _61.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _61.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _61.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _61.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _61.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _61.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _61.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _61.MsgWithdrawProposal;
                    };
                    vote(value: _61.MsgVote): {
                        typeUrl: string;
                        value: _61.MsgVote;
                    };
                    exec(value: _61.MsgExec): {
                        typeUrl: string;
                        value: _61.MsgExec;
                    };
                    leaveGroup(value: _61.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _61.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _61.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    }) => _61.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _61.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    }) => _61.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _61.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _61.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _61.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _61.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _61.MsgCreateGroupPolicy) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _61.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _61.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _61.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _61.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _61.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _61.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, address, decision_policy }: {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _61.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _61.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: string;
                    }) => _61.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, messages, exec }: _61.MsgSubmitProposal) => {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    };
                    fromAmino: ({ address, proposers, metadata, messages, exec }: {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    }) => _61.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _61.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _61.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _61.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    }) => _61.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _61.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _61.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _61.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _61.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _62.VoteOption;
            voteOptionToJSON(object: _62.VoteOption): string;
            proposalStatusFromJSON(object: any): _62.ProposalStatus;
            proposalStatusToJSON(object: _62.ProposalStatus): string;
            proposalResultFromJSON(object: any): _62.ProposalResult;
            proposalResultToJSON(object: _62.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _62.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _62.ProposalExecutorResult): string;
            VoteOption: typeof _62.VoteOption;
            ProposalStatus: typeof _62.ProposalStatus;
            ProposalResult: typeof _62.ProposalResult;
            ProposalExecutorResult: typeof _62.ProposalExecutorResult;
            Member: {
                encode(message: _62.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Member;
                fromJSON(object: any): _62.Member;
                toJSON(message: _62.Member): unknown;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                    metadata?: string;
                    addedAt?: Date;
                }): _62.Member;
            };
            Members: {
                encode(message: _62.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Members;
                fromJSON(object: any): _62.Members;
                toJSON(message: _62.Members): unknown;
                fromPartial(object: {
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                }): _62.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _62.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ThresholdDecisionPolicy;
                fromJSON(object: any): _62.ThresholdDecisionPolicy;
                toJSON(message: _62.ThresholdDecisionPolicy): unknown;
                fromPartial(object: {
                    threshold?: string;
                    windows?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        minExecutionPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _62.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _62.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.PercentageDecisionPolicy;
                fromJSON(object: any): _62.PercentageDecisionPolicy;
                toJSON(message: _62.PercentageDecisionPolicy): unknown;
                fromPartial(object: {
                    percentage?: string;
                    windows?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        minExecutionPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _62.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _62.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.DecisionPolicyWindows;
                fromJSON(object: any): _62.DecisionPolicyWindows;
                toJSON(message: _62.DecisionPolicyWindows): unknown;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    minExecutionPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _62.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _62.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GroupInfo;
                fromJSON(object: any): _62.GroupInfo;
                toJSON(message: _62.GroupInfo): unknown;
                fromPartial(object: {
                    id?: any;
                    admin?: string;
                    metadata?: string;
                    version?: any;
                    totalWeight?: string;
                    createdAt?: Date;
                }): _62.GroupInfo;
            };
            GroupMember: {
                encode(message: _62.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GroupMember;
                fromJSON(object: any): _62.GroupMember;
                toJSON(message: _62.GroupMember): unknown;
                fromPartial(object: {
                    groupId?: any;
                    member?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    };
                }): _62.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _62.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GroupPolicyInfo;
                fromJSON(object: any): _62.GroupPolicyInfo;
                toJSON(message: _62.GroupPolicyInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    groupId?: any;
                    admin?: string;
                    metadata?: string;
                    version?: any;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    createdAt?: Date;
                }): _62.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _62.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Proposal;
                fromJSON(object: any): _62.Proposal;
                toJSON(message: _62.Proposal): unknown;
                fromPartial(object: {
                    id?: any;
                    address?: string;
                    metadata?: string;
                    proposers?: string[];
                    submitTime?: Date;
                    groupVersion?: any;
                    groupPolicyVersion?: any;
                    status?: _62.ProposalStatus;
                    result?: _62.ProposalResult;
                    finalTallyResult?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                    votingPeriodEnd?: Date;
                    executorResult?: _62.ProposalExecutorResult;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _62.Proposal;
            };
            TallyResult: {
                encode(message: _62.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.TallyResult;
                fromJSON(object: any): _62.TallyResult;
                toJSON(message: _62.TallyResult): unknown;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _62.TallyResult;
            };
            Vote: {
                encode(message: _62.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Vote;
                fromJSON(object: any): _62.Vote;
                toJSON(message: _62.Vote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _62.VoteOption;
                    metadata?: string;
                    submitTime?: Date;
                }): _62.Vote;
            };
            execFromJSON(object: any): _61.Exec;
            execToJSON(object: _61.Exec): string;
            Exec: typeof _61.Exec;
            MsgCreateGroup: {
                encode(message: _61.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgCreateGroup;
                fromJSON(object: any): _61.MsgCreateGroup;
                toJSON(message: _61.MsgCreateGroup): unknown;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                    metadata?: string;
                }): _61.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _61.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgCreateGroupResponse;
                fromJSON(object: any): _61.MsgCreateGroupResponse;
                toJSON(message: _61.MsgCreateGroupResponse): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _61.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _61.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupMembers;
                fromJSON(object: any): _61.MsgUpdateGroupMembers;
                toJSON(message: _61.MsgUpdateGroupMembers): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    memberUpdates?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                }): _61.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _61.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _61.MsgUpdateGroupMembersResponse;
                toJSON(_: _61.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: {}): _61.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _61.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupAdmin;
                fromJSON(object: any): _61.MsgUpdateGroupAdmin;
                toJSON(message: _61.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    newAdmin?: string;
                }): _61.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _61.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _61.MsgUpdateGroupAdminResponse;
                toJSON(_: _61.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: {}): _61.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _61.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupMetadata;
                fromJSON(object: any): _61.MsgUpdateGroupMetadata;
                toJSON(message: _61.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    metadata?: string;
                }): _61.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _61.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _61.MsgUpdateGroupMetadataResponse;
                toJSON(_: _61.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: {}): _61.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _61.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgCreateGroupPolicy;
                fromJSON(object: any): _61.MsgCreateGroupPolicy;
                toJSON(message: _61.MsgCreateGroupPolicy): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    metadata?: string;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _61.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _61.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _61.MsgCreateGroupPolicyResponse;
                toJSON(message: _61.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _61.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _61.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _61.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _61.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    newAdmin?: string;
                }): _61.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _61.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _61.MsgCreateGroupWithPolicy;
                toJSON(message: _61.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                    groupMetadata?: string;
                    groupPolicyMetadata?: string;
                    groupPolicyAsAdmin?: boolean;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _61.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _61.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _61.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _61.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: {
                    groupId?: any;
                    groupPolicyAddress?: string;
                }): _61.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _61.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _61.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _61.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: {}): _61.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _61.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _61.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _61.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _61.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _61.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _61.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _61.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: {}): _61.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _61.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _61.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _61.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    metadata?: string;
                }): _61.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _61.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _61.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _61.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: {}): _61.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _61.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgSubmitProposal;
                fromJSON(object: any): _61.MsgSubmitProposal;
                toJSON(message: _61.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    address?: string;
                    proposers?: string[];
                    metadata?: string;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    exec?: _61.Exec;
                }): _61.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _61.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgSubmitProposalResponse;
                fromJSON(object: any): _61.MsgSubmitProposalResponse;
                toJSON(message: _61.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _61.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _61.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgWithdrawProposal;
                fromJSON(object: any): _61.MsgWithdrawProposal;
                toJSON(message: _61.MsgWithdrawProposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    address?: string;
                }): _61.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _61.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgWithdrawProposalResponse;
                fromJSON(_: any): _61.MsgWithdrawProposalResponse;
                toJSON(_: _61.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: {}): _61.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _61.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgVote;
                fromJSON(object: any): _61.MsgVote;
                toJSON(message: _61.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _62.VoteOption;
                    metadata?: string;
                    exec?: _61.Exec;
                }): _61.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _61.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgVoteResponse;
                fromJSON(_: any): _61.MsgVoteResponse;
                toJSON(_: _61.MsgVoteResponse): unknown;
                fromPartial(_: {}): _61.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _61.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgExec;
                fromJSON(object: any): _61.MsgExec;
                toJSON(message: _61.MsgExec): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    signer?: string;
                }): _61.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _61.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgExecResponse;
                fromJSON(_: any): _61.MsgExecResponse;
                toJSON(_: _61.MsgExecResponse): unknown;
                fromPartial(_: {}): _61.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _61.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgLeaveGroup;
                fromJSON(object: any): _61.MsgLeaveGroup;
                toJSON(message: _61.MsgLeaveGroup): unknown;
                fromPartial(object: {
                    address?: string;
                    groupId?: any;
                }): _61.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _61.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgLeaveGroupResponse;
                fromJSON(_: any): _61.MsgLeaveGroupResponse;
                toJSON(_: _61.MsgLeaveGroupResponse): unknown;
                fromPartial(_: {}): _61.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _60.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupInfoRequest;
                fromJSON(object: any): _60.QueryGroupInfoRequest;
                toJSON(message: _60.QueryGroupInfoRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _60.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _60.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupInfoResponse;
                fromJSON(object: any): _60.QueryGroupInfoResponse;
                toJSON(message: _60.QueryGroupInfoResponse): unknown;
                fromPartial(object: {
                    info?: {
                        id?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        totalWeight?: string;
                        createdAt?: Date;
                    };
                }): _60.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _60.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _60.QueryGroupPolicyInfoRequest;
                toJSON(message: _60.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _60.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _60.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _60.QueryGroupPolicyInfoResponse;
                toJSON(message: _60.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    };
                }): _60.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _60.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupMembersRequest;
                fromJSON(object: any): _60.QueryGroupMembersRequest;
                toJSON(message: _60.QueryGroupMembersRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                    pagination?: any;
                }): _60.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _60.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupMembersResponse;
                fromJSON(object: any): _60.QueryGroupMembersResponse;
                toJSON(message: _60.QueryGroupMembersResponse): unknown;
                fromPartial(object: {
                    members?: {
                        groupId?: any;
                        member?: {
                            address?: string;
                            weight?: string;
                            metadata?: string;
                            addedAt?: Date;
                        };
                    }[];
                    pagination?: any;
                }): _60.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _60.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupsByAdminRequest;
                fromJSON(object: any): _60.QueryGroupsByAdminRequest;
                toJSON(message: _60.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: {
                    admin?: string;
                    pagination?: any;
                }): _60.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _60.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupsByAdminResponse;
                fromJSON(object: any): _60.QueryGroupsByAdminResponse;
                toJSON(message: _60.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: {
                    groups?: {
                        id?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        totalWeight?: string;
                        createdAt?: Date;
                    }[];
                    pagination?: any;
                }): _60.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _60.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _60.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _60.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                    pagination?: any;
                }): _60.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _60.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _60.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _60.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: {
                    groupPolicies?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    }[];
                    pagination?: any;
                }): _60.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _60.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _60.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _60.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: {
                    admin?: string;
                    pagination?: any;
                }): _60.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _60.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _60.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _60.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: {
                    groupPolicies?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    }[];
                    pagination?: any;
                }): _60.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _60.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryProposalRequest;
                fromJSON(object: any): _60.QueryProposalRequest;
                toJSON(message: _60.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _60.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _60.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryProposalResponse;
                fromJSON(object: any): _60.QueryProposalResponse;
                toJSON(message: _60.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        id?: any;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: Date;
                        groupVersion?: any;
                        groupPolicyVersion?: any;
                        status?: _62.ProposalStatus;
                        result?: _62.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: Date;
                        executorResult?: _62.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _60.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _60.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _60.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _60.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: any;
                }): _60.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _60.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _60.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _60.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        id?: any;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: Date;
                        groupVersion?: any;
                        groupPolicyVersion?: any;
                        status?: _62.ProposalStatus;
                        result?: _62.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: Date;
                        executorResult?: _62.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    pagination?: any;
                }): _60.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _60.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _60.QueryVoteByProposalVoterRequest;
                toJSON(message: _60.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _60.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _60.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _60.QueryVoteByProposalVoterResponse;
                toJSON(message: _60.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _62.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    };
                }): _60.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _60.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryVotesByProposalRequest;
                fromJSON(object: any): _60.QueryVotesByProposalRequest;
                toJSON(message: _60.QueryVotesByProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: any;
                }): _60.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _60.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryVotesByProposalResponse;
                fromJSON(object: any): _60.QueryVotesByProposalResponse;
                toJSON(message: _60.QueryVotesByProposalResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _62.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    }[];
                    pagination?: any;
                }): _60.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _60.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryVotesByVoterRequest;
                fromJSON(object: any): _60.QueryVotesByVoterRequest;
                toJSON(message: _60.QueryVotesByVoterRequest): unknown;
                fromPartial(object: {
                    voter?: string;
                    pagination?: any;
                }): _60.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _60.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryVotesByVoterResponse;
                fromJSON(object: any): _60.QueryVotesByVoterResponse;
                toJSON(message: _60.QueryVotesByVoterResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _62.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    }[];
                    pagination?: any;
                }): _60.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _60.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupsByMemberRequest;
                fromJSON(object: any): _60.QueryGroupsByMemberRequest;
                toJSON(message: _60.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: any;
                }): _60.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _60.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryGroupsByMemberResponse;
                fromJSON(object: any): _60.QueryGroupsByMemberResponse;
                toJSON(message: _60.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: {
                    groups?: {
                        id?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        totalWeight?: string;
                        createdAt?: Date;
                    }[];
                    pagination?: any;
                }): _60.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _60.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryTallyResultRequest;
                fromJSON(object: any): _60.QueryTallyResultRequest;
                toJSON(message: _60.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _60.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _60.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryTallyResultResponse;
                fromJSON(object: any): _60.QueryTallyResultResponse;
                toJSON(message: _60.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _60.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _59.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.GenesisState;
                fromJSON(object: any): _59.GenesisState;
                toJSON(message: _59.GenesisState): unknown;
                fromPartial(object: {
                    groupSeq?: any;
                    groups?: {
                        id?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        totalWeight?: string;
                        createdAt?: Date;
                    }[];
                    groupMembers?: {
                        groupId?: any;
                        member?: {
                            address?: string;
                            weight?: string;
                            metadata?: string;
                            addedAt?: Date;
                        };
                    }[];
                    groupPolicySeq?: any;
                    groupPolicies?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    }[];
                    proposalSeq?: any;
                    proposals?: {
                        id?: any;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: Date;
                        groupVersion?: any;
                        groupPolicyVersion?: any;
                        status?: _62.ProposalStatus;
                        result?: _62.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: Date;
                        executorResult?: _62.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _62.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    }[];
                }): _59.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _58.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.EventCreateGroup;
                fromJSON(object: any): _58.EventCreateGroup;
                toJSON(message: _58.EventCreateGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _58.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _58.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.EventUpdateGroup;
                fromJSON(object: any): _58.EventUpdateGroup;
                toJSON(message: _58.EventUpdateGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _58.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _58.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.EventCreateGroupPolicy;
                fromJSON(object: any): _58.EventCreateGroupPolicy;
                toJSON(message: _58.EventCreateGroupPolicy): unknown;
                fromPartial(object: {
                    address?: string;
                }): _58.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _58.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.EventUpdateGroupPolicy;
                fromJSON(object: any): _58.EventUpdateGroupPolicy;
                toJSON(message: _58.EventUpdateGroupPolicy): unknown;
                fromPartial(object: {
                    address?: string;
                }): _58.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _58.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.EventSubmitProposal;
                fromJSON(object: any): _58.EventSubmitProposal;
                toJSON(message: _58.EventSubmitProposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _58.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _58.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.EventWithdrawProposal;
                fromJSON(object: any): _58.EventWithdrawProposal;
                toJSON(message: _58.EventWithdrawProposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _58.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _58.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.EventVote;
                fromJSON(object: any): _58.EventVote;
                toJSON(message: _58.EventVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _58.EventVote;
            };
            EventExec: {
                encode(message: _58.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.EventExec;
                fromJSON(object: any): _58.EventExec;
                toJSON(message: _58.EventExec): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    result?: _62.ProposalExecutorResult;
                }): _58.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _58.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.EventLeaveGroup;
                fromJSON(object: any): _58.EventLeaveGroup;
                toJSON(message: _58.EventLeaveGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                    address?: string;
                }): _58.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: any;
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: any;
    }
    namespace orm {
        const v1: any;
        const v1alpha1: {
            storageTypeFromJSON(object: any): _73.StorageType;
            storageTypeToJSON(object: _73.StorageType): string;
            StorageType: typeof _73.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _73.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ModuleSchemaDescriptor;
                fromJSON(object: any): _73.ModuleSchemaDescriptor;
                toJSON(message: _73.ModuleSchemaDescriptor): unknown;
                fromPartial(object: {
                    schemaFile?: {
                        id?: number;
                        protoFileName?: string;
                        storageType?: _73.StorageType;
                    }[];
                    prefix?: Uint8Array;
                }): _73.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _73.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _73.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _73.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: {
                    id?: number;
                    protoFileName?: string;
                    storageType?: _73.StorageType;
                }): _73.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: any;
    }
    namespace slashing {
        const v1beta1: any;
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _157.MsgClientImpl;
            QueryClientImpl: typeof _150.QueryClientImpl;
            LCDQueryClient: typeof _144.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("cosmwasm").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _84.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _84.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _84.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _84.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _84.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _84.MsgCreateValidator): {
                        typeUrl: string;
                        value: _84.MsgCreateValidator;
                    };
                    editValidator(value: _84.MsgEditValidator): {
                        typeUrl: string;
                        value: _84.MsgEditValidator;
                    };
                    delegate(value: _84.MsgDelegate): {
                        typeUrl: string;
                        value: _84.MsgDelegate;
                    };
                    beginRedelegate(value: _84.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _84.MsgBeginRedelegate;
                    };
                    undelegate(value: _84.MsgUndelegate): {
                        typeUrl: string;
                        value: _84.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _84.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _84.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _84.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _84.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _84.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _84.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _84.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _84.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _84.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _84.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _84.MsgCreateValidator): {
                        typeUrl: string;
                        value: _84.MsgCreateValidator;
                    };
                    editValidator(value: _84.MsgEditValidator): {
                        typeUrl: string;
                        value: _84.MsgEditValidator;
                    };
                    delegate(value: _84.MsgDelegate): {
                        typeUrl: string;
                        value: _84.MsgDelegate;
                    };
                    beginRedelegate(value: _84.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _84.MsgBeginRedelegate;
                    };
                    undelegate(value: _84.MsgUndelegate): {
                        typeUrl: string;
                        value: _84.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _84.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _84.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _84.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _84.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _84.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _84.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _84.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _84.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _84.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _84.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _84.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgCreateValidator;
                fromJSON(object: any): _84.MsgCreateValidator;
                toJSON(message: _84.MsgCreateValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    commission?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    minSelfDelegation?: string;
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    pubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    value?: any;
                }): _84.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _84.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgCreateValidatorResponse;
                fromJSON(_: any): _84.MsgCreateValidatorResponse;
                toJSON(_: _84.MsgCreateValidatorResponse): unknown;
                fromPartial(_: {}): _84.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _84.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgEditValidator;
                fromJSON(object: any): _84.MsgEditValidator;
                toJSON(message: _84.MsgEditValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    validatorAddress?: string;
                    commissionRate?: string;
                    minSelfDelegation?: string;
                }): _84.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _84.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgEditValidatorResponse;
                fromJSON(_: any): _84.MsgEditValidatorResponse;
                toJSON(_: _84.MsgEditValidatorResponse): unknown;
                fromPartial(_: {}): _84.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _84.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgDelegate;
                fromJSON(object: any): _84.MsgDelegate;
                toJSON(message: _84.MsgDelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: any;
                }): _84.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _84.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgDelegateResponse;
                fromJSON(_: any): _84.MsgDelegateResponse;
                toJSON(_: _84.MsgDelegateResponse): unknown;
                fromPartial(_: {}): _84.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _84.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgBeginRedelegate;
                fromJSON(object: any): _84.MsgBeginRedelegate;
                toJSON(message: _84.MsgBeginRedelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    amount?: any;
                }): _84.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _84.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgBeginRedelegateResponse;
                fromJSON(object: any): _84.MsgBeginRedelegateResponse;
                toJSON(message: _84.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: Date;
                }): _84.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _84.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgUndelegate;
                fromJSON(object: any): _84.MsgUndelegate;
                toJSON(message: _84.MsgUndelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: any;
                }): _84.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _84.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgUndelegateResponse;
                fromJSON(object: any): _84.MsgUndelegateResponse;
                toJSON(message: _84.MsgUndelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: Date;
                }): _84.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _83.BondStatus;
            bondStatusToJSON(object: _83.BondStatus): string;
            BondStatus: typeof _83.BondStatus;
            HistoricalInfo: {
                encode(message: _83.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.HistoricalInfo;
                fromJSON(object: any): _83.HistoricalInfo;
                toJSON(message: _83.HistoricalInfo): unknown;
                fromPartial(object: {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    valset?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _83.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                }): _83.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _83.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.CommissionRates;
                fromJSON(object: any): _83.CommissionRates;
                toJSON(message: _83.CommissionRates): unknown;
                fromPartial(object: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                }): _83.CommissionRates;
            };
            Commission: {
                encode(message: _83.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Commission;
                fromJSON(object: any): _83.Commission;
                toJSON(message: _83.Commission): unknown;
                fromPartial(object: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: Date;
                }): _83.Commission;
            };
            Description: {
                encode(message: _83.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Description;
                fromJSON(object: any): _83.Description;
                toJSON(message: _83.Description): unknown;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                }): _83.Description;
            };
            Validator: {
                encode(message: _83.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Validator;
                fromJSON(object: any): _83.Validator;
                toJSON(message: _83.Validator): unknown;
                fromPartial(object: {
                    operatorAddress?: string;
                    consensusPubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _83.BondStatus;
                    tokens?: string;
                    delegatorShares?: string;
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    unbondingHeight?: any;
                    unbondingTime?: Date;
                    commission?: {
                        commissionRates?: {
                            rate?: string;
                            maxRate?: string;
                            maxChangeRate?: string;
                        };
                        updateTime?: Date;
                    };
                    minSelfDelegation?: string;
                }): _83.Validator;
            };
            ValAddresses: {
                encode(message: _83.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ValAddresses;
                fromJSON(object: any): _83.ValAddresses;
                toJSON(message: _83.ValAddresses): unknown;
                fromPartial(object: {
                    addresses?: string[];
                }): _83.ValAddresses;
            };
            DVPair: {
                encode(message: _83.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.DVPair;
                fromJSON(object: any): _83.DVPair;
                toJSON(message: _83.DVPair): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _83.DVPair;
            };
            DVPairs: {
                encode(message: _83.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.DVPairs;
                fromJSON(object: any): _83.DVPairs;
                toJSON(message: _83.DVPairs): unknown;
                fromPartial(object: {
                    pairs?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                    }[];
                }): _83.DVPairs;
            };
            DVVTriplet: {
                encode(message: _83.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.DVVTriplet;
                fromJSON(object: any): _83.DVVTriplet;
                toJSON(message: _83.DVVTriplet): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                }): _83.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _83.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.DVVTriplets;
                fromJSON(object: any): _83.DVVTriplets;
                toJSON(message: _83.DVVTriplets): unknown;
                fromPartial(object: {
                    triplets?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                    }[];
                }): _83.DVVTriplets;
            };
            Delegation: {
                encode(message: _83.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Delegation;
                fromJSON(object: any): _83.Delegation;
                toJSON(message: _83.Delegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    shares?: string;
                }): _83.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _83.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.UnbondingDelegation;
                fromJSON(object: any): _83.UnbondingDelegation;
                toJSON(message: _83.UnbondingDelegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    entries?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        balance?: string;
                    }[];
                }): _83.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _83.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.UnbondingDelegationEntry;
                fromJSON(object: any): _83.UnbondingDelegationEntry;
                toJSON(message: _83.UnbondingDelegationEntry): unknown;
                fromPartial(object: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    balance?: string;
                }): _83.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _83.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RedelegationEntry;
                fromJSON(object: any): _83.RedelegationEntry;
                toJSON(message: _83.RedelegationEntry): unknown;
                fromPartial(object: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                }): _83.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _83.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Redelegation;
                fromJSON(object: any): _83.Redelegation;
                toJSON(message: _83.Redelegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    entries?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    }[];
                }): _83.Redelegation;
            };
            Params: {
                encode(message: _83.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Params;
                fromJSON(object: any): _83.Params;
                toJSON(message: _83.Params): unknown;
                fromPartial(object: {
                    unbondingTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    maxValidators?: number;
                    maxEntries?: number;
                    historicalEntries?: number;
                    bondDenom?: string;
                    minCommissionRate?: string;
                }): _83.Params;
            };
            DelegationResponse: {
                encode(message: _83.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.DelegationResponse;
                fromJSON(object: any): _83.DelegationResponse;
                toJSON(message: _83.DelegationResponse): unknown;
                fromPartial(object: {
                    delegation?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    };
                    balance?: any;
                }): _83.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _83.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RedelegationEntryResponse;
                fromJSON(object: any): _83.RedelegationEntryResponse;
                toJSON(message: _83.RedelegationEntryResponse): unknown;
                fromPartial(object: {
                    redelegationEntry?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    };
                    balance?: string;
                }): _83.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _83.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RedelegationResponse;
                fromJSON(object: any): _83.RedelegationResponse;
                toJSON(message: _83.RedelegationResponse): unknown;
                fromPartial(object: {
                    redelegation?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    };
                    entries?: {
                        redelegationEntry?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        };
                        balance?: string;
                    }[];
                }): _83.RedelegationResponse;
            };
            Pool: {
                encode(message: _83.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Pool;
                fromJSON(object: any): _83.Pool;
                toJSON(message: _83.Pool): unknown;
                fromPartial(object: {
                    notBondedTokens?: string;
                    bondedTokens?: string;
                }): _83.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _82.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryValidatorsRequest;
                fromJSON(object: any): _82.QueryValidatorsRequest;
                toJSON(message: _82.QueryValidatorsRequest): unknown;
                fromPartial(object: {
                    status?: string;
                    pagination?: any;
                }): _82.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _82.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryValidatorsResponse;
                fromJSON(object: any): _82.QueryValidatorsResponse;
                toJSON(message: _82.QueryValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _83.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: any;
                }): _82.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _82.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryValidatorRequest;
                fromJSON(object: any): _82.QueryValidatorRequest;
                toJSON(message: _82.QueryValidatorRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _82.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _82.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryValidatorResponse;
                fromJSON(object: any): _82.QueryValidatorResponse;
                toJSON(message: _82.QueryValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _83.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _82.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _82.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _82.QueryValidatorDelegationsRequest;
                toJSON(message: _82.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: any;
                }): _82.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _82.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _82.QueryValidatorDelegationsResponse;
                toJSON(message: _82.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: any;
                    }[];
                    pagination?: any;
                }): _82.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _82.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _82.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _82.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: any;
                }): _82.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _82.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _82.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _82.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: any;
                }): _82.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _82.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDelegationRequest;
                fromJSON(object: any): _82.QueryDelegationRequest;
                toJSON(message: _82.QueryDelegationRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _82.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _82.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDelegationResponse;
                fromJSON(object: any): _82.QueryDelegationResponse;
                toJSON(message: _82.QueryDelegationResponse): unknown;
                fromPartial(object: {
                    delegationResponse?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: any;
                    };
                }): _82.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _82.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _82.QueryUnbondingDelegationRequest;
                toJSON(message: _82.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _82.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _82.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _82.QueryUnbondingDelegationResponse;
                toJSON(message: _82.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: {
                    unbond?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    };
                }): _82.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _82.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _82.QueryDelegatorDelegationsRequest;
                toJSON(message: _82.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: any;
                }): _82.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _82.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _82.QueryDelegatorDelegationsResponse;
                toJSON(message: _82.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: any;
                    }[];
                    pagination?: any;
                }): _82.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _82.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _82.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _82.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: any;
                }): _82.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _82.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _82.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _82.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: any;
                }): _82.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _82.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryRedelegationsRequest;
                fromJSON(object: any): _82.QueryRedelegationsRequest;
                toJSON(message: _82.QueryRedelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    srcValidatorAddr?: string;
                    dstValidatorAddr?: string;
                    pagination?: any;
                }): _82.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _82.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryRedelegationsResponse;
                fromJSON(object: any): _82.QueryRedelegationsResponse;
                toJSON(message: _82.QueryRedelegationsResponse): unknown;
                fromPartial(object: {
                    redelegationResponses?: {
                        redelegation?: {
                            delegatorAddress?: string;
                            validatorSrcAddress?: string;
                            validatorDstAddress?: string;
                            entries?: {
                                creationHeight?: any;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            }[];
                        };
                        entries?: {
                            redelegationEntry?: {
                                creationHeight?: any;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            };
                            balance?: string;
                        }[];
                    }[];
                    pagination?: any;
                }): _82.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _82.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _82.QueryDelegatorValidatorsRequest;
                toJSON(message: _82.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: any;
                }): _82.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _82.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _82.QueryDelegatorValidatorsResponse;
                toJSON(message: _82.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _83.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: any;
                }): _82.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _82.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _82.QueryDelegatorValidatorRequest;
                toJSON(message: _82.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _82.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _82.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _82.QueryDelegatorValidatorResponse;
                toJSON(message: _82.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _83.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _82.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _82.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryHistoricalInfoRequest;
                fromJSON(object: any): _82.QueryHistoricalInfoRequest;
                toJSON(message: _82.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: {
                    height?: any;
                }): _82.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _82.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryHistoricalInfoResponse;
                fromJSON(object: any): _82.QueryHistoricalInfoResponse;
                toJSON(message: _82.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: {
                    hist?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        valset?: {
                            operatorAddress?: string;
                            consensusPubkey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            jailed?: boolean;
                            status?: _83.BondStatus;
                            tokens?: string;
                            delegatorShares?: string;
                            description?: {
                                moniker?: string;
                                identity?: string;
                                website?: string;
                                securityContact?: string;
                                details?: string;
                            };
                            unbondingHeight?: any;
                            unbondingTime?: Date;
                            commission?: {
                                commissionRates?: {
                                    rate?: string;
                                    maxRate?: string;
                                    maxChangeRate?: string;
                                };
                                updateTime?: Date;
                            };
                            minSelfDelegation?: string;
                        }[];
                    };
                }): _82.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _82.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryPoolRequest;
                fromJSON(_: any): _82.QueryPoolRequest;
                toJSON(_: _82.QueryPoolRequest): unknown;
                fromPartial(_: {}): _82.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _82.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryPoolResponse;
                fromJSON(object: any): _82.QueryPoolResponse;
                toJSON(message: _82.QueryPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        notBondedTokens?: string;
                        bondedTokens?: string;
                    };
                }): _82.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _82.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryParamsRequest;
                fromJSON(_: any): _82.QueryParamsRequest;
                toJSON(_: _82.QueryParamsRequest): unknown;
                fromPartial(_: {}): _82.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _82.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryParamsResponse;
                fromJSON(object: any): _82.QueryParamsResponse;
                toJSON(message: _82.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                }): _82.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _81.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.GenesisState;
                fromJSON(object: any): _81.GenesisState;
                toJSON(message: _81.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                    lastTotalPower?: Uint8Array;
                    lastValidatorPowers?: {
                        address?: string;
                        power?: any;
                    }[];
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _83.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    delegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    }[];
                    unbondingDelegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    redelegations?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    }[];
                    exported?: boolean;
                }): _81.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _81.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.LastValidatorPower;
                fromJSON(object: any): _81.LastValidatorPower;
                toJSON(message: _81.LastValidatorPower): unknown;
                fromPartial(object: {
                    address?: string;
                    power?: any;
                }): _81.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _80.AuthorizationType;
            authorizationTypeToJSON(object: _80.AuthorizationType): string;
            AuthorizationType: typeof _80.AuthorizationType;
            StakeAuthorization: {
                encode(message: _80.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.StakeAuthorization;
                fromJSON(object: any): _80.StakeAuthorization;
                toJSON(message: _80.StakeAuthorization): unknown;
                fromPartial(object: {
                    maxTokens?: any;
                    allowList?: {
                        address?: string[];
                    };
                    denyList?: {
                        address?: string[];
                    };
                    authorizationType?: _80.AuthorizationType;
                }): _80.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _80.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.StakeAuthorization_Validators;
                fromJSON(object: any): _80.StakeAuthorization_Validators;
                toJSON(message: _80.StakeAuthorization_Validators): unknown;
                fromPartial(object: {
                    address?: string[];
                }): _80.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _85.SignMode;
                signModeToJSON(object: _85.SignMode): string;
                SignMode: typeof _85.SignMode;
                SignatureDescriptors: {
                    encode(message: _85.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.SignatureDescriptors;
                    fromJSON(object: any): _85.SignatureDescriptors;
                    toJSON(message: _85.SignatureDescriptors): unknown;
                    fromPartial(object: {
                        signatures?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _85.SignMode;
                                    signature?: Uint8Array;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    signatures?: any[];
                                };
                            };
                            sequence?: any;
                        }[];
                    }): _85.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _85.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.SignatureDescriptor;
                    fromJSON(object: any): _85.SignatureDescriptor;
                    toJSON(message: _85.SignatureDescriptor): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _85.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                signatures?: any[];
                            };
                        };
                        sequence?: any;
                    }): _85.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _85.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.SignatureDescriptor_Data;
                    fromJSON(object: any): _85.SignatureDescriptor_Data;
                    toJSON(message: _85.SignatureDescriptor_Data): unknown;
                    fromPartial(object: {
                        single?: {
                            mode?: _85.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _85.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _85.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _85.SignatureDescriptor_Data_Single;
                    toJSON(message: _85.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: {
                        mode?: _85.SignMode;
                        signature?: Uint8Array;
                    }): _85.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _85.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _85.SignatureDescriptor_Data_Multi;
                    toJSON(message: _85.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: any[];
                    }): _85.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _151.ServiceClientImpl;
            Tx: {
                encode(message: _87.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Tx;
                fromJSON(object: any): _87.Tx;
                toJSON(message: _87.Tx): unknown;
                fromPartial(object: {
                    body?: {
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        memo?: string;
                        timeoutHeight?: any;
                        extensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        nonCriticalExtensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    authInfo?: {
                        signerInfos?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            modeInfo?: {
                                single?: {
                                    mode?: _85.SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                };
                            };
                            sequence?: any;
                        }[];
                        fee?: {
                            amount?: any[];
                            gasLimit?: any;
                            payer?: string;
                            granter?: string;
                        };
                        tip?: {
                            amount?: any[];
                            tipper?: string;
                        };
                    };
                    signatures?: Uint8Array[];
                }): _87.Tx;
            };
            TxRaw: {
                encode(message: _87.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.TxRaw;
                fromJSON(object: any): _87.TxRaw;
                toJSON(message: _87.TxRaw): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _87.TxRaw;
            };
            SignDoc: {
                encode(message: _87.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignDoc;
                fromJSON(object: any): _87.SignDoc;
                toJSON(message: _87.SignDoc): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    chainId?: string;
                    accountNumber?: any;
                }): _87.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _87.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignDocDirectAux;
                fromJSON(object: any): _87.SignDocDirectAux;
                toJSON(message: _87.SignDocDirectAux): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    chainId?: string;
                    accountNumber?: any;
                    sequence?: any;
                    tip?: {
                        amount?: any[];
                        tipper?: string;
                    };
                }): _87.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _87.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.TxBody;
                fromJSON(object: any): _87.TxBody;
                toJSON(message: _87.TxBody): unknown;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    memo?: string;
                    timeoutHeight?: any;
                    extensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    nonCriticalExtensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _87.TxBody;
            };
            AuthInfo: {
                encode(message: _87.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.AuthInfo;
                fromJSON(object: any): _87.AuthInfo;
                toJSON(message: _87.AuthInfo): unknown;
                fromPartial(object: {
                    signerInfos?: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        modeInfo?: {
                            single?: {
                                mode?: _85.SignMode;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                modeInfos?: any[];
                            };
                        };
                        sequence?: any;
                    }[];
                    fee?: {
                        amount?: any[];
                        gasLimit?: any;
                        payer?: string;
                        granter?: string;
                    };
                    tip?: {
                        amount?: any[];
                        tipper?: string;
                    };
                }): _87.AuthInfo;
            };
            SignerInfo: {
                encode(message: _87.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignerInfo;
                fromJSON(object: any): _87.SignerInfo;
                toJSON(message: _87.SignerInfo): unknown;
                fromPartial(object: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: _85.SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }): _87.SignerInfo;
            };
            ModeInfo: {
                encode(message: _87.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ModeInfo;
                fromJSON(object: any): _87.ModeInfo;
                toJSON(message: _87.ModeInfo): unknown;
                fromPartial(object: {
                    single?: {
                        mode?: _85.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        modeInfos?: any[];
                    };
                }): _87.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _87.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ModeInfo_Single;
                fromJSON(object: any): _87.ModeInfo_Single;
                toJSON(message: _87.ModeInfo_Single): unknown;
                fromPartial(object: {
                    mode?: _85.SignMode;
                }): _87.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _87.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ModeInfo_Multi;
                fromJSON(object: any): _87.ModeInfo_Multi;
                toJSON(message: _87.ModeInfo_Multi): unknown;
                fromPartial(object: {
                    bitarray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    modeInfos?: any[];
                }): _87.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _87.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Fee;
                fromJSON(object: any): _87.Fee;
                toJSON(message: _87.Fee): unknown;
                fromPartial(object: {
                    amount?: any[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                }): _87.Fee;
            };
            Tip: {
                encode(message: _87.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Tip;
                fromJSON(object: any): _87.Tip;
                toJSON(message: _87.Tip): unknown;
                fromPartial(object: {
                    amount?: any[];
                    tipper?: string;
                }): _87.Tip;
            };
            AuxSignerData: {
                encode(message: _87.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.AuxSignerData;
                fromJSON(object: any): _87.AuxSignerData;
                toJSON(message: _87.AuxSignerData): unknown;
                fromPartial(object: {
                    address?: string;
                    signDoc?: {
                        bodyBytes?: Uint8Array;
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        chainId?: string;
                        accountNumber?: any;
                        sequence?: any;
                        tip?: {
                            amount?: any[];
                            tipper?: string;
                        };
                    };
                    mode?: _85.SignMode;
                    sig?: Uint8Array;
                }): _87.AuxSignerData;
            };
            orderByFromJSON(object: any): _86.OrderBy;
            orderByToJSON(object: _86.OrderBy): string;
            broadcastModeFromJSON(object: any): _86.BroadcastMode;
            broadcastModeToJSON(object: _86.BroadcastMode): string;
            OrderBy: typeof _86.OrderBy;
            BroadcastMode: typeof _86.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _86.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GetTxsEventRequest;
                fromJSON(object: any): _86.GetTxsEventRequest;
                toJSON(message: _86.GetTxsEventRequest): unknown;
                fromPartial(object: {
                    events?: string[];
                    pagination?: any;
                    orderBy?: _86.OrderBy;
                }): _86.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _86.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GetTxsEventResponse;
                fromJSON(object: any): _86.GetTxsEventResponse;
                toJSON(message: _86.GetTxsEventResponse): unknown;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _85.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: any[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: any[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    txResponses?: any[];
                    pagination?: any;
                }): _86.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _86.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.BroadcastTxRequest;
                fromJSON(object: any): _86.BroadcastTxRequest;
                toJSON(message: _86.BroadcastTxRequest): unknown;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                    mode?: _86.BroadcastMode;
                }): _86.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _86.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.BroadcastTxResponse;
                fromJSON(object: any): _86.BroadcastTxResponse;
                toJSON(message: _86.BroadcastTxResponse): unknown;
                fromPartial(object: {
                    txResponse?: any;
                }): _86.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _86.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SimulateRequest;
                fromJSON(object: any): _86.SimulateRequest;
                toJSON(message: _86.SimulateRequest): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _85.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: any[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: any[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txBytes?: Uint8Array;
                }): _86.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _86.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SimulateResponse;
                fromJSON(object: any): _86.SimulateResponse;
                toJSON(message: _86.SimulateResponse): unknown;
                fromPartial(object: {
                    gasInfo?: any;
                    result?: any;
                }): _86.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _86.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GetTxRequest;
                fromJSON(object: any): _86.GetTxRequest;
                toJSON(message: _86.GetTxRequest): unknown;
                fromPartial(object: {
                    hash?: string;
                }): _86.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _86.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GetTxResponse;
                fromJSON(object: any): _86.GetTxResponse;
                toJSON(message: _86.GetTxResponse): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _85.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: any[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: any[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txResponse?: any;
                }): _86.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _86.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GetBlockWithTxsRequest;
                fromJSON(object: any): _86.GetBlockWithTxsRequest;
                toJSON(message: _86.GetBlockWithTxsRequest): unknown;
                fromPartial(object: {
                    height?: any;
                    pagination?: any;
                }): _86.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _86.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GetBlockWithTxsResponse;
                fromJSON(object: any): _86.GetBlockWithTxsResponse;
                toJSON(message: _86.GetBlockWithTxsResponse): unknown;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _85.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: any[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: any[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    block?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        data?: {
                            txs?: Uint8Array[];
                        };
                        evidence?: {
                            evidence?: {
                                duplicateVoteEvidence?: {
                                    voteA?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    voteB?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    totalVotingPower?: any;
                                    validatorPower?: any;
                                    timestamp?: Date;
                                };
                                lightClientAttackEvidence?: {
                                    conflictingBlock?: {
                                        signedHeader?: {
                                            header?: {
                                                version?: {
                                                    block?: any;
                                                    app?: any;
                                                };
                                                chainId?: string;
                                                height?: any;
                                                time?: Date;
                                                lastBlockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                lastCommitHash?: Uint8Array;
                                                dataHash?: Uint8Array;
                                                validatorsHash?: Uint8Array;
                                                nextValidatorsHash?: Uint8Array;
                                                consensusHash?: Uint8Array;
                                                appHash?: Uint8Array;
                                                lastResultsHash?: Uint8Array;
                                                evidenceHash?: Uint8Array;
                                                proposerAddress?: Uint8Array;
                                            };
                                            commit?: {
                                                height?: any;
                                                round?: number;
                                                blockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                signatures?: {
                                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                    validatorAddress?: Uint8Array;
                                                    timestamp?: Date;
                                                    signature?: Uint8Array;
                                                }[];
                                            };
                                        };
                                        validatorSet?: {
                                            validators?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: any;
                                                proposerPriority?: any;
                                            }[];
                                            proposer?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: any;
                                                proposerPriority?: any;
                                            };
                                            totalVotingPower?: any;
                                        };
                                    };
                                    commonHeight?: any;
                                    byzantineValidators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    totalVotingPower?: any;
                                    timestamp?: Date;
                                };
                            }[];
                        };
                        lastCommit?: {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    pagination?: any;
                }): _86.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: any;
    }
    namespace vesting {
        const v1beta1: any;
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                bank: {
                    v1beta1: _152.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _153.MsgClientImpl;
                };
                gov: {
                    v1: _154.MsgClientImpl;
                    v1beta1: _155.MsgClientImpl;
                };
                group: {
                    v1: _156.MsgClientImpl;
                };
                staking: {
                    v1beta1: _157.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                bank: {
                    v1beta1: _145.QueryClientImpl;
                };
                distribution: {
                    v1beta1: _146.QueryClientImpl;
                };
                gov: {
                    v1: _147.QueryClientImpl;
                    v1beta1: _148.QueryClientImpl;
                };
                group: {
                    v1: _149.QueryClientImpl;
                };
                staking: {
                    v1beta1: _150.QueryClientImpl;
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: any;
        }) => Promise<{
            cosmos: {
                bank: {
                    v1beta1: _139.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _140.LCDQueryClient;
                };
                gov: {
                    v1: _141.LCDQueryClient;
                    v1beta1: _142.LCDQueryClient;
                };
                group: {
                    v1: _143.LCDQueryClient;
                };
                staking: {
                    v1beta1: _144.LCDQueryClient;
                };
            };
        }>;
    };
}

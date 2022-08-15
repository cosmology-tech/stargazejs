import * as _144 from "./mint/v1beta1/genesis";
import * as _145 from "./mint/v1beta1/mint";
import * as _146 from "./mint/v1beta1/query";
import * as _214 from "./mint/v1beta1/query.lcd";
import * as _215 from "./mint/v1beta1/query.rpc.query";
export declare namespace stargaze {
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _215.QueryClientImpl;
            LCDQueryClient: typeof _214.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _146.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryParamsRequest;
                fromJSON(_: any): _146.QueryParamsRequest;
                toJSON(_: _146.QueryParamsRequest): unknown;
                fromPartial(_: {}): _146.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _146.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryParamsResponse;
                fromJSON(object: any): _146.QueryParamsResponse;
                toJSON(message: _146.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        startTime?: Date;
                        initialAnnualProvisions?: string;
                        reductionFactor?: string;
                        blocksPerYear?: any;
                    };
                }): _146.QueryParamsResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _146.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _146.QueryAnnualProvisionsRequest;
                toJSON(_: _146.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: {}): _146.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _146.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _146.QueryAnnualProvisionsResponse;
                toJSON(message: _146.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _146.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _145.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Minter;
                fromJSON(object: any): _145.Minter;
                toJSON(message: _145.Minter): unknown;
                fromPartial(object: {
                    annualProvisions?: string;
                }): _145.Minter;
            };
            Params: {
                encode(message: _145.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Params;
                fromJSON(object: any): _145.Params;
                toJSON(message: _145.Params): unknown;
                fromPartial(object: {
                    mintDenom?: string;
                    startTime?: Date;
                    initialAnnualProvisions?: string;
                    reductionFactor?: string;
                    blocksPerYear?: any;
                }): _145.Params;
            };
            GenesisState: {
                encode(message: _144.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GenesisState;
                fromJSON(object: any): _144.GenesisState;
                toJSON(message: _144.GenesisState): unknown;
                fromPartial(object: {
                    minter?: {
                        annualProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        startTime?: Date;
                        initialAnnualProvisions?: string;
                        reductionFactor?: string;
                        blocksPerYear?: any;
                    };
                }): _144.GenesisState;
            };
        };
    }
    const ClientFactory: {
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
            stargaze: {
                mint: {
                    v1beta1: _215.QueryClientImpl;
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
            stargaze: {
                mint: {
                    v1beta1: _214.LCDQueryClient;
                };
            };
        }>;
    };
}

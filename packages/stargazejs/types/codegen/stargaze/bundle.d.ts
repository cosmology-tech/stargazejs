import * as _113 from "./mint/v1beta1/genesis";
import * as _114 from "./mint/v1beta1/mint";
import * as _115 from "./mint/v1beta1/query";
import * as _168 from "./mint/v1beta1/query.lcd";
import * as _169 from "./mint/v1beta1/query.rpc.query";
export declare namespace stargaze {
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _169.QueryClientImpl;
            LCDQueryClient: typeof _168.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _115.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryParamsRequest;
                fromJSON(_: any): _115.QueryParamsRequest;
                toJSON(_: _115.QueryParamsRequest): unknown;
                fromPartial(_: {}): _115.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _115.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryParamsResponse;
                fromJSON(object: any): _115.QueryParamsResponse;
                toJSON(message: _115.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        startTime?: Date;
                        initialAnnualProvisions?: string;
                        reductionFactor?: string;
                        blocksPerYear?: any;
                    };
                }): _115.QueryParamsResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _115.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _115.QueryAnnualProvisionsRequest;
                toJSON(_: _115.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: {}): _115.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _115.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _115.QueryAnnualProvisionsResponse;
                toJSON(message: _115.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _115.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _114.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Minter;
                fromJSON(object: any): _114.Minter;
                toJSON(message: _114.Minter): unknown;
                fromPartial(object: {
                    annualProvisions?: string;
                }): _114.Minter;
            };
            Params: {
                encode(message: _114.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Params;
                fromJSON(object: any): _114.Params;
                toJSON(message: _114.Params): unknown;
                fromPartial(object: {
                    mintDenom?: string;
                    startTime?: Date;
                    initialAnnualProvisions?: string;
                    reductionFactor?: string;
                    blocksPerYear?: any;
                }): _114.Params;
            };
            GenesisState: {
                encode(message: _113.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.GenesisState;
                fromJSON(object: any): _113.GenesisState;
                toJSON(message: _113.GenesisState): unknown;
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
                }): _113.GenesisState;
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
                    v1beta1: _169.QueryClientImpl;
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
                    v1beta1: _168.LCDQueryClient;
                };
            };
        }>;
    };
}

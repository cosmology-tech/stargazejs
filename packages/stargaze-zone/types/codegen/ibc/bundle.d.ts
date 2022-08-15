import * as _111 from "./applications/transfer/v1/genesis";
import * as _112 from "./applications/transfer/v1/query";
import * as _113 from "./applications/transfer/v1/transfer";
import * as _114 from "./applications/transfer/v1/tx";
import * as _115 from "./applications/transfer/v2/packet";
import * as _116 from "./core/channel/v1/channel";
import * as _117 from "./core/channel/v1/genesis";
import * as _118 from "./core/channel/v1/query";
import * as _119 from "./core/channel/v1/tx";
import * as _124 from "./core/commitment/v1/commitment";
import * as _131 from "./lightclients/localhost/v1/localhost";
import * as _132 from "./lightclients/solomachine/v1/solomachine";
import * as _133 from "./lightclients/solomachine/v2/solomachine";
import * as _134 from "./lightclients/tendermint/v1/tendermint";
import * as _198 from "./applications/transfer/v1/query.lcd";
import * as _199 from "./core/channel/v1/query.lcd";
import * as _200 from "./applications/transfer/v1/query.rpc.query";
import * as _201 from "./core/channel/v1/query.rpc.query";
import * as _202 from "./applications/transfer/v1/tx.rpc.msg";
import * as _203 from "./core/channel/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _202.MsgClientImpl;
                QueryClientImpl: typeof _200.QueryClientImpl;
                LCDQueryClient: typeof _198.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("cosmwasm").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _114.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _114.MsgTransfer): {
                            typeUrl: string;
                            value: _114.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _114.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _114.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _114.MsgTransfer): {
                            typeUrl: string;
                            value: _114.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _114.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("@osmonauts/helpers").AminoHeight;
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("@osmonauts/helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _114.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _114.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgTransfer;
                    fromJSON(object: any): _114.MsgTransfer;
                    toJSON(message: _114.MsgTransfer): unknown;
                    fromPartial(object: {
                        sourcePort?: string;
                        sourceChannel?: string;
                        token?: any;
                        sender?: string;
                        receiver?: string;
                        timeoutHeight?: any;
                        timeoutTimestamp?: any;
                    }): _114.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _114.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgTransferResponse;
                    fromJSON(_: any): _114.MsgTransferResponse;
                    toJSON(_: _114.MsgTransferResponse): unknown;
                    fromPartial(_: {}): _114.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _113.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.DenomTrace;
                    fromJSON(object: any): _113.DenomTrace;
                    toJSON(message: _113.DenomTrace): unknown;
                    fromPartial(object: {
                        path?: string;
                        baseDenom?: string;
                    }): _113.DenomTrace;
                };
                Params: {
                    encode(message: _113.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Params;
                    fromJSON(object: any): _113.Params;
                    toJSON(message: _113.Params): unknown;
                    fromPartial(object: {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    }): _113.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _112.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryDenomTraceRequest;
                    fromJSON(object: any): _112.QueryDenomTraceRequest;
                    toJSON(message: _112.QueryDenomTraceRequest): unknown;
                    fromPartial(object: {
                        hash?: string;
                    }): _112.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _112.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryDenomTraceResponse;
                    fromJSON(object: any): _112.QueryDenomTraceResponse;
                    toJSON(message: _112.QueryDenomTraceResponse): unknown;
                    fromPartial(object: {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        };
                    }): _112.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _112.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryDenomTracesRequest;
                    fromJSON(object: any): _112.QueryDenomTracesRequest;
                    toJSON(message: _112.QueryDenomTracesRequest): unknown;
                    fromPartial(object: {
                        pagination?: any;
                    }): _112.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _112.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryDenomTracesResponse;
                    fromJSON(object: any): _112.QueryDenomTracesResponse;
                    toJSON(message: _112.QueryDenomTracesResponse): unknown;
                    fromPartial(object: {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        pagination?: any;
                    }): _112.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _112.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryParamsRequest;
                    fromJSON(_: any): _112.QueryParamsRequest;
                    toJSON(_: _112.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _112.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _112.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryParamsResponse;
                    fromJSON(object: any): _112.QueryParamsResponse;
                    toJSON(message: _112.QueryParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _112.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _111.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.GenesisState;
                    fromJSON(object: any): _111.GenesisState;
                    toJSON(message: _111.GenesisState): unknown;
                    fromPartial(object: {
                        portId?: string;
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _111.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _115.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.FungibleTokenPacketData;
                    fromJSON(object: any): _115.FungibleTokenPacketData;
                    toJSON(message: _115.FungibleTokenPacketData): unknown;
                    fromPartial(object: {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    }): _115.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _203.MsgClientImpl;
                QueryClientImpl: typeof _201.QueryClientImpl;
                LCDQueryClient: typeof _199.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("cosmwasm").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _119.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _119.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _119.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _119.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _119.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _119.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _119.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _119.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _119.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _119.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _119.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _119.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _119.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _119.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _119.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _119.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _119.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _119.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _119.MsgRecvPacket): {
                            typeUrl: string;
                            value: _119.MsgRecvPacket;
                        };
                        timeout(value: _119.MsgTimeout): {
                            typeUrl: string;
                            value: _119.MsgTimeout;
                        };
                        timeoutOnClose(value: _119.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _119.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _119.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _119.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _119.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _119.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _119.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _119.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _119.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _119.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _119.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _119.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _119.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _119.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _119.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _119.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _119.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _119.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _119.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _119.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _119.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _119.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _119.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _119.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _119.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _119.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _119.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _119.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _119.MsgRecvPacket): {
                            typeUrl: string;
                            value: _119.MsgRecvPacket;
                        };
                        timeout(value: _119.MsgTimeout): {
                            typeUrl: string;
                            value: _119.MsgTimeout;
                        };
                        timeoutOnClose(value: _119.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _119.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _119.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _119.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _119.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _119.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _119.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _119.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _119.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _119.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _119.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _119.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _119.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _119.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _119.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _119.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _119.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _119.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _119.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _119.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _119.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _119.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _119.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _119.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _119.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelOpenInit;
                    fromJSON(object: any): _119.MsgChannelOpenInit;
                    toJSON(message: _119.MsgChannelOpenInit): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channel?: {
                            state?: _116.State;
                            ordering?: _116.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    }): _119.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _119.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _119.MsgChannelOpenInitResponse;
                    toJSON(_: _119.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: {}): _119.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _119.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelOpenTry;
                    fromJSON(object: any): _119.MsgChannelOpenTry;
                    toJSON(message: _119.MsgChannelOpenTry): unknown;
                    fromPartial(object: {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _116.State;
                            ordering?: _116.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: any;
                        signer?: string;
                    }): _119.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _119.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _119.MsgChannelOpenTryResponse;
                    toJSON(_: _119.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: {}): _119.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _119.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelOpenAck;
                    fromJSON(object: any): _119.MsgChannelOpenAck;
                    toJSON(message: _119.MsgChannelOpenAck): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: any;
                        signer?: string;
                    }): _119.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _119.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _119.MsgChannelOpenAckResponse;
                    toJSON(_: _119.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: {}): _119.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _119.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelOpenConfirm;
                    fromJSON(object: any): _119.MsgChannelOpenConfirm;
                    toJSON(message: _119.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: any;
                        signer?: string;
                    }): _119.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _119.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _119.MsgChannelOpenConfirmResponse;
                    toJSON(_: _119.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _119.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _119.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelCloseInit;
                    fromJSON(object: any): _119.MsgChannelCloseInit;
                    toJSON(message: _119.MsgChannelCloseInit): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    }): _119.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _119.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _119.MsgChannelCloseInitResponse;
                    toJSON(_: _119.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: {}): _119.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _119.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelCloseConfirm;
                    fromJSON(object: any): _119.MsgChannelCloseConfirm;
                    toJSON(message: _119.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: any;
                        signer?: string;
                    }): _119.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _119.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _119.MsgChannelCloseConfirmResponse;
                    toJSON(_: _119.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: {}): _119.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _119.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgRecvPacket;
                    fromJSON(object: any): _119.MsgRecvPacket;
                    toJSON(message: _119.MsgRecvPacket): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: any;
                            timeoutTimestamp?: any;
                        };
                        proofCommitment?: Uint8Array;
                        proofHeight?: any;
                        signer?: string;
                    }): _119.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _119.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgRecvPacketResponse;
                    fromJSON(_: any): _119.MsgRecvPacketResponse;
                    toJSON(_: _119.MsgRecvPacketResponse): unknown;
                    fromPartial(_: {}): _119.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _119.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgTimeout;
                    fromJSON(object: any): _119.MsgTimeout;
                    toJSON(message: _119.MsgTimeout): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: any;
                            timeoutTimestamp?: any;
                        };
                        proofUnreceived?: Uint8Array;
                        proofHeight?: any;
                        nextSequenceRecv?: any;
                        signer?: string;
                    }): _119.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _119.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgTimeoutResponse;
                    fromJSON(_: any): _119.MsgTimeoutResponse;
                    toJSON(_: _119.MsgTimeoutResponse): unknown;
                    fromPartial(_: {}): _119.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _119.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgTimeoutOnClose;
                    fromJSON(object: any): _119.MsgTimeoutOnClose;
                    toJSON(message: _119.MsgTimeoutOnClose): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: any;
                            timeoutTimestamp?: any;
                        };
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: any;
                        nextSequenceRecv?: any;
                        signer?: string;
                    }): _119.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _119.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _119.MsgTimeoutOnCloseResponse;
                    toJSON(_: _119.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: {}): _119.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _119.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgAcknowledgement;
                    fromJSON(object: any): _119.MsgAcknowledgement;
                    toJSON(message: _119.MsgAcknowledgement): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: any;
                            timeoutTimestamp?: any;
                        };
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: any;
                        signer?: string;
                    }): _119.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _119.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgAcknowledgementResponse;
                    fromJSON(_: any): _119.MsgAcknowledgementResponse;
                    toJSON(_: _119.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: {}): _119.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _118.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryChannelRequest;
                    fromJSON(object: any): _118.QueryChannelRequest;
                    toJSON(message: _118.QueryChannelRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _118.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _118.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryChannelResponse;
                    fromJSON(object: any): _118.QueryChannelResponse;
                    toJSON(message: _118.QueryChannelResponse): unknown;
                    fromPartial(object: {
                        channel?: {
                            state?: _116.State;
                            ordering?: _116.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proofHeight?: any;
                    }): _118.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _118.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryChannelsRequest;
                    fromJSON(object: any): _118.QueryChannelsRequest;
                    toJSON(message: _118.QueryChannelsRequest): unknown;
                    fromPartial(object: {
                        pagination?: any;
                    }): _118.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _118.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryChannelsResponse;
                    fromJSON(object: any): _118.QueryChannelsResponse;
                    toJSON(message: _118.QueryChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _116.State;
                            ordering?: _116.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: any;
                        height?: any;
                    }): _118.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _118.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _118.QueryConnectionChannelsRequest;
                    toJSON(message: _118.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: {
                        connection?: string;
                        pagination?: any;
                    }): _118.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _118.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _118.QueryConnectionChannelsResponse;
                    toJSON(message: _118.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _116.State;
                            ordering?: _116.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: any;
                        height?: any;
                    }): _118.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _118.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryChannelClientStateRequest;
                    fromJSON(object: any): _118.QueryChannelClientStateRequest;
                    toJSON(message: _118.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _118.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _118.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryChannelClientStateResponse;
                    fromJSON(object: any): _118.QueryChannelClientStateResponse;
                    toJSON(message: _118.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: {
                        identifiedClientState?: any;
                        proof?: Uint8Array;
                        proofHeight?: any;
                    }): _118.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _118.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _118.QueryChannelConsensusStateRequest;
                    toJSON(message: _118.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    }): _118.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _118.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _118.QueryChannelConsensusStateResponse;
                    toJSON(message: _118.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: any;
                    }): _118.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _118.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _118.QueryPacketCommitmentRequest;
                    toJSON(message: _118.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _118.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _118.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _118.QueryPacketCommitmentResponse;
                    toJSON(message: _118.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: any;
                    }): _118.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _118.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _118.QueryPacketCommitmentsRequest;
                    toJSON(message: _118.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: any;
                    }): _118.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _118.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _118.QueryPacketCommitmentsResponse;
                    toJSON(message: _118.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: any;
                        height?: any;
                    }): _118.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _118.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryPacketReceiptRequest;
                    fromJSON(object: any): _118.QueryPacketReceiptRequest;
                    toJSON(message: _118.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _118.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _118.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryPacketReceiptResponse;
                    fromJSON(object: any): _118.QueryPacketReceiptResponse;
                    toJSON(message: _118.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: any;
                    }): _118.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _118.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _118.QueryPacketAcknowledgementRequest;
                    toJSON(message: _118.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _118.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _118.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _118.QueryPacketAcknowledgementResponse;
                    toJSON(message: _118.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: any;
                    }): _118.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _118.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _118.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _118.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: any;
                        packetCommitmentSequences?: any[];
                    }): _118.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _118.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _118.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _118.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: any;
                        height?: any;
                    }): _118.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _118.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _118.QueryUnreceivedPacketsRequest;
                    toJSON(message: _118.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: any[];
                    }): _118.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _118.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _118.QueryUnreceivedPacketsResponse;
                    toJSON(message: _118.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: {
                        sequences?: any[];
                        height?: any;
                    }): _118.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _118.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _118.QueryUnreceivedAcksRequest;
                    toJSON(message: _118.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: any[];
                    }): _118.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _118.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _118.QueryUnreceivedAcksResponse;
                    toJSON(message: _118.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: {
                        sequences?: any[];
                        height?: any;
                    }): _118.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _118.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _118.QueryNextSequenceReceiveRequest;
                    toJSON(message: _118.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _118.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _118.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _118.QueryNextSequenceReceiveResponse;
                    toJSON(message: _118.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: {
                        nextSequenceReceive?: any;
                        proof?: Uint8Array;
                        proofHeight?: any;
                    }): _118.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _117.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.GenesisState;
                    fromJSON(object: any): _117.GenesisState;
                    toJSON(message: _117.GenesisState): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _116.State;
                            ordering?: _116.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        nextChannelSequence?: any;
                    }): _117.GenesisState;
                };
                PacketSequence: {
                    encode(message: _117.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.PacketSequence;
                    fromJSON(object: any): _117.PacketSequence;
                    toJSON(message: _117.PacketSequence): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _117.PacketSequence;
                };
                stateFromJSON(object: any): _116.State;
                stateToJSON(object: _116.State): string;
                orderFromJSON(object: any): _116.Order;
                orderToJSON(object: _116.Order): string;
                State: typeof _116.State;
                Order: typeof _116.Order;
                Channel: {
                    encode(message: _116.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Channel;
                    fromJSON(object: any): _116.Channel;
                    toJSON(message: _116.Channel): unknown;
                    fromPartial(object: {
                        state?: _116.State;
                        ordering?: _116.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                    }): _116.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _116.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.IdentifiedChannel;
                    fromJSON(object: any): _116.IdentifiedChannel;
                    toJSON(message: _116.IdentifiedChannel): unknown;
                    fromPartial(object: {
                        state?: _116.State;
                        ordering?: _116.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    }): _116.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _116.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Counterparty;
                    fromJSON(object: any): _116.Counterparty;
                    toJSON(message: _116.Counterparty): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _116.Counterparty;
                };
                Packet: {
                    encode(message: _116.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Packet;
                    fromJSON(object: any): _116.Packet;
                    toJSON(message: _116.Packet): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: any;
                        timeoutTimestamp?: any;
                    }): _116.Packet;
                };
                PacketState: {
                    encode(message: _116.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.PacketState;
                    fromJSON(object: any): _116.PacketState;
                    toJSON(message: _116.PacketState): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                        data?: Uint8Array;
                    }): _116.PacketState;
                };
                Acknowledgement: {
                    encode(message: _116.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Acknowledgement;
                    fromJSON(object: any): _116.Acknowledgement;
                    toJSON(message: _116.Acknowledgement): unknown;
                    fromPartial(object: {
                        result?: Uint8Array;
                        error?: string;
                    }): _116.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: any;
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _124.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MerkleRoot;
                    fromJSON(object: any): _124.MerkleRoot;
                    toJSON(message: _124.MerkleRoot): unknown;
                    fromPartial(object: {
                        hash?: Uint8Array;
                    }): _124.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _124.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MerklePrefix;
                    fromJSON(object: any): _124.MerklePrefix;
                    toJSON(message: _124.MerklePrefix): unknown;
                    fromPartial(object: {
                        keyPrefix?: Uint8Array;
                    }): _124.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _124.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MerklePath;
                    fromJSON(object: any): _124.MerklePath;
                    toJSON(message: _124.MerklePath): unknown;
                    fromPartial(object: {
                        keyPath?: string[];
                    }): _124.MerklePath;
                };
                MerkleProof: {
                    encode(message: _124.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MerkleProof;
                    fromJSON(object: any): _124.MerkleProof;
                    toJSON(message: _124.MerkleProof): unknown;
                    fromPartial(object: {
                        proofs?: any[];
                    }): _124.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: any;
        }
        namespace port {
            const v1: any;
        }
        namespace types {
            const v1: any;
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _131.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ClientState;
                    fromJSON(object: any): _131.ClientState;
                    toJSON(message: _131.ClientState): unknown;
                    fromPartial(object: {
                        chainId?: string;
                        height?: any;
                    }): _131.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _132.DataType;
                dataTypeToJSON(object: _132.DataType): string;
                DataType: typeof _132.DataType;
                ClientState: {
                    encode(message: _132.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ClientState;
                    fromJSON(object: any): _132.ClientState;
                    toJSON(message: _132.ClientState): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        frozenSequence?: any;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _132.ClientState;
                };
                ConsensusState: {
                    encode(message: _132.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ConsensusState;
                    fromJSON(object: any): _132.ConsensusState;
                    toJSON(message: _132.ConsensusState): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    }): _132.ConsensusState;
                };
                Header: {
                    encode(message: _132.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Header;
                    fromJSON(object: any): _132.Header;
                    toJSON(message: _132.Header): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _132.Header;
                };
                Misbehaviour: {
                    encode(message: _132.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Misbehaviour;
                    fromJSON(object: any): _132.Misbehaviour;
                    toJSON(message: _132.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _132.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _132.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    }): _132.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _132.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.SignatureAndData;
                    fromJSON(object: any): _132.SignatureAndData;
                    toJSON(message: _132.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _132.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    }): _132.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _132.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.TimestampedSignatureData;
                    fromJSON(object: any): _132.TimestampedSignatureData;
                    toJSON(message: _132.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    }): _132.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _132.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.SignBytes;
                    fromJSON(object: any): _132.SignBytes;
                    toJSON(message: _132.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _132.DataType;
                        data?: Uint8Array;
                    }): _132.SignBytes;
                };
                HeaderData: {
                    encode(message: _132.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.HeaderData;
                    fromJSON(object: any): _132.HeaderData;
                    toJSON(message: _132.HeaderData): unknown;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _132.HeaderData;
                };
                ClientStateData: {
                    encode(message: _132.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ClientStateData;
                    fromJSON(object: any): _132.ClientStateData;
                    toJSON(message: _132.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _132.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _132.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ConsensusStateData;
                    fromJSON(object: any): _132.ConsensusStateData;
                    toJSON(message: _132.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _132.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _132.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ConnectionStateData;
                    fromJSON(object: any): _132.ConnectionStateData;
                    toJSON(message: _132.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: any;
                    }): _132.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _132.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ChannelStateData;
                    fromJSON(object: any): _132.ChannelStateData;
                    toJSON(message: _132.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _116.State;
                            ordering?: _116.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _132.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _132.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PacketCommitmentData;
                    fromJSON(object: any): _132.PacketCommitmentData;
                    toJSON(message: _132.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _132.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _132.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PacketAcknowledgementData;
                    fromJSON(object: any): _132.PacketAcknowledgementData;
                    toJSON(message: _132.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _132.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _132.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PacketReceiptAbsenceData;
                    fromJSON(object: any): _132.PacketReceiptAbsenceData;
                    toJSON(message: _132.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _132.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _132.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.NextSequenceRecvData;
                    fromJSON(object: any): _132.NextSequenceRecvData;
                    toJSON(message: _132.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    }): _132.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _133.DataType;
                dataTypeToJSON(object: _133.DataType): string;
                DataType: typeof _133.DataType;
                ClientState: {
                    encode(message: _133.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ClientState;
                    fromJSON(object: any): _133.ClientState;
                    toJSON(message: _133.ClientState): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _133.ClientState;
                };
                ConsensusState: {
                    encode(message: _133.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ConsensusState;
                    fromJSON(object: any): _133.ConsensusState;
                    toJSON(message: _133.ConsensusState): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    }): _133.ConsensusState;
                };
                Header: {
                    encode(message: _133.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Header;
                    fromJSON(object: any): _133.Header;
                    toJSON(message: _133.Header): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _133.Header;
                };
                Misbehaviour: {
                    encode(message: _133.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Misbehaviour;
                    fromJSON(object: any): _133.Misbehaviour;
                    toJSON(message: _133.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _133.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _133.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    }): _133.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _133.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.SignatureAndData;
                    fromJSON(object: any): _133.SignatureAndData;
                    toJSON(message: _133.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _133.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    }): _133.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _133.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.TimestampedSignatureData;
                    fromJSON(object: any): _133.TimestampedSignatureData;
                    toJSON(message: _133.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    }): _133.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _133.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.SignBytes;
                    fromJSON(object: any): _133.SignBytes;
                    toJSON(message: _133.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _133.DataType;
                        data?: Uint8Array;
                    }): _133.SignBytes;
                };
                HeaderData: {
                    encode(message: _133.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.HeaderData;
                    fromJSON(object: any): _133.HeaderData;
                    toJSON(message: _133.HeaderData): unknown;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _133.HeaderData;
                };
                ClientStateData: {
                    encode(message: _133.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ClientStateData;
                    fromJSON(object: any): _133.ClientStateData;
                    toJSON(message: _133.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _133.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _133.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ConsensusStateData;
                    fromJSON(object: any): _133.ConsensusStateData;
                    toJSON(message: _133.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _133.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _133.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ConnectionStateData;
                    fromJSON(object: any): _133.ConnectionStateData;
                    toJSON(message: _133.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: any;
                    }): _133.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _133.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ChannelStateData;
                    fromJSON(object: any): _133.ChannelStateData;
                    toJSON(message: _133.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _116.State;
                            ordering?: _116.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _133.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _133.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.PacketCommitmentData;
                    fromJSON(object: any): _133.PacketCommitmentData;
                    toJSON(message: _133.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _133.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _133.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.PacketAcknowledgementData;
                    fromJSON(object: any): _133.PacketAcknowledgementData;
                    toJSON(message: _133.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _133.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _133.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.PacketReceiptAbsenceData;
                    fromJSON(object: any): _133.PacketReceiptAbsenceData;
                    toJSON(message: _133.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _133.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _133.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.NextSequenceRecvData;
                    fromJSON(object: any): _133.NextSequenceRecvData;
                    toJSON(message: _133.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    }): _133.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _134.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ClientState;
                    fromJSON(object: any): _134.ClientState;
                    toJSON(message: _134.ClientState): unknown;
                    fromPartial(object: {
                        chainId?: string;
                        trustLevel?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        trustingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        unbondingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxClockDrift?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        frozenHeight?: any;
                        latestHeight?: any;
                        proofSpecs?: any[];
                        upgradePath?: string[];
                        allowUpdateAfterExpiry?: boolean;
                        allowUpdateAfterMisbehaviour?: boolean;
                    }): _134.ClientState;
                };
                ConsensusState: {
                    encode(message: _134.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ConsensusState;
                    fromJSON(object: any): _134.ConsensusState;
                    toJSON(message: _134.ConsensusState): unknown;
                    fromPartial(object: {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        nextValidatorsHash?: Uint8Array;
                    }): _134.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _134.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Misbehaviour;
                    fromJSON(object: any): _134.Misbehaviour;
                    toJSON(message: _134.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        header_1?: {
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
                            trustedHeight?: any;
                            trustedValidators?: {
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
                        header_2?: {
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
                            trustedHeight?: any;
                            trustedValidators?: {
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
                    }): _134.Misbehaviour;
                };
                Header: {
                    encode(message: _134.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Header;
                    fromJSON(object: any): _134.Header;
                    toJSON(message: _134.Header): unknown;
                    fromPartial(object: {
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
                        trustedHeight?: any;
                        trustedValidators?: {
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
                    }): _134.Header;
                };
                Fraction: {
                    encode(message: _134.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Fraction;
                    fromJSON(object: any): _134.Fraction;
                    toJSON(message: _134.Fraction): unknown;
                    fromPartial(object: {
                        numerator?: any;
                        denominator?: any;
                    }): _134.Fraction;
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _202.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _203.MsgClientImpl;
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _200.QueryClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _201.QueryClientImpl;
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _198.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _199.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}

import { Rpc } from "@osmonauts/helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
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
                v1beta1: import("../stargaze/alloc/v1beta1/tx.rpc.msg").MsgClientImpl;
            };
            claim: {
                v1beta1: import("../stargaze/claim/v1beta1/tx.rpc.msg").MsgClientImpl;
            };
        };
    };
}>;

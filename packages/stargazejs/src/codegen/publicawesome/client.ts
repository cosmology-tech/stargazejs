import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as stargazeAllocV1beta1TxRegistry from "../stargaze/alloc/v1beta1/tx.registry";
import * as stargazeClaimV1beta1TxRegistry from "../stargaze/claim/v1beta1/tx.registry";
import * as stargazeAllocV1beta1TxAmino from "../stargaze/alloc/v1beta1/tx.amino";
import * as stargazeClaimV1beta1TxAmino from "../stargaze/claim/v1beta1/tx.amino";
export const getSigningPublicawesomeClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ...stargazeAllocV1beta1TxRegistry.registry, ...stargazeClaimV1beta1TxRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...stargazeAllocV1beta1TxAmino.AminoConverter,
    ...stargazeClaimV1beta1TxAmino.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};
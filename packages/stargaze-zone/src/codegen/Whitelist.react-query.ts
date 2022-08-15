/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.10.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Timestamp, Uint64, Uint128, ConfigResponse, Coin, Addr, Config, ExecuteMsg, AddMembersMsg, RemoveMembersMsg, HasEndedResponse, HasMemberResponse, HasStartedResponse, InstantiateMsg, IsActiveResponse, MembersResponse, QueryMsg } from "./Whitelist.types";
import { WhitelistQueryClient, WhitelistClient } from "./Whitelist.client";
export interface WhitelistReactQuery<TResponse> {
  client: WhitelistQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TResponse, (string | undefined)[]>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface WhitelistConfigQuery extends WhitelistReactQuery<ConfigResponse> {}
export function useWhitelistConfigQuery({
  client,
  options
}: WhitelistConfigQuery) {
  return useQuery<ConfigResponse, Error, ConfigResponse, (string | undefined)[]>(["whitelistConfig", client?.contractAddress], () => client ? client.config() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface WhitelistHasMemberQuery extends WhitelistReactQuery<HasMemberResponse> {
  args: {
    member: string;
  };
}
export function useWhitelistHasMemberQuery({
  client,
  args,
  options
}: WhitelistHasMemberQuery) {
  return useQuery<HasMemberResponse, Error, HasMemberResponse, (string | undefined)[]>(["whitelistHasMember", client?.contractAddress, JSON.stringify(args)], () => client ? client.hasMember({
    member: args.member
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface WhitelistMembersQuery extends WhitelistReactQuery<MembersResponse> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useWhitelistMembersQuery({
  client,
  args,
  options
}: WhitelistMembersQuery) {
  return useQuery<MembersResponse, Error, MembersResponse, (string | undefined)[]>(["whitelistMembers", client?.contractAddress, JSON.stringify(args)], () => client ? client.members({
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface WhitelistIsActiveQuery extends WhitelistReactQuery<IsActiveResponse> {}
export function useWhitelistIsActiveQuery({
  client,
  options
}: WhitelistIsActiveQuery) {
  return useQuery<IsActiveResponse, Error, IsActiveResponse, (string | undefined)[]>(["whitelistIsActive", client?.contractAddress], () => client ? client.isActive() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface WhitelistHasEndedQuery extends WhitelistReactQuery<HasEndedResponse> {}
export function useWhitelistHasEndedQuery({
  client,
  options
}: WhitelistHasEndedQuery) {
  return useQuery<HasEndedResponse, Error, HasEndedResponse, (string | undefined)[]>(["whitelistHasEnded", client?.contractAddress], () => client ? client.hasEnded() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface WhitelistHasStartedQuery extends WhitelistReactQuery<HasStartedResponse> {}
export function useWhitelistHasStartedQuery({
  client,
  options
}: WhitelistHasStartedQuery) {
  return useQuery<HasStartedResponse, Error, HasStartedResponse, (string | undefined)[]>(["whitelistHasStarted", client?.contractAddress], () => client ? client.hasStarted() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface WhitelistIncreaseMemberLimitMutation {
  client: WhitelistClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useWhitelistIncreaseMemberLimitMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, WhitelistIncreaseMemberLimitMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, WhitelistIncreaseMemberLimitMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.increaseMemberLimit(fee, memo, funds), options);
}
export interface WhitelistUpdatePerAddressLimitMutation {
  client: WhitelistClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useWhitelistUpdatePerAddressLimitMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, WhitelistUpdatePerAddressLimitMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, WhitelistUpdatePerAddressLimitMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updatePerAddressLimit(fee, memo, funds), options);
}
export interface WhitelistRemoveMembersMutation {
  client: WhitelistClient;
  msg: RemoveMembersMsg;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useWhitelistRemoveMembersMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, WhitelistRemoveMembersMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, WhitelistRemoveMembersMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.removeMembers(msg, fee, memo, funds), options);
}
export interface WhitelistAddMembersMutation {
  client: WhitelistClient;
  msg: AddMembersMsg;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useWhitelistAddMembersMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, WhitelistAddMembersMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, WhitelistAddMembersMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.addMembers(msg, fee, memo, funds), options);
}
export interface WhitelistUpdateEndTimeMutation {
  client: WhitelistClient;
  msg: Timestamp;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useWhitelistUpdateEndTimeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, WhitelistUpdateEndTimeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, WhitelistUpdateEndTimeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateEndTime(msg, fee, memo, funds), options);
}
export interface WhitelistUpdateStartTimeMutation {
  client: WhitelistClient;
  msg: Timestamp;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useWhitelistUpdateStartTimeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, WhitelistUpdateStartTimeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, WhitelistUpdateStartTimeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateStartTime(msg, fee, memo, funds), options);
}
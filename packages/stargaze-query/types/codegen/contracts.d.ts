/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import * as _0 from "./SG721Base.types";
import * as _1 from "./SG721Base.client";
import * as _3 from "./SG721Base.react-query";
import * as _4 from "./SG721Base.provider";
import * as _5 from "./SG721MetadataOnchain.types";
import * as _6 from "./SG721MetadataOnchain.client";
import * as _8 from "./SG721MetadataOnchain.react-query";
import * as _9 from "./SG721MetadataOnchain.provider";
import * as _14 from "./Sg721Updatable.types";
import * as _15 from "./Sg721Updatable.client";
import * as _16 from "./Sg721Updatable.message-composer";
import * as _17 from "./Sg721Updatable.react-query";
import * as _18 from "./Sg721Updatable.provider";
import * as _20 from "./BaseFactory.client";
import * as _21 from "./BaseFactory.message-composer";
import * as _23 from "./BaseFactory.provider";
import * as _29 from "./BaseMinter.client";
import * as _30 from "./BaseMinter.message-composer";
import * as _32 from "./BaseMinter.provider";
import * as _33 from "./VendingMinter.types";
import * as _34 from "./VendingMinter.client";
import * as _35 from "./VendingMinter.message-composer";
import * as _36 from "./VendingMinter.react-query";
import * as _37 from "./VendingMinter.provider";
import * as _38 from "./VendingMinterWlFlex.types";
import * as _39 from "./VendingMinterWlFlex.client";
import * as _40 from "./VendingMinterWlFlex.message-composer";
import * as _41 from "./VendingMinterWlFlex.react-query";
import * as _42 from "./VendingMinterWlFlex.provider";
import * as _44 from "./SgEthAirdrop.client";
import * as _45 from "./SgEthAirdrop.message-composer";
import * as _46 from "./SgEthAirdrop.react-query";
import * as _47 from "./SgEthAirdrop.provider";
import * as _48 from "./Splits.types";
import * as _49 from "./Splits.client";
import * as _50 from "./Splits.message-composer";
import * as _51 from "./Splits.react-query";
import * as _52 from "./Splits.provider";
import * as _53 from "./Whitelist.types";
import * as _54 from "./Whitelist.client";
import * as _55 from "./Whitelist.message-composer";
import * as _56 from "./Whitelist.react-query";
import * as _57 from "./Whitelist.provider";
import * as _58 from "./WhitelistFlex.types";
import * as _59 from "./WhitelistFlex.client";
import * as _60 from "./WhitelistFlex.message-composer";
import * as _61 from "./WhitelistFlex.react-query";
import * as _62 from "./WhitelistFlex.provider";
import * as _63 from "./WhitelistImmutable.types";
import * as _64 from "./WhitelistImmutable.client";
import * as _66 from "./WhitelistImmutable.react-query";
import * as _67 from "./WhitelistImmutable.provider";
import * as _68 from "./Marketplace.types";
import * as _69 from "./Marketplace.client";
import * as _70 from "./Marketplace.message-composer";
import * as _71 from "./Marketplace.react-query";
import * as _72 from "./Marketplace.provider";
import * as _73 from "./ReserveAuction.types";
import * as _74 from "./ReserveAuction.client";
import * as _75 from "./ReserveAuction.message-composer";
import * as _76 from "./ReserveAuction.react-query";
import * as _77 from "./ReserveAuction.provider";
import * as _78 from "./contractContextProviders";
import * as _79 from "./contractContextBase";
import * as _80 from "./contracts-context";
export declare namespace contracts {
    const SG721Base: {
        SG721Base: typeof _4.SG721Base;
        useSG721BaseCollectionInfoQuery<TData = _0.CollectionInfoResponse>({ client, options }: _3.SG721BaseCollectionInfoQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
        useSG721BaseMinterQuery<TData_1 = _0.MinterResponse>({ client, options }: _3.SG721BaseMinterQuery<TData_1>): import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
        useSG721BaseAllTokensQuery<TData_2 = _0.AllTokensResponse>({ client, args, options }: _3.SG721BaseAllTokensQuery<TData_2>): import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
        useSG721BaseTokensQuery<TData_3 = _0.TokensResponse>({ client, args, options }: _3.SG721BaseTokensQuery<TData_3>): import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
        useSG721BaseAllNftInfoQuery<TData_4 = _0.AllNftInfoResponse>({ client, args, options }: _3.SG721BaseAllNftInfoQuery<TData_4>): import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
        useSG721BaseNftInfoQuery<TData_5 = _0.NftInfoResponse>({ client, args, options }: _3.SG721BaseNftInfoQuery<TData_5>): import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
        useSG721BaseContractInfoQuery<TData_6 = _0.ContractInfoResponse>({ client, options }: _3.SG721BaseContractInfoQuery<TData_6>): import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
        useSG721BaseNumTokensQuery<TData_7 = _0.NumTokensResponse>({ client, options }: _3.SG721BaseNumTokensQuery<TData_7>): import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
        useSG721BaseAllOperatorsQuery<TData_8 = _0.AllOperatorsResponse>({ client, args, options }: _3.SG721BaseAllOperatorsQuery<TData_8>): import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
        useSG721BaseApprovalsQuery<TData_9 = _0.ApprovalsResponse>({ client, args, options }: _3.SG721BaseApprovalsQuery<TData_9>): import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
        useSG721BaseApprovalQuery<TData_10 = _0.ApprovalResponse>({ client, args, options }: _3.SG721BaseApprovalQuery<TData_10>): import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
        useSG721BaseOwnerOfQuery<TData_11 = _0.OwnerOfResponse>({ client, args, options }: _3.SG721BaseOwnerOfQuery<TData_11>): import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
        SG721BaseQueryClient: typeof _1.SG721BaseQueryClient;
    };
    const SG721MetadataOnchain: {
        SG721MetadataOnchain: typeof _9.SG721MetadataOnchain;
        useSG721MetadataOnchainCollectionInfoQuery<TData = _5.CollectionInfoResponse>({ client, options }: _8.SG721MetadataOnchainCollectionInfoQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
        useSG721MetadataOnchainMinterQuery<TData_1 = _5.MinterResponse>({ client, options }: _8.SG721MetadataOnchainMinterQuery<TData_1>): import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
        useSG721MetadataOnchainAllTokensQuery<TData_2 = _5.AllTokensResponse>({ client, args, options }: _8.SG721MetadataOnchainAllTokensQuery<TData_2>): import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
        useSG721MetadataOnchainTokensQuery<TData_3 = _5.TokensResponse>({ client, args, options }: _8.SG721MetadataOnchainTokensQuery<TData_3>): import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
        useSG721MetadataOnchainAllNftInfoQuery<TData_4 = _5.AllNftInfoResponse>({ client, args, options }: _8.SG721MetadataOnchainAllNftInfoQuery<TData_4>): import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
        useSG721MetadataOnchainNftInfoQuery<TData_5 = _5.NftInfoResponse>({ client, args, options }: _8.SG721MetadataOnchainNftInfoQuery<TData_5>): import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
        useSG721MetadataOnchainContractInfoQuery<TData_6 = _5.ContractInfoResponse>({ client, options }: _8.SG721MetadataOnchainContractInfoQuery<TData_6>): import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
        useSG721MetadataOnchainNumTokensQuery<TData_7 = _5.NumTokensResponse>({ client, options }: _8.SG721MetadataOnchainNumTokensQuery<TData_7>): import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
        useSG721MetadataOnchainAllOperatorsQuery<TData_8 = _5.AllOperatorsResponse>({ client, args, options }: _8.SG721MetadataOnchainAllOperatorsQuery<TData_8>): import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
        useSG721MetadataOnchainApprovalsQuery<TData_9 = _5.ApprovalsResponse>({ client, args, options }: _8.SG721MetadataOnchainApprovalsQuery<TData_9>): import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
        useSG721MetadataOnchainApprovalQuery<TData_10 = _5.ApprovalResponse>({ client, args, options }: _8.SG721MetadataOnchainApprovalQuery<TData_10>): import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
        useSG721MetadataOnchainOwnerOfQuery<TData_11 = _5.OwnerOfResponse>({ client, args, options }: _8.SG721MetadataOnchainOwnerOfQuery<TData_11>): import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
        SG721MetadataOnchainQueryClient: typeof _6.SG721MetadataOnchainQueryClient;
    };
    const Sg721Nt: {};
    const Sg721Updatable: {
        Sg721Updatable: typeof _18.Sg721Updatable;
        useSg721UpdatableCollectionInfoQuery<TData = _14.CollectionInfoResponse>({ client, options }: _17.Sg721UpdatableCollectionInfoQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
        useSg721UpdatableMinterQuery<TData_1 = _14.MinterResponse>({ client, options }: _17.Sg721UpdatableMinterQuery<TData_1>): import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
        useSg721UpdatableAllTokensQuery<TData_2 = _14.AllTokensResponse>({ client, args, options }: _17.Sg721UpdatableAllTokensQuery<TData_2>): import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
        useSg721UpdatableTokensQuery<TData_3 = _14.TokensResponse>({ client, args, options }: _17.Sg721UpdatableTokensQuery<TData_3>): import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
        useSg721UpdatableAllNftInfoQuery<TData_4 = _14.AllNftInfoResponse>({ client, args, options }: _17.Sg721UpdatableAllNftInfoQuery<TData_4>): import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
        useSg721UpdatableNftInfoQuery<TData_5 = _14.NftInfoResponse>({ client, args, options }: _17.Sg721UpdatableNftInfoQuery<TData_5>): import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
        useSg721UpdatableContractInfoQuery<TData_6 = _14.ContractInfoResponse>({ client, options }: _17.Sg721UpdatableContractInfoQuery<TData_6>): import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
        useSg721UpdatableNumTokensQuery<TData_7 = _14.NumTokensResponse>({ client, options }: _17.Sg721UpdatableNumTokensQuery<TData_7>): import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
        useSg721UpdatableAllOperatorsQuery<TData_8 = _14.AllOperatorsResponse>({ client, args, options }: _17.Sg721UpdatableAllOperatorsQuery<TData_8>): import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
        useSg721UpdatableApprovalsQuery<TData_9 = _14.ApprovalsResponse>({ client, args, options }: _17.Sg721UpdatableApprovalsQuery<TData_9>): import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
        useSg721UpdatableApprovalQuery<TData_10 = _14.ApprovalResponse>({ client, args, options }: _17.Sg721UpdatableApprovalQuery<TData_10>): import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
        useSg721UpdatableOwnerOfQuery<TData_11 = _14.OwnerOfResponse>({ client, args, options }: _17.Sg721UpdatableOwnerOfQuery<TData_11>): import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
        Sg721UpdatableMessageComposer: typeof _16.Sg721UpdatableMessageComposer;
        Sg721UpdatableQueryClient: typeof _15.Sg721UpdatableQueryClient;
        Sg721UpdatableClient: typeof _15.Sg721UpdatableClient;
    };
    const BaseFactory: {
        BaseFactory: typeof _23.BaseFactory;
        BaseFactoryMessageComposer: typeof _21.BaseFactoryMessageComposer;
        BaseFactoryClient: typeof _20.BaseFactoryClient;
    };
    const VendingFactory: {};
    const BaseMinter: {
        BaseMinter: typeof _32.BaseMinter;
        BaseMinterMessageComposer: typeof _30.BaseMinterMessageComposer;
        BaseMinterClient: typeof _29.BaseMinterClient;
    };
    const VendingMinter: {
        VendingMinter: typeof _37.VendingMinter;
        useVendingMinterStatusQuery<TData = _33.StatusResponse>({ client, options }: _36.VendingMinterStatusQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
        useVendingMinterMintCountQuery<TData_1 = _33.MintCountResponse>({ client, args, options }: _36.VendingMinterMintCountQuery<TData_1>): import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
        useVendingMinterMintPriceQuery<TData_2 = _33.MintPriceResponse>({ client, options }: _36.VendingMinterMintPriceQuery<TData_2>): import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
        useVendingMinterStartTimeQuery<TData_3 = _33.StartTimeResponse>({ client, options }: _36.VendingMinterStartTimeQuery<TData_3>): import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
        useVendingMinterMintableNumTokensQuery<TData_4 = _33.MintableNumTokensResponse>({ client, options }: _36.VendingMinterMintableNumTokensQuery<TData_4>): import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
        useVendingMinterConfigQuery<TData_5 = _33.ConfigResponse>({ client, options }: _36.VendingMinterConfigQuery<TData_5>): import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
        VendingMinterMessageComposer: typeof _35.VendingMinterMessageComposer;
        VendingMinterQueryClient: typeof _34.VendingMinterQueryClient;
        VendingMinterClient: typeof _34.VendingMinterClient;
    };
    const VendingMinterWlFlex: {
        VendingMinterWlFlex: typeof _42.VendingMinterWlFlex;
        useVendingMinterWlFlexStatusQuery<TData = _38.StatusResponse>({ client, options }: _41.VendingMinterWlFlexStatusQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
        useVendingMinterWlFlexMintCountQuery<TData_1 = _38.MintCountResponse>({ client, args, options }: _41.VendingMinterWlFlexMintCountQuery<TData_1>): import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
        useVendingMinterWlFlexMintPriceQuery<TData_2 = _38.MintPriceResponse>({ client, options }: _41.VendingMinterWlFlexMintPriceQuery<TData_2>): import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
        useVendingMinterWlFlexStartTimeQuery<TData_3 = _38.StartTimeResponse>({ client, options }: _41.VendingMinterWlFlexStartTimeQuery<TData_3>): import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
        useVendingMinterWlFlexMintableNumTokensQuery<TData_4 = _38.MintableNumTokensResponse>({ client, options }: _41.VendingMinterWlFlexMintableNumTokensQuery<TData_4>): import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
        useVendingMinterWlFlexConfigQuery<TData_5 = _38.ConfigResponse>({ client, options }: _41.VendingMinterWlFlexConfigQuery<TData_5>): import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
        VendingMinterWlFlexMessageComposer: typeof _40.VendingMinterWlFlexMessageComposer;
        VendingMinterWlFlexQueryClient: typeof _39.VendingMinterWlFlexQueryClient;
        VendingMinterWlFlexClient: typeof _39.VendingMinterWlFlexClient;
    };
    const SgEthAirdrop: {
        SgEthAirdrop: typeof _47.SgEthAirdrop;
        useSgEthAirdropGetMinterQuery<TData = string>({ client, options }: _46.SgEthAirdropGetMinterQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
        useSgEthAirdropAirdropEligibleQuery<TData_1 = boolean>({ client, args, options }: _46.SgEthAirdropAirdropEligibleQuery<TData_1>): import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
        SgEthAirdropMessageComposer: typeof _45.SgEthAirdropMessageComposer;
        SgEthAirdropQueryClient: typeof _44.SgEthAirdropQueryClient;
        SgEthAirdropClient: typeof _44.SgEthAirdropClient;
    };
    const Splits: {
        Splits: typeof _52.Splits;
        useSplitsListMembersQuery<TData = _48.MemberListResponse>({ client, args, options }: _51.SplitsListMembersQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
        useSplitsMemberQuery<TData_1 = _48.MemberResponse>({ client, args, options }: _51.SplitsMemberQuery<TData_1>): import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
        useSplitsGroupQuery<TData_2 = string>({ client, options }: _51.SplitsGroupQuery<TData_2>): import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
        useSplitsAdminQuery<TData_3 = _48.AdminResponse>({ client, options }: _51.SplitsAdminQuery<TData_3>): import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
        SplitsMessageComposer: typeof _50.SplitsMessageComposer;
        SplitsQueryClient: typeof _49.SplitsQueryClient;
        SplitsClient: typeof _49.SplitsClient;
    };
    const Whitelist: {
        Whitelist: typeof _57.Whitelist;
        useWhitelistCanExecuteQuery<TData = _53.CanExecuteResponse>({ client, args, options }: _56.WhitelistCanExecuteQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
        useWhitelistAdminListQuery<TData_1 = _53.AdminListResponse>({ client, options }: _56.WhitelistAdminListQuery<TData_1>): import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
        useWhitelistConfigQuery<TData_2 = _53.ConfigResponse>({ client, options }: _56.WhitelistConfigQuery<TData_2>): import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
        useWhitelistHasMemberQuery<TData_3 = _53.HasMemberResponse>({ client, args, options }: _56.WhitelistHasMemberQuery<TData_3>): import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
        useWhitelistMembersQuery<TData_4 = _53.MembersResponse>({ client, args, options }: _56.WhitelistMembersQuery<TData_4>): import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
        useWhitelistIsActiveQuery<TData_5 = _53.IsActiveResponse>({ client, options }: _56.WhitelistIsActiveQuery<TData_5>): import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
        useWhitelistHasEndedQuery<TData_6 = _53.HasEndedResponse>({ client, options }: _56.WhitelistHasEndedQuery<TData_6>): import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
        useWhitelistHasStartedQuery<TData_7 = _53.HasStartedResponse>({ client, options }: _56.WhitelistHasStartedQuery<TData_7>): import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
        WhitelistMessageComposer: typeof _55.WhitelistMessageComposer;
        WhitelistQueryClient: typeof _54.WhitelistQueryClient;
        WhitelistClient: typeof _54.WhitelistClient;
    };
    const WhitelistFlex: {
        WhitelistFlex: typeof _62.WhitelistFlex;
        useWhitelistFlexCanExecuteQuery<TData = _58.CanExecuteResponse>({ client, args, options }: _61.WhitelistFlexCanExecuteQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
        useWhitelistFlexAdminListQuery<TData_1 = _58.AdminListResponse>({ client, options }: _61.WhitelistFlexAdminListQuery<TData_1>): import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
        useWhitelistFlexConfigQuery<TData_2 = _58.ConfigResponse>({ client, options }: _61.WhitelistFlexConfigQuery<TData_2>): import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
        useWhitelistFlexMemberQuery<TData_3 = _58.MemberResponse>({ client, args, options }: _61.WhitelistFlexMemberQuery<TData_3>): import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
        useWhitelistFlexHasMemberQuery<TData_4 = _58.HasMemberResponse>({ client, args, options }: _61.WhitelistFlexHasMemberQuery<TData_4>): import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
        useWhitelistFlexMembersQuery<TData_5 = _58.MembersResponse>({ client, args, options }: _61.WhitelistFlexMembersQuery<TData_5>): import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
        useWhitelistFlexIsActiveQuery<TData_6 = _58.IsActiveResponse>({ client, options }: _61.WhitelistFlexIsActiveQuery<TData_6>): import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
        useWhitelistFlexHasEndedQuery<TData_7 = _58.HasEndedResponse>({ client, options }: _61.WhitelistFlexHasEndedQuery<TData_7>): import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
        useWhitelistFlexHasStartedQuery<TData_8 = _58.HasStartedResponse>({ client, options }: _61.WhitelistFlexHasStartedQuery<TData_8>): import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
        WhitelistFlexMessageComposer: typeof _60.WhitelistFlexMessageComposer;
        WhitelistFlexQueryClient: typeof _59.WhitelistFlexQueryClient;
        WhitelistFlexClient: typeof _59.WhitelistFlexClient;
    };
    const WhitelistImmutable: {
        WhitelistImmutable: typeof _67.WhitelistImmutable;
        useWhitelistImmutablePerAddressLimitQuery<TData = _63.PerAddressLimitResponse>({ client, options }: _66.WhitelistImmutablePerAddressLimitQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
        useWhitelistImmutableAddressCountQuery<TData_1 = number>({ client, options }: _66.WhitelistImmutableAddressCountQuery<TData_1>): import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
        useWhitelistImmutableAdminQuery<TData_2 = number>({ client, options }: _66.WhitelistImmutableAdminQuery<TData_2>): import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
        useWhitelistImmutableIncludesAddressQuery<TData_3 = boolean>({ client, args, options }: _66.WhitelistImmutableIncludesAddressQuery<TData_3>): import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
        useWhitelistImmutableConfigQuery<TData_4 = _63.ConfigResponse>({ client, options }: _66.WhitelistImmutableConfigQuery<TData_4>): import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
        WhitelistImmutableQueryClient: typeof _64.WhitelistImmutableQueryClient;
    };
    const Marketplace: {
        Marketplace: typeof _72.Marketplace;
        useMarketplaceParamsQuery<TData = _68.ParamsResponse>({ client, options }: _71.MarketplaceParamsQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
        useMarketplaceSaleHooksQuery<TData_1 = _68.HooksResponse>({ client, options }: _71.MarketplaceSaleHooksQuery<TData_1>): import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
        useMarketplaceBidHooksQuery<TData_2 = _68.HooksResponse>({ client, options }: _71.MarketplaceBidHooksQuery<TData_2>): import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
        useMarketplaceAskHooksQuery<TData_3 = _68.HooksResponse>({ client, options }: _71.MarketplaceAskHooksQuery<TData_3>): import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
        useMarketplaceReverseCollectionBidsSortedByPriceQuery<TData_4 = _68.CollectionBidResponse>({ client, args, options }: _71.MarketplaceReverseCollectionBidsSortedByPriceQuery<TData_4>): import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
        useMarketplaceCollectionBidsSortedByPriceQuery<TData_5 = _68.CollectionBidResponse>({ client, args, options }: _71.MarketplaceCollectionBidsSortedByPriceQuery<TData_5>): import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
        useMarketplaceCollectionBidsByBidderSortedByExpirationQuery<TData_6 = _68.CollectionBidResponse>({ client, args, options }: _71.MarketplaceCollectionBidsByBidderSortedByExpirationQuery<TData_6>): import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
        useMarketplaceCollectionBidsByBidderQuery<TData_7 = _68.CollectionBidResponse>({ client, args, options }: _71.MarketplaceCollectionBidsByBidderQuery<TData_7>): import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
        useMarketplaceCollectionBidQuery<TData_8 = _68.CollectionBidResponse>({ client, args, options }: _71.MarketplaceCollectionBidQuery<TData_8>): import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
        useMarketplaceReverseBidsSortedByPriceQuery<TData_9 = _68.BidsResponse>({ client, args, options }: _71.MarketplaceReverseBidsSortedByPriceQuery<TData_9>): import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
        useMarketplaceBidsSortedByPriceQuery<TData_10 = _68.BidsResponse>({ client, args, options }: _71.MarketplaceBidsSortedByPriceQuery<TData_10>): import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
        useMarketplaceBidsQuery<TData_11 = _68.BidsResponse>({ client, args, options }: _71.MarketplaceBidsQuery<TData_11>): import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
        useMarketplaceBidsByBidderSortedByExpirationQuery<TData_12 = _68.BidsResponse>({ client, args, options }: _71.MarketplaceBidsByBidderSortedByExpirationQuery<TData_12>): import("@tanstack/react-query").UseQueryResult<TData_12, Error>;
        useMarketplaceBidsByBidderQuery<TData_13 = _68.BidsResponse>({ client, args, options }: _71.MarketplaceBidsByBidderQuery<TData_13>): import("@tanstack/react-query").UseQueryResult<TData_13, Error>;
        useMarketplaceBidQuery<TData_14 = _68.BidResponse>({ client, args, options }: _71.MarketplaceBidQuery<TData_14>): import("@tanstack/react-query").UseQueryResult<TData_14, Error>;
        useMarketplaceAsksBySellerQuery<TData_15 = _68.AsksResponse>({ client, args, options }: _71.MarketplaceAsksBySellerQuery<TData_15>): import("@tanstack/react-query").UseQueryResult<TData_15, Error>;
        useMarketplaceAskCountQuery<TData_16 = _68.AskCountResponse>({ client, args, options }: _71.MarketplaceAskCountQuery<TData_16>): import("@tanstack/react-query").UseQueryResult<TData_16, Error>;
        useMarketplaceReverseAsksSortedByPriceQuery<TData_17 = _68.AsksResponse>({ client, args, options }: _71.MarketplaceReverseAsksSortedByPriceQuery<TData_17>): import("@tanstack/react-query").UseQueryResult<TData_17, Error>;
        useMarketplaceAsksSortedByPriceQuery<TData_18 = _68.AsksResponse>({ client, args, options }: _71.MarketplaceAsksSortedByPriceQuery<TData_18>): import("@tanstack/react-query").UseQueryResult<TData_18, Error>;
        useMarketplaceReverseAsksQuery<TData_19 = _68.AsksResponse>({ client, args, options }: _71.MarketplaceReverseAsksQuery<TData_19>): import("@tanstack/react-query").UseQueryResult<TData_19, Error>;
        useMarketplaceAsksQuery<TData_20 = _68.AsksResponse>({ client, args, options }: _71.MarketplaceAsksQuery<TData_20>): import("@tanstack/react-query").UseQueryResult<TData_20, Error>;
        useMarketplaceAskQuery<TData_21 = _68.AsksResponse>({ client, args, options }: _71.MarketplaceAskQuery<TData_21>): import("@tanstack/react-query").UseQueryResult<TData_21, Error>;
        useMarketplaceCollectionsQuery<TData_22 = _68.CollectionsResponse>({ client, args, options }: _71.MarketplaceCollectionsQuery<TData_22>): import("@tanstack/react-query").UseQueryResult<TData_22, Error>;
        MarketplaceMessageComposer: typeof _70.MarketplaceMessageComposer;
        MarketplaceQueryClient: typeof _69.MarketplaceQueryClient;
        MarketplaceClient: typeof _69.MarketplaceClient;
    };
    const ReserveAuction: {
        ReserveAuction: typeof _77.ReserveAuction;
        useReserveAuctionAuctionsByEndTimeQuery<TData = _73.AuctionsResponse>({ client, args, options }: _76.ReserveAuctionAuctionsByEndTimeQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
        useReserveAuctionAuctionsBySellerQuery<TData_1 = _73.AuctionsResponse>({ client, args, options }: _76.ReserveAuctionAuctionsBySellerQuery<TData_1>): import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
        useReserveAuctionAuctionQuery<TData_2 = _73.AuctionResponse>({ client, args, options }: _76.ReserveAuctionAuctionQuery<TData_2>): import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
        useReserveAuctionConfigQuery<TData_3 = _73.ConfigResponse>({ client, options }: _76.ReserveAuctionConfigQuery<TData_3>): import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
        ReserveAuctionMessageComposer: typeof _75.ReserveAuctionMessageComposer;
        ReserveAuctionQueryClient: typeof _74.ReserveAuctionQueryClient;
        ReserveAuctionClient: typeof _74.ReserveAuctionClient;
    };
    const contractContextProviders: {
        getProviders: (address?: string, cosmWasmClient?: import("@cosmjs/cosmwasm-stargate").CosmWasmClient, signingCosmWasmClient?: import("@cosmjs/cosmwasm-stargate").SigningCosmWasmClient) => {
            sG721Base: _4.SG721Base;
            sG721MetadataOnchain: _9.SG721MetadataOnchain;
            sg721Updatable: _18.Sg721Updatable;
            baseFactory: _23.BaseFactory;
            baseMinter: _32.BaseMinter;
            vendingMinter: _37.VendingMinter;
            vendingMinterWlFlex: _42.VendingMinterWlFlex;
            sgEthAirdrop: _47.SgEthAirdrop;
            splits: _52.Splits;
            whitelist: _57.Whitelist;
            whitelistFlex: _62.WhitelistFlex;
            whitelistImmutable: _67.WhitelistImmutable;
            marketplace: _72.Marketplace;
            reserveAuction: _77.ReserveAuction;
        };
    };
    const contractContextBase: {
        NO_SINGING_ERROR_MESSAGE: "signingCosmWasmClient not connected";
        NO_COSMWASW_CLIENT_ERROR_MESSAGE: "cosmWasmClient not connected";
        NO_ADDRESS_ERROR_MESSAGE: "address doesn't exist";
        NO_SIGNING_CLIENT_ERROR_MESSAGE: "Signing client is not generated. Please check ts-codegen config";
        NO_QUERY_CLIENT_ERROR_MESSAGE: "Query client is not generated. Please check ts-codegen config";
        NO_MESSAGE_COMPOSER_ERROR_MESSAGE: "Message composer client is not generated. Please check ts-codegen config";
        ContractBase: typeof _79.ContractBase;
    };
    const contractsContext: {
        ContractsProvider: ({ children, contractsConfig, }: {
            children: React.ReactNode;
            contractsConfig: _80.ContractsConfig;
        }) => any;
        useContracts: () => _78.IContractsContext;
    };
}
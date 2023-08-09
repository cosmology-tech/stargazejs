/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { UseQueryOptions } from "react-query";
import { AskOffset, CollectionOffset, BidOffset, CollectionBidOffset, AsksResponse, AskCountResponse, HooksResponse, BidResponse, BidsResponse, CollectionBidResponse, CollectionsResponse, ParamsResponse } from "./Marketplace.types";
import { MarketplaceQueryClient } from "./Marketplace.client";
export interface MarketplaceReactQuery<TResponse, TData = TResponse> {
    client: MarketplaceQueryClient;
    options?: UseQueryOptions<TResponse, Error, TData>;
}
export interface MarketplaceParamsQuery<TData> extends MarketplaceReactQuery<ParamsResponse, TData> {
}
export declare function useMarketplaceParamsQuery<TData = ParamsResponse>({ client, options }: MarketplaceParamsQuery<TData>): any;
export interface MarketplaceSaleHooksQuery<TData> extends MarketplaceReactQuery<HooksResponse, TData> {
}
export declare function useMarketplaceSaleHooksQuery<TData = HooksResponse>({ client, options }: MarketplaceSaleHooksQuery<TData>): any;
export interface MarketplaceBidHooksQuery<TData> extends MarketplaceReactQuery<HooksResponse, TData> {
}
export declare function useMarketplaceBidHooksQuery<TData = HooksResponse>({ client, options }: MarketplaceBidHooksQuery<TData>): any;
export interface MarketplaceAskHooksQuery<TData> extends MarketplaceReactQuery<HooksResponse, TData> {
}
export declare function useMarketplaceAskHooksQuery<TData = HooksResponse>({ client, options }: MarketplaceAskHooksQuery<TData>): any;
export interface MarketplaceReverseCollectionBidsSortedByPriceQuery<TData> extends MarketplaceReactQuery<CollectionBidResponse, TData> {
    args: {
        collection: string;
        limit?: number;
        startBefore?: CollectionBidOffset;
    };
}
export declare function useMarketplaceReverseCollectionBidsSortedByPriceQuery<TData = CollectionBidResponse>({ client, args, options }: MarketplaceReverseCollectionBidsSortedByPriceQuery<TData>): any;
export interface MarketplaceCollectionBidsSortedByPriceQuery<TData> extends MarketplaceReactQuery<CollectionBidResponse, TData> {
    args: {
        collection: string;
        limit?: number;
        startAfter?: CollectionBidOffset;
    };
}
export declare function useMarketplaceCollectionBidsSortedByPriceQuery<TData = CollectionBidResponse>({ client, args, options }: MarketplaceCollectionBidsSortedByPriceQuery<TData>): any;
export interface MarketplaceCollectionBidsByBidderSortedByExpirationQuery<TData> extends MarketplaceReactQuery<CollectionBidResponse, TData> {
    args: {
        bidder: string;
        limit?: number;
        startAfter?: CollectionBidOffset;
    };
}
export declare function useMarketplaceCollectionBidsByBidderSortedByExpirationQuery<TData = CollectionBidResponse>({ client, args, options }: MarketplaceCollectionBidsByBidderSortedByExpirationQuery<TData>): any;
export interface MarketplaceCollectionBidsByBidderQuery<TData> extends MarketplaceReactQuery<CollectionBidResponse, TData> {
    args: {
        bidder: string;
        limit?: number;
        startAfter?: CollectionOffset;
    };
}
export declare function useMarketplaceCollectionBidsByBidderQuery<TData = CollectionBidResponse>({ client, args, options }: MarketplaceCollectionBidsByBidderQuery<TData>): any;
export interface MarketplaceCollectionBidQuery<TData> extends MarketplaceReactQuery<CollectionBidResponse, TData> {
    args: {
        bidder: string;
        collection: string;
    };
}
export declare function useMarketplaceCollectionBidQuery<TData = CollectionBidResponse>({ client, args, options }: MarketplaceCollectionBidQuery<TData>): any;
export interface MarketplaceReverseBidsSortedByPriceQuery<TData> extends MarketplaceReactQuery<BidsResponse, TData> {
    args: {
        collection: string;
        limit?: number;
        startBefore?: BidOffset;
    };
}
export declare function useMarketplaceReverseBidsSortedByPriceQuery<TData = BidsResponse>({ client, args, options }: MarketplaceReverseBidsSortedByPriceQuery<TData>): any;
export interface MarketplaceBidsSortedByPriceQuery<TData> extends MarketplaceReactQuery<BidsResponse, TData> {
    args: {
        collection: string;
        limit?: number;
        startAfter?: BidOffset;
    };
}
export declare function useMarketplaceBidsSortedByPriceQuery<TData = BidsResponse>({ client, args, options }: MarketplaceBidsSortedByPriceQuery<TData>): any;
export interface MarketplaceBidsQuery<TData> extends MarketplaceReactQuery<BidsResponse, TData> {
    args: {
        collection: string;
        limit?: number;
        startAfter?: string;
        tokenId: number;
    };
}
export declare function useMarketplaceBidsQuery<TData = BidsResponse>({ client, args, options }: MarketplaceBidsQuery<TData>): any;
export interface MarketplaceBidsByBidderSortedByExpirationQuery<TData> extends MarketplaceReactQuery<BidsResponse, TData> {
    args: {
        bidder: string;
        limit?: number;
        startAfter?: CollectionOffset;
    };
}
export declare function useMarketplaceBidsByBidderSortedByExpirationQuery<TData = BidsResponse>({ client, args, options }: MarketplaceBidsByBidderSortedByExpirationQuery<TData>): any;
export interface MarketplaceBidsByBidderQuery<TData> extends MarketplaceReactQuery<BidsResponse, TData> {
    args: {
        bidder: string;
        limit?: number;
        startAfter?: CollectionOffset;
    };
}
export declare function useMarketplaceBidsByBidderQuery<TData = BidsResponse>({ client, args, options }: MarketplaceBidsByBidderQuery<TData>): any;
export interface MarketplaceBidQuery<TData> extends MarketplaceReactQuery<BidResponse, TData> {
    args: {
        bidder: string;
        collection: string;
        tokenId: number;
    };
}
export declare function useMarketplaceBidQuery<TData = BidResponse>({ client, args, options }: MarketplaceBidQuery<TData>): any;
export interface MarketplaceAsksBySellerQuery<TData> extends MarketplaceReactQuery<AsksResponse, TData> {
    args: {
        includeInactive?: boolean;
        limit?: number;
        seller: string;
        startAfter?: CollectionOffset;
    };
}
export declare function useMarketplaceAsksBySellerQuery<TData = AsksResponse>({ client, args, options }: MarketplaceAsksBySellerQuery<TData>): any;
export interface MarketplaceAskCountQuery<TData> extends MarketplaceReactQuery<AskCountResponse, TData> {
    args: {
        collection: string;
    };
}
export declare function useMarketplaceAskCountQuery<TData = AskCountResponse>({ client, args, options }: MarketplaceAskCountQuery<TData>): any;
export interface MarketplaceReverseAsksSortedByPriceQuery<TData> extends MarketplaceReactQuery<AsksResponse, TData> {
    args: {
        collection: string;
        includeInactive?: boolean;
        limit?: number;
        startBefore?: AskOffset;
    };
}
export declare function useMarketplaceReverseAsksSortedByPriceQuery<TData = AsksResponse>({ client, args, options }: MarketplaceReverseAsksSortedByPriceQuery<TData>): any;
export interface MarketplaceAsksSortedByPriceQuery<TData> extends MarketplaceReactQuery<AsksResponse, TData> {
    args: {
        collection: string;
        includeInactive?: boolean;
        limit?: number;
        startAfter?: AskOffset;
    };
}
export declare function useMarketplaceAsksSortedByPriceQuery<TData = AsksResponse>({ client, args, options }: MarketplaceAsksSortedByPriceQuery<TData>): any;
export interface MarketplaceReverseAsksQuery<TData> extends MarketplaceReactQuery<AsksResponse, TData> {
    args: {
        collection: string;
        includeInactive?: boolean;
        limit?: number;
        startBefore?: number;
    };
}
export declare function useMarketplaceReverseAsksQuery<TData = AsksResponse>({ client, args, options }: MarketplaceReverseAsksQuery<TData>): any;
export interface MarketplaceAsksQuery<TData> extends MarketplaceReactQuery<AsksResponse, TData> {
    args: {
        collection: string;
        includeInactive?: boolean;
        limit?: number;
        startAfter?: number;
    };
}
export declare function useMarketplaceAsksQuery<TData = AsksResponse>({ client, args, options }: MarketplaceAsksQuery<TData>): any;
export interface MarketplaceAskQuery<TData> extends MarketplaceReactQuery<AsksResponse, TData> {
    args: {
        collection: string;
        tokenId: number;
    };
}
export declare function useMarketplaceAskQuery<TData = AsksResponse>({ client, args, options }: MarketplaceAskQuery<TData>): any;
export interface MarketplaceCollectionsQuery<TData> extends MarketplaceReactQuery<CollectionsResponse, TData> {
    args: {
        limit?: number;
        startAfter?: string;
    };
}
export declare function useMarketplaceCollectionsQuery<TData = CollectionsResponse>({ client, args, options }: MarketplaceCollectionsQuery<TData>): any;

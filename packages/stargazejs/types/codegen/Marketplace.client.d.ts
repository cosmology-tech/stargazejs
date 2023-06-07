/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Timestamp, SaleType, Coin, AskOffset, CollectionOffset, BidOffset, CollectionBidOffset, AsksResponse, AskCountResponse, HooksResponse, BidResponse, BidsResponse, CollectionBidResponse, CollectionsResponse, ParamsResponse } from "./Marketplace.types";
export interface MarketplaceReadOnlyInterface {
    contractAddress: string;
    collections: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<CollectionsResponse>;
    ask: ({ collection, tokenId }: {
        collection: string;
        tokenId: number;
    }) => Promise<AsksResponse>;
    asks: ({ collection, includeInactive, limit, startAfter }: {
        collection: string;
        includeInactive?: boolean;
        limit?: number;
        startAfter?: number;
    }) => Promise<AsksResponse>;
    reverseAsks: ({ collection, includeInactive, limit, startBefore }: {
        collection: string;
        includeInactive?: boolean;
        limit?: number;
        startBefore?: number;
    }) => Promise<AsksResponse>;
    asksSortedByPrice: ({ collection, includeInactive, limit, startAfter }: {
        collection: string;
        includeInactive?: boolean;
        limit?: number;
        startAfter?: AskOffset;
    }) => Promise<AsksResponse>;
    reverseAsksSortedByPrice: ({ collection, includeInactive, limit, startBefore }: {
        collection: string;
        includeInactive?: boolean;
        limit?: number;
        startBefore?: AskOffset;
    }) => Promise<AsksResponse>;
    askCount: ({ collection }: {
        collection: string;
    }) => Promise<AskCountResponse>;
    asksBySeller: ({ includeInactive, limit, seller, startAfter }: {
        includeInactive?: boolean;
        limit?: number;
        seller: string;
        startAfter?: CollectionOffset;
    }) => Promise<AsksResponse>;
    bid: ({ bidder, collection, tokenId }: {
        bidder: string;
        collection: string;
        tokenId: number;
    }) => Promise<BidResponse>;
    bidsByBidder: ({ bidder, limit, startAfter }: {
        bidder: string;
        limit?: number;
        startAfter?: CollectionOffset;
    }) => Promise<BidsResponse>;
    bidsByBidderSortedByExpiration: ({ bidder, limit, startAfter }: {
        bidder: string;
        limit?: number;
        startAfter?: CollectionOffset;
    }) => Promise<BidsResponse>;
    bids: ({ collection, limit, startAfter, tokenId }: {
        collection: string;
        limit?: number;
        startAfter?: string;
        tokenId: number;
    }) => Promise<BidsResponse>;
    bidsSortedByPrice: ({ collection, limit, startAfter }: {
        collection: string;
        limit?: number;
        startAfter?: BidOffset;
    }) => Promise<BidsResponse>;
    reverseBidsSortedByPrice: ({ collection, limit, startBefore }: {
        collection: string;
        limit?: number;
        startBefore?: BidOffset;
    }) => Promise<BidsResponse>;
    collectionBid: ({ bidder, collection }: {
        bidder: string;
        collection: string;
    }) => Promise<CollectionBidResponse>;
    collectionBidsByBidder: ({ bidder, limit, startAfter }: {
        bidder: string;
        limit?: number;
        startAfter?: CollectionOffset;
    }) => Promise<CollectionBidResponse>;
    collectionBidsByBidderSortedByExpiration: ({ bidder, limit, startAfter }: {
        bidder: string;
        limit?: number;
        startAfter?: CollectionBidOffset;
    }) => Promise<CollectionBidResponse>;
    collectionBidsSortedByPrice: ({ collection, limit, startAfter }: {
        collection: string;
        limit?: number;
        startAfter?: CollectionBidOffset;
    }) => Promise<CollectionBidResponse>;
    reverseCollectionBidsSortedByPrice: ({ collection, limit, startBefore }: {
        collection: string;
        limit?: number;
        startBefore?: CollectionBidOffset;
    }) => Promise<CollectionBidResponse>;
    askHooks: () => Promise<HooksResponse>;
    bidHooks: () => Promise<HooksResponse>;
    saleHooks: () => Promise<HooksResponse>;
    params: () => Promise<ParamsResponse>;
}
export declare class MarketplaceQueryClient implements MarketplaceReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    collections: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<CollectionsResponse>;
    ask: ({ collection, tokenId }: {
        collection: string;
        tokenId: number;
    }) => Promise<AsksResponse>;
    asks: ({ collection, includeInactive, limit, startAfter }: {
        collection: string;
        includeInactive?: boolean;
        limit?: number;
        startAfter?: number;
    }) => Promise<AsksResponse>;
    reverseAsks: ({ collection, includeInactive, limit, startBefore }: {
        collection: string;
        includeInactive?: boolean;
        limit?: number;
        startBefore?: number;
    }) => Promise<AsksResponse>;
    asksSortedByPrice: ({ collection, includeInactive, limit, startAfter }: {
        collection: string;
        includeInactive?: boolean;
        limit?: number;
        startAfter?: AskOffset;
    }) => Promise<AsksResponse>;
    reverseAsksSortedByPrice: ({ collection, includeInactive, limit, startBefore }: {
        collection: string;
        includeInactive?: boolean;
        limit?: number;
        startBefore?: AskOffset;
    }) => Promise<AsksResponse>;
    askCount: ({ collection }: {
        collection: string;
    }) => Promise<AskCountResponse>;
    asksBySeller: ({ includeInactive, limit, seller, startAfter }: {
        includeInactive?: boolean;
        limit?: number;
        seller: string;
        startAfter?: CollectionOffset;
    }) => Promise<AsksResponse>;
    bid: ({ bidder, collection, tokenId }: {
        bidder: string;
        collection: string;
        tokenId: number;
    }) => Promise<BidResponse>;
    bidsByBidder: ({ bidder, limit, startAfter }: {
        bidder: string;
        limit?: number;
        startAfter?: CollectionOffset;
    }) => Promise<BidsResponse>;
    bidsByBidderSortedByExpiration: ({ bidder, limit, startAfter }: {
        bidder: string;
        limit?: number;
        startAfter?: CollectionOffset;
    }) => Promise<BidsResponse>;
    bids: ({ collection, limit, startAfter, tokenId }: {
        collection: string;
        limit?: number;
        startAfter?: string;
        tokenId: number;
    }) => Promise<BidsResponse>;
    bidsSortedByPrice: ({ collection, limit, startAfter }: {
        collection: string;
        limit?: number;
        startAfter?: BidOffset;
    }) => Promise<BidsResponse>;
    reverseBidsSortedByPrice: ({ collection, limit, startBefore }: {
        collection: string;
        limit?: number;
        startBefore?: BidOffset;
    }) => Promise<BidsResponse>;
    collectionBid: ({ bidder, collection }: {
        bidder: string;
        collection: string;
    }) => Promise<CollectionBidResponse>;
    collectionBidsByBidder: ({ bidder, limit, startAfter }: {
        bidder: string;
        limit?: number;
        startAfter?: CollectionOffset;
    }) => Promise<CollectionBidResponse>;
    collectionBidsByBidderSortedByExpiration: ({ bidder, limit, startAfter }: {
        bidder: string;
        limit?: number;
        startAfter?: CollectionBidOffset;
    }) => Promise<CollectionBidResponse>;
    collectionBidsSortedByPrice: ({ collection, limit, startAfter }: {
        collection: string;
        limit?: number;
        startAfter?: CollectionBidOffset;
    }) => Promise<CollectionBidResponse>;
    reverseCollectionBidsSortedByPrice: ({ collection, limit, startBefore }: {
        collection: string;
        limit?: number;
        startBefore?: CollectionBidOffset;
    }) => Promise<CollectionBidResponse>;
    askHooks: () => Promise<HooksResponse>;
    bidHooks: () => Promise<HooksResponse>;
    saleHooks: () => Promise<HooksResponse>;
    params: () => Promise<ParamsResponse>;
}
export interface MarketplaceInterface extends MarketplaceReadOnlyInterface {
    contractAddress: string;
    sender: string;
    setAsk: ({ collection, expires, findersFeeBps, fundsRecipient, price, reserveFor, saleType, tokenId }: {
        collection: string;
        expires: Timestamp;
        findersFeeBps?: number;
        fundsRecipient?: string;
        price: Coin;
        reserveFor?: string;
        saleType: SaleType;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeAsk: ({ collection, tokenId }: {
        collection: string;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateAskPrice: ({ collection, price, tokenId }: {
        collection: string;
        price: Coin;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    setBid: ({ collection, expires, finder, findersFeeBps, saleType, tokenId }: {
        collection: string;
        expires: Timestamp;
        finder?: string;
        findersFeeBps?: number;
        saleType: SaleType;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    buyNow: ({ collection, expires, finder, findersFeeBps, tokenId }: {
        collection: string;
        expires: Timestamp;
        finder?: string;
        findersFeeBps?: number;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeBid: ({ collection, tokenId }: {
        collection: string;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    acceptBid: ({ bidder, collection, finder, tokenId }: {
        bidder: string;
        collection: string;
        finder?: string;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    rejectBid: ({ bidder, collection, tokenId }: {
        bidder: string;
        collection: string;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    setCollectionBid: ({ collection, expires, findersFeeBps }: {
        collection: string;
        expires: Timestamp;
        findersFeeBps?: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeCollectionBid: ({ collection }: {
        collection: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    acceptCollectionBid: ({ bidder, collection, finder, tokenId }: {
        bidder: string;
        collection: string;
        finder?: string;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    syncAsk: ({ collection, tokenId }: {
        collection: string;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeStaleAsk: ({ collection, tokenId }: {
        collection: string;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeStaleBid: ({ bidder, collection, tokenId }: {
        bidder: string;
        collection: string;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeStaleCollectionBid: ({ bidder, collection }: {
        bidder: string;
        collection: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class MarketplaceClient extends MarketplaceQueryClient implements MarketplaceInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    setAsk: ({ collection, expires, findersFeeBps, fundsRecipient, price, reserveFor, saleType, tokenId }: {
        collection: string;
        expires: Timestamp;
        findersFeeBps?: number;
        fundsRecipient?: string;
        price: Coin;
        reserveFor?: string;
        saleType: SaleType;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeAsk: ({ collection, tokenId }: {
        collection: string;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateAskPrice: ({ collection, price, tokenId }: {
        collection: string;
        price: Coin;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    setBid: ({ collection, expires, finder, findersFeeBps, saleType, tokenId }: {
        collection: string;
        expires: Timestamp;
        finder?: string;
        findersFeeBps?: number;
        saleType: SaleType;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    buyNow: ({ collection, expires, finder, findersFeeBps, tokenId }: {
        collection: string;
        expires: Timestamp;
        finder?: string;
        findersFeeBps?: number;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeBid: ({ collection, tokenId }: {
        collection: string;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    acceptBid: ({ bidder, collection, finder, tokenId }: {
        bidder: string;
        collection: string;
        finder?: string;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    rejectBid: ({ bidder, collection, tokenId }: {
        bidder: string;
        collection: string;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    setCollectionBid: ({ collection, expires, findersFeeBps }: {
        collection: string;
        expires: Timestamp;
        findersFeeBps?: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeCollectionBid: ({ collection }: {
        collection: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    acceptCollectionBid: ({ bidder, collection, finder, tokenId }: {
        bidder: string;
        collection: string;
        finder?: string;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    syncAsk: ({ collection, tokenId }: {
        collection: string;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeStaleAsk: ({ collection, tokenId }: {
        collection: string;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeStaleBid: ({ bidder, collection, tokenId }: {
        bidder: string;
        collection: string;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeStaleCollectionBid: ({ bidder, collection }: {
        bidder: string;
        collection: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}

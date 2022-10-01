/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.16.5.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import * as _4 from "./BaseMinter.client";
import * as _5 from "./BaseMinter.message-composer";
import * as _7 from "./SG721Base.client";
import * as _10 from "./SG721MetadataOnchain.client";
import * as _16 from "./Splits.client";
import * as _17 from "./Splits.message-composer";
import * as _22 from "./VendingMinter.client";
import * as _23 from "./VendingMinter.message-composer";
import * as _25 from "./Whitelist.client";
import * as _26 from "./Whitelist.message-composer";
export declare namespace contracts {
    const BaseFactory: {};
    const BaseMinter: {
        BaseMinterMessageComposer: typeof _5.BaseMinterMessageComposer;
        BaseMinterQueryClient: typeof _4.BaseMinterQueryClient;
        BaseMinterClient: typeof _4.BaseMinterClient;
    };
    const SG721Base: {
        SG721BaseQueryClient: typeof _7.SG721BaseQueryClient;
    };
    const SG721MetadataOnchain: {
        SG721MetadataOnchainQueryClient: typeof _10.SG721MetadataOnchainQueryClient;
    };
    const Sg721Nt: {};
    const Splits: {
        SplitsMessageComposer: typeof _17.SplitsMessageComposer;
        SplitsQueryClient: typeof _16.SplitsQueryClient;
        SplitsClient: typeof _16.SplitsClient;
    };
    const VendingFactory: {};
    const VendingMinter: {
        VendingMinterMessageComposer: typeof _23.VendingMinterMessageComposer;
        VendingMinterQueryClient: typeof _22.VendingMinterQueryClient;
        VendingMinterClient: typeof _22.VendingMinterClient;
    };
    const Whitelist: {
        WhitelistMessageComposer: typeof _26.WhitelistMessageComposer;
        WhitelistQueryClient: typeof _25.WhitelistQueryClient;
        WhitelistClient: typeof _25.WhitelistClient;
    };
}

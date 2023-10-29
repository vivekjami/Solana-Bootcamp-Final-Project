"use strict";
// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CslSplTokenTypes = exports.GemMetadataSchema = exports.decodeGemMetadata = void 0;
var web3_js_1 = require("@solana/web3.js");
var decodeGemMetadata = function (decoded) { return ({
    color: decoded["color"],
    rarity: decoded["rarity"],
    shortDescription: decoded["short_description"],
    mint: new web3_js_1.PublicKey(decoded["mint"]),
    assocAccount: decoded["assoc_account"] ? new web3_js_1.PublicKey(decoded["assoc_account"]) : undefined,
}); };
exports.decodeGemMetadata = decodeGemMetadata;
exports.GemMetadataSchema = {
    struct: {
        color: "string",
        rarity: "string",
        short_description: "string",
        mint: { array: { type: "u8", len: 32 } },
        assoc_account: { option: { array: { type: "u8", len: 32 } } },
    }
};
var CslSplTokenTypes;
(function (CslSplTokenTypes) {
    CslSplTokenTypes.decodeMint = function (decoded) { return ({
        mintAuthority: new web3_js_1.PublicKey(decoded["mint_authority"]),
        supply: decoded["supply"],
        decimals: decoded["decimals"],
        isInitialized: decoded["is_initialized"],
        freezeAuthority: new web3_js_1.PublicKey(decoded["freeze_authority"]),
    }); };
    CslSplTokenTypes.MintSchema = {
        struct: {
            mint_authority: { array: { type: "u8", len: 32 } },
            supply: "u64",
            decimals: "u8",
            is_initialized: "bool",
            freeze_authority: { array: { type: "u8", len: 32 } },
        }
    };
    CslSplTokenTypes.decodeAccount = function (decoded) { return ({
        mint: new web3_js_1.PublicKey(decoded["mint"]),
        owner: new web3_js_1.PublicKey(decoded["owner"]),
        amount: decoded["amount"],
        delegate: new web3_js_1.PublicKey(decoded["delegate"]),
        state: decoded["state"],
        isNative: decoded["is_native"],
        delegatedAmount: decoded["delegated_amount"],
        closeAuthority: new web3_js_1.PublicKey(decoded["close_authority"]),
    }); };
    CslSplTokenTypes.AccountSchema = {
        struct: {
            mint: { array: { type: "u8", len: 32 } },
            owner: { array: { type: "u8", len: 32 } },
            amount: "u64",
            delegate: { array: { type: "u8", len: 32 } },
            state: "u8",
            is_native: "u64",
            delegated_amount: "u64",
            close_authority: { array: { type: "u8", len: 32 } },
        }
    };
})(CslSplTokenTypes || (exports.CslSplTokenTypes = CslSplTokenTypes = {}));

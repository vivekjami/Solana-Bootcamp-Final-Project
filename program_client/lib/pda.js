"use strict";
// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CslSplTokenPDAs = exports.deriveGemMetadataPDA = void 0;
var web3_js_1 = require("@solana/web3.js");
var deriveGemMetadataPDA = function (seeds, programId) {
    return web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from("gem"),
        seeds.mint.toBuffer(),
    ], programId);
};
exports.deriveGemMetadataPDA = deriveGemMetadataPDA;
var CslSplTokenPDAs;
(function (CslSplTokenPDAs) {
    CslSplTokenPDAs.deriveAccountPDA = function (seeds) {
        return web3_js_1.PublicKey.findProgramAddressSync([
            seeds.wallet.toBuffer(),
            seeds.tokenProgram.toBuffer(),
            seeds.mint.toBuffer(),
        ], new web3_js_1.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"));
    };
})(CslSplTokenPDAs || (exports.CslSplTokenPDAs = CslSplTokenPDAs = {}));

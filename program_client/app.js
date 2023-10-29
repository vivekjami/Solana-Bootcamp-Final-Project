"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var web3_js_1 = require("@solana/web3.js");
var fs = require("fs/promises");
var path = require("path");
var os = require("os");
var index_1 = require("./index");
var spl_token_1 = require("@solana/spl-token");
function main(feePayer) {
    return __awaiter(this, void 0, void 0, function () {
        var args, connection, progId, mint, johnDoeWallet, janeDoeWallet, rent, gemPub, johnDoeATA, janeDoeATA, mintAccount, gem;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    args = process.argv.slice(2);
                    connection = new web3_js_1.Connection("https://api.devnet.solana.com", {
                        commitment: "confirmed",
                    });
                    progId = new web3_js_1.PublicKey(args[0]);
                    (0, index_1.initializeClient)(progId, connection);
                    mint = web3_js_1.Keypair.generate();
                    console.info("+==== Mint Address  ====+");
                    console.info(mint.publicKey.toBase58());
                    johnDoeWallet = web3_js_1.Keypair.generate();
                    console.info("+==== John Doe Wallet ====+");
                    console.info(johnDoeWallet.publicKey.toBase58());
                    janeDoeWallet = web3_js_1.Keypair.generate();
                    console.info("+==== Jane Doe Wallet ====+");
                    console.info(janeDoeWallet.publicKey.toBase58());
                    return [4 /*yield*/, (0, spl_token_1.getMinimumBalanceForRentExemptAccount)(connection)];
                case 1:
                    rent = _a.sent();
                    return [4 /*yield*/, (0, web3_js_1.sendAndConfirmTransaction)(connection, new web3_js_1.Transaction()
                            .add(web3_js_1.SystemProgram.createAccount({
                            fromPubkey: feePayer.publicKey,
                            newAccountPubkey: johnDoeWallet.publicKey,
                            space: 0,
                            lamports: rent,
                            programId: web3_js_1.SystemProgram.programId,
                        }))
                            .add(web3_js_1.SystemProgram.createAccount({
                            fromPubkey: feePayer.publicKey,
                            newAccountPubkey: janeDoeWallet.publicKey,
                            space: 0,
                            lamports: rent,
                            programId: web3_js_1.SystemProgram.programId,
                        })), [feePayer, johnDoeWallet, janeDoeWallet])];
                case 2:
                    _a.sent();
                    gemPub = (0, index_1.deriveGemMetadataPDA)({
                        mint: mint.publicKey,
                    }, progId)[0];
                    console.info("+==== Gem Metadata Address ====+");
                    console.info(gemPub.toBase58());
                    johnDoeATA = index_1.CslSplTokenPDAs.deriveAccountPDA({
                        wallet: johnDoeWallet.publicKey,
                        mint: mint.publicKey,
                        tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
                    })[0];
                    console.info("+==== John Doe ATA ====+");
                    console.info(johnDoeATA.toBase58());
                    janeDoeATA = index_1.CslSplTokenPDAs.deriveAccountPDA({
                        wallet: janeDoeWallet.publicKey,
                        mint: mint.publicKey,
                        tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
                    })[0];
                    console.info("+==== Jane Doe ATA ====+");
                    console.info(janeDoeATA.toBase58());
                    /**
                     * Mint a new NFT into John's wallet (technically, the Associated Token Account)
                     */
                    console.info("+==== Minting... ====+");
                    return [4 /*yield*/, (0, index_1.mintSendAndConfirm)({
                            wallet: johnDoeWallet.publicKey,
                            assocTokenAccount: johnDoeATA,
                            color: "Purple",
                            rarity: "Rare",
                            shortDescription: "Only possible to collect from the lost temple event",
                            signers: {
                                feePayer: feePayer,
                                funding: feePayer,
                                mint: mint,
                                owner: johnDoeWallet,
                            },
                        })];
                case 3:
                    _a.sent();
                    console.info("+==== Minted ====+");
                    return [4 /*yield*/, (0, spl_token_1.getMint)(connection, mint.publicKey)];
                case 4:
                    mintAccount = _a.sent();
                    console.info("+==== Mint ====+");
                    console.info(mintAccount);
                    return [4 /*yield*/, (0, index_1.getGemMetadata)(gemPub)];
                case 5:
                    gem = _a.sent();
                    console.info("+==== Gem Metadata ====+");
                    console.info(gem);
                    console.assert(gem.assocAccount.toBase58(), johnDoeATA.toBase58());
                    /**
                     * Transfer John Doe's NFT to Jane Doe Wallet (technically, the Associated Token Account)
                     */
                    console.info("+==== Transferring... ====+");
                    return [4 /*yield*/, (0, index_1.transferSendAndConfirm)({
                            wallet: janeDoeWallet.publicKey,
                            assocTokenAccount: janeDoeATA,
                            mint: mint.publicKey,
                            source: johnDoeATA,
                            destination: janeDoeATA,
                            signers: {
                                feePayer: feePayer,
                                funding: feePayer,
                                authority: johnDoeWallet,
                            },
                        })];
                case 6:
                    _a.sent();
                    console.info("+==== Transferred ====+");
                    return [4 /*yield*/, (0, spl_token_1.getMint)(connection, mint.publicKey)];
                case 7:
                    /**
                     * Get the minted token
                     */
                    mintAccount = _a.sent();
                    console.info("+==== Mint ====+");
                    console.info(mintAccount);
                    return [4 /*yield*/, (0, index_1.getGemMetadata)(gemPub)];
                case 8:
                    /**
                     * Get the Gem Metadata
                     */
                    gem = _a.sent();
                    console.info("+==== Gem Metadata ====+");
                    console.info(gem);
                    console.assert(gem.assocAccount.toBase58(), janeDoeATA.toBase58());
                    /**
                     * Burn the NFT
                     */
                    console.info("+==== Burning... ====+");
                    return [4 /*yield*/, (0, index_1.burnSendAndConfirm)({
                            mint: mint.publicKey,
                            wallet: janeDoeWallet.publicKey,
                            signers: {
                                feePayer: feePayer,
                                owner: janeDoeWallet,
                            },
                        })];
                case 9:
                    _a.sent();
                    console.info("+==== Burned ====+");
                    return [4 /*yield*/, (0, spl_token_1.getMint)(connection, mint.publicKey)];
                case 10:
                    /**
                     * Get the minted token
                     */
                    mintAccount = _a.sent();
                    console.info("+==== Mint ====+");
                    console.info(mintAccount);
                    return [4 /*yield*/, (0, index_1.getGemMetadata)(gemPub)];
                case 11:
                    /**
                     * Get the Gem Metadata
                     */
                    gem = _a.sent();
                    console.info("+==== Gem Metadata ====+");
                    console.info(gem);
                    console.assert(typeof gem.assocAccount, "undefined");
                    return [2 /*return*/];
            }
        });
    });
}
fs.readFile(path.join(os.homedir(), ".config/solana/id.json")).then(function (file) {
    return main(web3_js_1.Keypair.fromSecretKey(new Uint8Array(JSON.parse(file.toString()))));
});

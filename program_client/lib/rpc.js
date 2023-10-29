"use strict";
// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.CslSplTokenGetters = exports.getGemMetadata = exports.burnSendAndConfirm = exports.burn = exports.transferSendAndConfirm = exports.transfer = exports.mintSendAndConfirm = exports.mint = exports.NftInstruction = exports.initializeClient = void 0;
var pda = require("./pda");
var T = require("./types");
var web3_js_1 = require("@solana/web3.js");
var borsh_1 = require("borsh");
var _programId;
var _connection;
var initializeClient = function (programId, connection) {
    _programId = programId;
    _connection = connection;
};
exports.initializeClient = initializeClient;
var NftInstruction;
(function (NftInstruction) {
    /**
     * Accounts:
     * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
     * 1. `[writable, signer]` mint: {@link Mint}
     * 2. `[writable]` gem: {@link GemMetadata}
     * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
     * 4. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
     * 5. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
     * 6. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
     * 7. `[]` token_program: {@link PublicKey} SPL Token program
     * 8. `[signer]` owner: {@link PublicKey} The mint's minting authority.
     * 9. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
     * 10. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
     *
     * Data:
     * - color: {@link string}
     * - rarity: {@link string}
     * - short_description: {@link string}
     */
    NftInstruction[NftInstruction["Mint"] = 0] = "Mint";
    /**
     * Accounts:
     * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
     * 1. `[]` mint: {@link Mint}
     * 2. `[writable]` gem: {@link GemMetadata}
     * 3. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
     * 4. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
     * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
     * 6. `[]` system_program: {@link PublicKey} System program
     * 7. `[]` token_program: {@link PublicKey} SPL Token program
     * 8. `[writable]` source: {@link PublicKey} The source account.
     * 9. `[writable]` destination: {@link PublicKey} The destination account.
     * 10. `[signer]` authority: {@link PublicKey} The source account's owner/delegate.
     * 11. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
     * 12. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
     */
    NftInstruction[NftInstruction["Transfer"] = 1] = "Transfer";
    /**
     * Accounts:
     * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
     * 1. `[writable]` mint: {@link Mint}
     * 2. `[writable]` gem: {@link GemMetadata}
     * 3. `[writable]` account: {@link Account} The account to burn from.
     * 4. `[signer]` owner: {@link PublicKey} The account's owner/delegate.
     * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
     * 6. `[]` token_program: {@link PublicKey} SPL Token program
     * 7. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
     */
    NftInstruction[NftInstruction["Burn"] = 2] = "Burn";
})(NftInstruction || (exports.NftInstruction = NftInstruction = {}));
/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` mint: {@link Mint}
 * 2. `[writable]` gem: {@link GemMetadata}
 * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 4. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 5. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 6. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 7. `[]` token_program: {@link PublicKey} SPL Token program
 * 8. `[signer]` owner: {@link PublicKey} The mint's minting authority.
 * 9. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 * 10. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 *
 * Data:
 * - color: {@link string}
 * - rarity: {@link string}
 * - short_description: {@link string}
 */
var mint = function (args) {
    var data = (0, borsh_1.serialize)({
        struct: {
            id: "u8",
            color: "string",
            rarity: "string",
            short_description: "string",
        },
    }, {
        id: NftInstruction.Mint,
        color: args.color,
        rarity: args.rarity,
        short_description: args.shortDescription,
    });
    var gemPubkey = pda.deriveGemMetadataPDA({
        mint: args.mint,
    }, _programId)[0];
    return new web3_js_1.TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            { pubkey: args.feePayer, isSigner: true, isWritable: true },
            { pubkey: args.mint, isSigner: true, isWritable: true },
            { pubkey: gemPubkey, isSigner: false, isWritable: true },
            { pubkey: new web3_js_1.PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false },
            { pubkey: args.funding, isSigner: true, isWritable: true },
            { pubkey: args.assocTokenAccount, isSigner: false, isWritable: true },
            { pubkey: args.wallet, isSigner: false, isWritable: false },
            { pubkey: new web3_js_1.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false },
            { pubkey: args.owner, isSigner: true, isWritable: false },
            { pubkey: new web3_js_1.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false },
            { pubkey: new web3_js_1.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"), isSigner: false, isWritable: false },
        ],
        programId: _programId,
    });
};
exports.mint = mint;
/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` mint: {@link Mint}
 * 2. `[writable]` gem: {@link GemMetadata}
 * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 4. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 5. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 6. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 7. `[]` token_program: {@link PublicKey} SPL Token program
 * 8. `[signer]` owner: {@link PublicKey} The mint's minting authority.
 * 9. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 * 10. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 *
 * Data:
 * - color: {@link string}
 * - rarity: {@link string}
 * - short_description: {@link string}
 */
var mintSendAndConfirm = function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var trx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                trx = new web3_js_1.Transaction();
                trx.add((0, exports.mint)(__assign(__assign({}, args), { feePayer: args.signers.feePayer.publicKey, mint: args.signers.mint.publicKey, funding: args.signers.funding.publicKey, owner: args.signers.owner.publicKey })));
                return [4 /*yield*/, (0, web3_js_1.sendAndConfirmTransaction)(_connection, trx, [args.signers.feePayer, args.signers.mint, args.signers.funding, args.signers.owner,])];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.mintSendAndConfirm = mintSendAndConfirm;
/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` mint: {@link Mint}
 * 2. `[writable]` gem: {@link GemMetadata}
 * 3. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 4. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 6. `[]` system_program: {@link PublicKey} System program
 * 7. `[]` token_program: {@link PublicKey} SPL Token program
 * 8. `[writable]` source: {@link PublicKey} The source account.
 * 9. `[writable]` destination: {@link PublicKey} The destination account.
 * 10. `[signer]` authority: {@link PublicKey} The source account's owner/delegate.
 * 11. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 * 12. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 */
var transfer = function (args) {
    var data = (0, borsh_1.serialize)({
        struct: {
            id: "u8",
        },
    }, {
        id: NftInstruction.Transfer,
    });
    var gemPubkey = pda.deriveGemMetadataPDA({
        mint: args.mint,
    }, _programId)[0];
    return new web3_js_1.TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            { pubkey: args.feePayer, isSigner: true, isWritable: true },
            { pubkey: args.mint, isSigner: false, isWritable: false },
            { pubkey: gemPubkey, isSigner: false, isWritable: true },
            { pubkey: args.funding, isSigner: true, isWritable: true },
            { pubkey: args.assocTokenAccount, isSigner: false, isWritable: true },
            { pubkey: args.wallet, isSigner: false, isWritable: false },
            { pubkey: new web3_js_1.PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false },
            { pubkey: new web3_js_1.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false },
            { pubkey: args.source, isSigner: false, isWritable: true },
            { pubkey: args.destination, isSigner: false, isWritable: true },
            { pubkey: args.authority, isSigner: true, isWritable: false },
            { pubkey: new web3_js_1.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"), isSigner: false, isWritable: false },
            { pubkey: new web3_js_1.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false },
        ],
        programId: _programId,
    });
};
exports.transfer = transfer;
/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` mint: {@link Mint}
 * 2. `[writable]` gem: {@link GemMetadata}
 * 3. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 4. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 6. `[]` system_program: {@link PublicKey} System program
 * 7. `[]` token_program: {@link PublicKey} SPL Token program
 * 8. `[writable]` source: {@link PublicKey} The source account.
 * 9. `[writable]` destination: {@link PublicKey} The destination account.
 * 10. `[signer]` authority: {@link PublicKey} The source account's owner/delegate.
 * 11. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 * 12. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 */
var transferSendAndConfirm = function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var trx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                trx = new web3_js_1.Transaction();
                trx.add((0, exports.transfer)(__assign(__assign({}, args), { feePayer: args.signers.feePayer.publicKey, funding: args.signers.funding.publicKey, authority: args.signers.authority.publicKey })));
                return [4 /*yield*/, (0, web3_js_1.sendAndConfirmTransaction)(_connection, trx, [args.signers.feePayer, args.signers.funding, args.signers.authority,])];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.transferSendAndConfirm = transferSendAndConfirm;
/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` mint: {@link Mint}
 * 2. `[writable]` gem: {@link GemMetadata}
 * 3. `[writable]` account: {@link Account} The account to burn from.
 * 4. `[signer]` owner: {@link PublicKey} The account's owner/delegate.
 * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 6. `[]` token_program: {@link PublicKey} SPL Token program
 * 7. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 */
var burn = function (args) {
    var data = (0, borsh_1.serialize)({
        struct: {
            id: "u8",
        },
    }, {
        id: NftInstruction.Burn,
    });
    var gemPubkey = pda.deriveGemMetadataPDA({
        mint: args.mint,
    }, _programId)[0];
    var accountPubkey = pda.CslSplTokenPDAs.deriveAccountPDA({
        wallet: args.wallet,
        tokenProgram: new web3_js_1.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
        mint: args.mint,
    })[0];
    return new web3_js_1.TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            { pubkey: args.feePayer, isSigner: true, isWritable: true },
            { pubkey: args.mint, isSigner: false, isWritable: true },
            { pubkey: gemPubkey, isSigner: false, isWritable: true },
            { pubkey: accountPubkey, isSigner: false, isWritable: true },
            { pubkey: args.owner, isSigner: true, isWritable: false },
            { pubkey: args.wallet, isSigner: false, isWritable: false },
            { pubkey: new web3_js_1.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false },
            { pubkey: new web3_js_1.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false },
        ],
        programId: _programId,
    });
};
exports.burn = burn;
/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` mint: {@link Mint}
 * 2. `[writable]` gem: {@link GemMetadata}
 * 3. `[writable]` account: {@link Account} The account to burn from.
 * 4. `[signer]` owner: {@link PublicKey} The account's owner/delegate.
 * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 6. `[]` token_program: {@link PublicKey} SPL Token program
 * 7. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 */
var burnSendAndConfirm = function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var trx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                trx = new web3_js_1.Transaction();
                trx.add((0, exports.burn)(__assign(__assign({}, args), { feePayer: args.signers.feePayer.publicKey, owner: args.signers.owner.publicKey })));
                return [4 /*yield*/, (0, web3_js_1.sendAndConfirmTransaction)(_connection, trx, [args.signers.feePayer, args.signers.owner,])];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.burnSendAndConfirm = burnSendAndConfirm;
// Getters
var getGemMetadata = function (publicKey, commitmentOrConfig) {
    if (commitmentOrConfig === void 0) { commitmentOrConfig = "processed"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var buffer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _connection.getAccountInfo(publicKey, commitmentOrConfig)];
                case 1:
                    buffer = _a.sent();
                    if (!buffer) {
                        return [2 /*return*/, undefined];
                    }
                    if (buffer.data.length <= 0) {
                        return [2 /*return*/, undefined];
                    }
                    return [2 /*return*/, T.decodeGemMetadata((0, borsh_1.deserialize)(T.GemMetadataSchema, buffer.data))];
            }
        });
    });
};
exports.getGemMetadata = getGemMetadata;
var CslSplTokenGetters;
(function (CslSplTokenGetters) {
    var _this = this;
    CslSplTokenGetters.getMint = function (publicKey, commitmentOrConfig) {
        if (commitmentOrConfig === void 0) { commitmentOrConfig = "processed"; }
        return __awaiter(_this, void 0, void 0, function () {
            var buffer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _connection.getAccountInfo(publicKey, commitmentOrConfig)];
                    case 1:
                        buffer = _a.sent();
                        if (!buffer) {
                            return [2 /*return*/, undefined];
                        }
                        if (buffer.data.length <= 0) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, T.CslSplTokenTypes.decodeMint((0, borsh_1.deserialize)(T.CslSplTokenTypes.MintSchema, buffer.data))];
                }
            });
        });
    };
    CslSplTokenGetters.getAccount = function (publicKey, commitmentOrConfig) {
        if (commitmentOrConfig === void 0) { commitmentOrConfig = "processed"; }
        return __awaiter(_this, void 0, void 0, function () {
            var buffer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _connection.getAccountInfo(publicKey, commitmentOrConfig)];
                    case 1:
                        buffer = _a.sent();
                        if (!buffer) {
                            return [2 /*return*/, undefined];
                        }
                        if (buffer.data.length <= 0) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, T.CslSplTokenTypes.decodeAccount((0, borsh_1.deserialize)(T.CslSplTokenTypes.AccountSchema, buffer.data))];
                }
            });
        });
    };
})(CslSplTokenGetters || (exports.CslSplTokenGetters = CslSplTokenGetters = {}));
// Websocket Events

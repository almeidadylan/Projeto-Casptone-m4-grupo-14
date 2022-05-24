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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const users_entity_1 = require("../../entities/users.entity");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userLoginService = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(users_entity_1.Users);
    const users = yield userRepository.find();
    const account = users.find((user) => user.email === email);
    if (!account) {
        throw new Error("Wrong email/password");
    }
    if (!bcrypt_1.default.compareSync(password, account.password)) {
        throw new Error("Wrong email/password");
    }
    const token = jsonwebtoken_1.default.sign({ email: email }, String(process.env.SECRET_KEY || "default"), {
        expiresIn: "1d",
    });
    return token;
});
exports.default = userLoginService;
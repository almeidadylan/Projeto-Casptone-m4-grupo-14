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
const users_entity_1 = require("../../entities/users.entity");
const data_source_1 = require("../../data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userCreateService = ({ name, email, password, cpf, birth_date, phone, pix, age, }) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(users_entity_1.Users);
    const users = yield userRepository.find();
    const emailAlreadyExists = users.find((user) => user.email === email);
    if (emailAlreadyExists) {
        throw new Error("Email Already Exists");
    }
    const user = new users_entity_1.Users();
    user.name = name;
    user.email = email;
    user.password = bcrypt_1.default.hashSync(password, 10);
    user.CPF = bcrypt_1.default.hashSync(cpf, 11);
    user.birth_date = birth_date;
    user.phone = phone + "";
    user.pix = pix;
    user.age = age;
    userRepository.create(user);
    yield userRepository.save(user);
    return user;
});
exports.default = userCreateService;

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
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const users_entity_1 = require("../entities/users.entity");
const testeService = () => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = yield data_source_1.AppDataSource.getRepository(users_entity_1.Users);
    const users = yield userRepository.find();
    console.log("era pra ser users", users);
    return users;
});
exports.default = testeService;

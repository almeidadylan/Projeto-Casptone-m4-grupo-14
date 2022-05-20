"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userCreate_controller_1 = __importDefault(require("../controllers/users/userCreate.controller"));
const userLogin_controller_1 = __importDefault(require("../controllers/users/userLogin.controller"));
const routes = (0, express_1.Router)();
routes.post("/users", userCreate_controller_1.default);
routes.post("/users/login", userLogin_controller_1.default);
exports.default = routes;

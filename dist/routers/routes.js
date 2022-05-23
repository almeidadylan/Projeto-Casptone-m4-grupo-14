"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createCategory_controller_1 = __importDefault(require("../controllers/categories/createCategory.controller"));
const deleteCategory_controller_1 = __importDefault(require("../controllers/categories/deleteCategory.controller"));
const teste_controller_1 = __importDefault(require("../controllers/teste.controller"));
const userCreate_controller_1 = __importDefault(require("../controllers/users/userCreate.controller"));
const userLogin_controller_1 = __importDefault(require("../controllers/users/userLogin.controller"));
const routes = (0, express_1.Router)();
routes.post("/users", userCreate_controller_1.default);
routes.post("/users/login", userLogin_controller_1.default);
routes.post("/categories", createCategory_controller_1.default);
routes.delete("/categories/:id", deleteCategory_controller_1.default);
routes.get("/t", teste_controller_1.default);
exports.default = routes;

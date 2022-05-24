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
const category_entity_1 = require("../../entities/category.entity");
const data_source_1 = require("../../data-source");
const deleteCategoryService = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryRepository = data_source_1.AppDataSource.getRepository(category_entity_1.Categories);
    const categories = yield categoryRepository.find();
    const category = categories.filter((category) => category.id === id);
    if (!category) {
        throw new Error("category not found");
    }
    return yield categoryRepository.delete(id);
});
exports.default = deleteCategoryService;

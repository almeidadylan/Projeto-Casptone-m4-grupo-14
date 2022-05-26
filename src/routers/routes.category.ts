import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import deleteCategoryController from "../controllers/categories/deleteCategory.controller";
import listCategoriesController from "../controllers/categories/listCategories.controller";
import listCategoriesByNameOrIdController from "../controllers/categories/listCategoriesByName.controller";

const routes = Router();

routes.post("/categories", createCategoryController);
routes.delete("/categories/:id", deleteCategoryController);
routes.get("/categories", listCategoriesController);
routes.get("/categories/:name_id", listCategoriesByNameOrIdController);

export default routes;
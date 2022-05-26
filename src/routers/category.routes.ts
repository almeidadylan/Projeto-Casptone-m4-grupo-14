import { Router } from "express";
import tokenAuth from "../middlewares/tokenAuth.middleware";

import createCategoryController from "../controllers/categories/createCategory.controller";
import deleteCategoryController from "../controllers/categories/deleteCategory.controller";
import listCategoriesController from "../controllers/categories/listCategories.controller";
import listCategoriesByNameController from "../controllers/categories/listCategoriesByName.controller";

const routes = Router();

routes.post("/categories", createCategoryController);
routes.delete("/categories/:id", tokenAuth, deleteCategoryController);
routes.get("/categories", listCategoriesController);
routes.get("/categories/:name_id", listCategoriesByNameController);

export default routes;

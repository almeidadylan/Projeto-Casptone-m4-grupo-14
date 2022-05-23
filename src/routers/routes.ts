import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import deleteCategoryController from "../controllers/categories/deleteCategory.controller";
import listCategoriesController from "../controllers/categories/listCategories.controller";
import userCreateController from "../controllers/users/userCreate.controller";
import userLoginController from "../controllers/users/userLogin.controller";
import listCategoriesByNameOrIdController from "../controllers/categories/listCaregoriesByName.controller";

const routes = Router();

routes.post("/users", userCreateController);
routes.post("/users/login", userLoginController);
routes.post("/categories", createCategoryController);
routes.delete("/categories/:id", deleteCategoryController);
routes.get("/categories", listCategoriesController);
routes.get("/categories/:name_id", listCategoriesByNameOrIdController);

export default routes;

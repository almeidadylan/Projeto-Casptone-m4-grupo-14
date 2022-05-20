import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import deleteCategoryController from "../controllers/categories/deleteCategory.controller";
import testeController from "../controllers/teste.controller";
import userCreateController from "../controllers/users/userCreate.controller";
import userLoginController from "../controllers/users/userLogin.controller";


const routes = Router();

routes.post("/users", userCreateController);
routes.post("/users/login", userLoginController);
routes.post("/categories", createCategoryController);
routes.delete("/categories/:id", deleteCategoryController);
routes.get("/t", testeController);

export default routes;

import { Router } from "express";
import multer from "multer";
import tokenAuth from "../middlewares/tokenAuth";

import createCategoryController from "../controllers/categories/createCategory.controller";
import deleteCategoryController from "../controllers/categories/deleteCategory.controller";
import listCategoriesController from "../controllers/categories/listCategories.controller";
import listCategoriesByNameOrIdController from "../controllers/categories/listCategoriesByName.controller";
import uploadMusicController from "../controllers/musics/uploadMusic.controller";
import userCreateController from "../controllers/users/userCreate.controller";
import userLoginController from "../controllers/users/userLogin.controller";
const multerConfig = require("../config/multer");

const routes = Router();

routes.post("/users", userCreateController);
routes.post("/users/login", userLoginController);
routes.post("/categories", createCategoryController);
routes.delete("/categories/:id", tokenAuth, deleteCategoryController);
routes.get("/categories", listCategoriesController);
routes.get("/categories/:name_id", listCategoriesByNameOrIdController);
routes.post(
  "/music",
  multer(multerConfig).single("file"),
  uploadMusicController
);

export default routes;

import { Router } from "express";
import multer from "multer";

import createCategoryController from "../controllers/categories/createCategory.controller";
import deleteCategoryController from "../controllers/categories/deleteCategory.controller";
import listCategoriesController from "../controllers/categories/listCategories.controller";
import listCategoriesByNameOrIdController from "../controllers/categories/listCategoriesByName.controller";
import uploadMusicController from "../controllers/musics/uploadMusic.controller";
import userCreateController from "../controllers/users/userCreate.controller";
import userLoginController from "../controllers/users/userLogin.controller";
import listAllMusicsController from "../controllers/musics/listAllMusics.controller";
import deleteMusicController from "../controllers/musics/deleteMusic.controller";
import showUserController from "../controllers/users/showUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
const multerConfig = require("../config/multer")


const routes = Router();

routes.post("/users", userCreateController);
routes.post("/users/login", userLoginController);
routes.post("/categories", createCategoryController);
routes.delete("/categories/:id", deleteCategoryController);
routes.get("/categories", listCategoriesController);
routes.get("/categories/:name_id", listCategoriesByNameOrIdController);
routes.post("/music", multer(multerConfig).single("file"), uploadMusicController);
routes.get("/musics", listAllMusicsController);
routes.delete("musics/:id", deleteMusicController);
routes.get("users/:id", showUserController);
routes.delete("users/:id", deleteUserController);
export default routes;

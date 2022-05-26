import { Router } from "express";
import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";
import userLoginController from "../controllers/users/userLogin.controller";
import userUpdateController from "../controllers/users/userUpdate.controller";

const usersRoutes = Router();

usersRoutes.post("/users", userCreateController);
usersRoutes.post("/users/login", userLoginController);
usersRoutes.get("/users", userListController);
usersRoutes.patch("/users/:id", userUpdateController);

export default usersRoutes;

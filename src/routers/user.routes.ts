import { Router } from "express";

import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";
import userListOneController from "../controllers/users/userListOne.controller";
import userLoginController from "../controllers/users/userLogin.controller";
import userUpdateController from "../controllers/users/userUpdate.controller";

const routes = Router();

routes.post("/users", userCreateController);
routes.post("/users/login", userLoginController);
routes.get("/users", userListController);
routes.get("/users/:id", userListOneController);
routes.patch("/users/:id", userUpdateController);

export default routes;

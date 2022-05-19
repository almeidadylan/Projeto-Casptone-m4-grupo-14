import { Router } from "express";
import userCreateController from "../controllers/users/userCreate.controller";
import userLoginController from "../controllers/users/userLogin.controller";

const routes = Router();

routes.post("/users", userCreateController);
routes.post("/users/login", userLoginController);

export default routes;

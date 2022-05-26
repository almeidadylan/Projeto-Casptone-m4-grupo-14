import { Router } from "express";
import multer from "multer";
import deleteMusicController from "../controllers/musics/deleteMusic.controller";

import infoUniqueMusicController from "../controllers/musics/infoUniqueMusic.controller";
import listAllMusicsController from "../controllers/musics/listAllMusics.controller";
import uploadMusicController from "../controllers/musics/uploadMusic.controller";
import tokenAuth from "../middlewares/tokenAuth.middleware";

const multerConfig = require("../config/multer");

const routes = Router();

routes.post(
  "/music",
  tokenAuth,
  multer(multerConfig).single("file"),
  uploadMusicController
);
routes.get("/music/:id", infoUniqueMusicController);
routes.get("/musics", listAllMusicsController);
routes.delete("/musics/:id", deleteMusicController);

export default routes;

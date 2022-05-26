import { Router } from "express";
import multer from "multer";

import infoUniqueMusicController from "../controllers/musics/infoUniqueMusic.controller";
import listAllMusicsController from "../controllers/musics/listAllMusics.controller";
import uploadMusicController from "../controllers/musics/uploadMusic.controller";
import tokenAuth from "../middlewares/tokenAuth";

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

export default routes;

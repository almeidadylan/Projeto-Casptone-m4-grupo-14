import { Request, Response } from "express";
import { IUpload } from "../../interfaces/upload";
import { v4 as uuid } from "uuid";
import createMusicService from "../../services/musics/uploadMusic.service";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users.entity";

const uploadMusicService = async (request: Request, res: Response) => {
  try {
    const token = request.headers.authorization?.split(" ")[1] + "";
    const decoded: any = jwt.decode(token);
    const userRepository = AppDataSource.getRepository(Users);
    const users = await userRepository.find();

    const user = users.find((user) => user.email === decoded!.email);

    const { originalname, key, size, location } = (request as any).file;

    const upload: IUpload = {
      id: uuid(),
      name: originalname,
      key,
      size,
      url: location,
    };

    const name = originalname;
    const url = location;
    const id_user = user?.id + "";
    const id_category = request.body.id_category;
    const letter = request.body.letter;

    await createMusicService({ name, url, id_user, id_category, letter, size });
    return res.status(201).json({
      status: "ok",
      message: "upload done",
      upload: upload,
    });
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({
        status: "error",
        message: "Invalid file type.",
      });
    }
  }
};

export default uploadMusicService;

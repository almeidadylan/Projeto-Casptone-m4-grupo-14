import { Request, Response } from "express";
import listAllMusicsService from "../../services/musics/listAllMusics.service";

const listAllMusicsController = async (req: Request, res: Response) => {
  try {
    const musics = await listAllMusicsService();

    return res.status(200).json(musics);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({ error: err.name, message: err.message });
    }
  }
};

export default listAllMusicsController;
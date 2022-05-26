import { Request, Response } from "express";
import deleteMusicService from "../../services/musics/deleteMusic.service";

const deleteMusicController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await deleteMusicService({ id });

    return res.status(200).json({ message: "Deleted music" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({ error: err.name, message: err.message });
    }
  }
};

export default deleteMusicController;
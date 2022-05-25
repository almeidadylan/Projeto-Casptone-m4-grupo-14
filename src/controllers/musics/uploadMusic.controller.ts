import { Request, Response } from "express"
import { AppError } from "../../errors/appErros";
import uploadMusicService from "../../services/musics/uploadMusic.service";

const uploadMusicController = async (request: Request, res: Response) => {
    try {
        const { originalname, key, size, location  } = (request as any).file;

        const upload = await uploadMusicService(originalname, key, size, location)

        res.json({
            status: "ok",
            message: "upload done",
            upload: upload
        });
    } catch (err) {
        if (err instanceof AppError) {
            res.status(400).json({
                status: "error",
                message: "Invalid file type."
            })
        }
    }
}

export default uploadMusicController;
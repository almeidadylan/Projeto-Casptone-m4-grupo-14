import listAllMusicsService from "../../services/musics/listAllMusics.service";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErros";

const listAllMusicsController = async (req: Request, res: Response) => {
    try {
        const musics = await listAllMusicsService();

        return res.status(200).json(musics)
    } catch (err) {
        if ( err instanceof AppError ) {
            return res.status(409).json({
                status: "error",
                message: "unable to list users"
            })
        }
    }
};

export default listAllMusicsController;
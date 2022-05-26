import { AppError } from "../../errors/appErros";
import infoUniqueMusicService from "../../services/musics/infoUniqueMusic.service";
import { Request, Response } from "express"

const infoUniqueMusicController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const music = await infoUniqueMusicService(id);

        return res.status(200).json(music);
    } catch (err) {
        if ( err instanceof Error ) {
            return res.status(400).json({
                status: "error",
                message: "invalid id"
            });
        };
    };
};

export default infoUniqueMusicController;

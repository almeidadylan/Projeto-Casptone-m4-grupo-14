import { Request, Response } from "express"
import { IUpload } from "../../interfaces/upload";
import { v4 as uuid } from "uuid";

const uploadMusicController = async (request: Request, res: Response) => {
    try {
        const { originalname, key, size, location  } = (request as any).file;
        
        const upload: IUpload = {
            id: uuid(),
            name: originalname,
            key,
            size,
            url: location,
        } 

        res.json({
            status: "ok",
            message: "upload done",
            upload: upload
        });
    }catch (err) {
        if (err instanceof Error) {
            res.status(400).json({
                status: "error",
                message: "Invalid file type."
            })
        }
    }
}

export default uploadMusicController;
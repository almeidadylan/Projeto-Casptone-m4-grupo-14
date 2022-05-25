import { IUpload } from "../../interfaces/upload";
import { v4 as uuid } from "uuid";

const uploadMusicService = async ( originalname: string, key: string, size: number, location: string) => {
    const upload: IUpload = {
        id: uuid(),
        name: originalname,
        key,
        size,
        url: location,
    }

    return upload;
} 

export default uploadMusicService;
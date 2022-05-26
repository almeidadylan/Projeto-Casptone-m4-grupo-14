import { AppDataSource } from "../../data-source";
import { Music } from "../../entities/music.entity";

const infoUniqueMusicService = async (id: string) => {
    const musicRepository = AppDataSource.getRepository(Music);

    const music = await musicRepository.find({
        where: { id: id }
    })

    if ( music.length < 1 ) {
        throw new Error("invalid id")
    }

    return music
};

export default infoUniqueMusicService;
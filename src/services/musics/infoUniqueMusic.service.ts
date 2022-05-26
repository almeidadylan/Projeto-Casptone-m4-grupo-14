import { AppDataSource } from "../../data-source";
import { Musics } from "../../entities/music.entity";

const infoUniqueMusicService = async (id: string) => {
    const musicRepository = AppDataSource.getRepository(Musics);

    const music = await musicRepository.find({
        where: { id: id }
    })

    if ( music.length < 1 ) {
        throw new Error("invalid id")
    }

    return music
};

export default infoUniqueMusicService;
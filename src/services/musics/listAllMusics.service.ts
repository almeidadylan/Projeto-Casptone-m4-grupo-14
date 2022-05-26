import { AppDataSource } from "../../data-source";
import { Music } from "../../entities/music.entity";

const listAllMusicsService = async () => {
    const musicRepository = AppDataSource.getRepository(Music);

    const musics = await musicRepository.find();

    return musics;

};

export default listAllMusicsService;
import { AppDataSource } from "../../data-source";
import { Musics } from "../../entities/music.entity";

const listAllMusicsService = async () => {
  const musicRepository = AppDataSource.getRepository(Musics);

  const musics = await musicRepository.find();

  return musics;
};

export default listAllMusicsService;

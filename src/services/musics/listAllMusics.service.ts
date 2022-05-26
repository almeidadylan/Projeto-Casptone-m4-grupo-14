import { AppDataSource } from "../../data-source";
import { Music } from "../../entities/music.entity";

const listAllMusicsService = async () => {
  const userRepository = AppDataSource.getRepository(Music);
  const musics = await userRepository.find();

  return musics;
};
export default listAllMusicsService;
import { AppDataSource } from "../../data-source";
import { Music } from "../../entities/music.entity";
import { GetMusic } from "../../interfaces/musics";

const deleteMusicService = async ({ id }: GetMusic) => {
  const musicRepository = AppDataSource.getRepository(Music);

  const musics = await musicRepository.find();

  const music = musics.filter((music) => music.id === id);

  if (!music) {
    throw new Error("music not found");
  }

  return await musicRepository.delete(id);
};

export default deleteMusicService;
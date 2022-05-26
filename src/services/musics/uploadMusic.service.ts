import { AppDataSource } from "../../data-source";
import { Musics } from "../../entities/music.entity";
import { ICreateMusic } from "../../interfaces/upload";

const createMusicService = async ({
  name,
  url,
  id_user,
  id_category,
  letter,
}: ICreateMusic) => {
  const musicRepository = AppDataSource.getRepository(Musics);

  const music = new Musics();
  music.name = name;
  music.url = url;
  music.id_user = id_user;
  music.id_category = id_category;
  music.letter = letter;

  console.log(music);

  musicRepository.create(music);
  await musicRepository.save(music);

  return music;
};

export default createMusicService;

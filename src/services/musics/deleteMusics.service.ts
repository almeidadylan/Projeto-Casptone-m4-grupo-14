import { AppDataSource } from "../../data-source";
import { Musics } from "../../entities/music.entity";
import { IDeleteMusic } from "../../interfaces/upload";
import jwt from "jsonwebtoken";
import { Users } from "../../entities/users.entity";

const deleteMusicService = async ({ id, token }: IDeleteMusic) => {
  const musicRepository = AppDataSource.getRepository(Musics);

  const decoded: any = jwt.decode(token);
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.find();
  const user = users.filter((user) => user.email === decoded.email);

  const musics = await musicRepository.find();

  const music = musics.filter((category) => category.id === id);

  if (user[0].id !== music[0].id_user) {
    throw new Error("Unauthorized");
  }

  if (!music) {
    throw new Error("category not found");
  }

  return await musicRepository.delete(id);
};

export default deleteMusicService;

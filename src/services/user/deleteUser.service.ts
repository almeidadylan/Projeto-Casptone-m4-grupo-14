import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users.entity";
import { GetUser } from "../../interfaces/users";

const deleteUserService = async ({ id }: GetUser) => {
  const userRepository = AppDataSource.getRepository(Users);

  const users = await userRepository.find();

  const user = users.filter((user) => user.id === id);

  if (!user) {
    throw new Error("User not found");
  }

  return await userRepository.delete(id);
};

export default deleteUserService;
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users.entity";
import { GetUser } from "../../interfaces/users";

const showUserService = async ({ id }: GetUser) => {
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.find();

  let user = users.find((user) => user.id === id);

  if (!user) {
    throw new Error("User not Found");
  }
  return user;
	
};

export default showUserService;
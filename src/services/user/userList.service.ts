import { Users } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";

const userListService = async () => {
  const userRepository = AppDataSource.getRepository(Users);

  const users = userRepository.find();

  return users;
};

export default userListService;

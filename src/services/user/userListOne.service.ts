import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users.entity";

const userListOneService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.findOne({ where: { id } });
  console.log(users)

  if (!users) {
    throw new Error("Not found any user with this id");
  }

  return users;
};

export default userListOneService;

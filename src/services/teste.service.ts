import { AppDataSource } from "../data-source";
import { Users } from "../entities/users.entity";

const testeService = async () => {
    const userRepository = await AppDataSource.getRepository(Users);

    const users = await userRepository.find();
    console.log("era pra ser users",users)

    return users
};

export default testeService;
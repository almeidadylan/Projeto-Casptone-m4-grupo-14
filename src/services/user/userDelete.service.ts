import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users.entity";

const userDeleteService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(Users);

    const user = await userRepository.delete({ id: id });

    if (!user) {
        throw new Error("user not found");
    }

    return user
};

export default userDeleteService;


import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users.entity";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUserLogin } from "../../interfaces/users/index";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.find();

  const account = users.find((user) => user.email === email);

  if (!account) {
    throw new Error("Wrong email/password");
  }
  if (!bcrypt.compareSync(password, account.password)) {
    throw new Error("Wrong email/password");
  }

  const token = jwt.sign(
    { email: email },
    String(process.env.SECRET_KEY || "default"),
    {
      expiresIn: "1d",
    }
  );

  return token;
};
export default userLoginService;

import { Users } from "../../entities/user.entity";
import { IUserCreate } from "../../interfaces/users";
import { AppDataSource } from "../../data-source";
import bcrypt from "bcrypt";

const userCreateService = async ({
  name,
  email,
  password,
  cpf,
  birth_date,
  phone,
  pix,
  age,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new Error("Email Already Exists");
  }

  const user = new Users();
  user.name = name;
  user.email = email;
  user.password = bcrypt.hashSync(password, 10);
  user.cpf = bcrypt.hashSync(cpf, 11);
  user.birth_date = birth_date;
  user.phone = phone;
  user.pix = pix;
  user.age = age;

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default userCreateService;

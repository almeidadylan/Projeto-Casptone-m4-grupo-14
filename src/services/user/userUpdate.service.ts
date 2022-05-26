import { Users } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { IUserUpdate } from "../../interfaces/users";

const userUpdateService = async ({
  id,
  name,
  email,
  password,
  cpf,
  birth_date,
  phone,
  pix,
  age,
}: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.findOne({ where: { id } });

  if (!users) {
    throw new Error("Not found any user with this id");
  }

  name ? (users.name = name) : users.name;
  email ? (users.email = email) : users.email;
  password ? (users.password = password) : users.password;
  cpf ? (users.cpf = cpf) : users.cpf;
  birth_date ? (users.birth_date = birth_date) : users.birth_date;
  phone ? (users.phone = phone) : users.phone;
  pix ? (users.pix = pix) : users.pix;
  age ? (users.age = age) : users.age;

  return userRepository.save(users);
};

export default userUpdateService;

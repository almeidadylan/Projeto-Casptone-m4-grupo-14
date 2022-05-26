export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  cpf: string;
  birth_date: string;
  phone: number;
  pix: string;
  age: number;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface GetUser {
  id: string;
}
export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  cpf: string;
  birth_date: string;
  phone: number;
  age: number;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  birth_date: string;
  phone: string;
  age: number;
}

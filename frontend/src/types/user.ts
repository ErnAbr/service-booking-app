export interface IUserRegister {
  userName: string;
  age: number;
  email: string;
  password: string;
}

export interface IUserRegisterResponse {
  message: string;
}

export interface IUser {
  userName: string;
  age?: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface IUserLogin {
  userName: string;
  password: string;
}

export interface IUserLoginResponse {
  user: IUser;
  message: string;
}

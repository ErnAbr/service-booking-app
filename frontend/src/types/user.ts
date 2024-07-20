export interface IUserRegister {
  userName: string;
  age: number;
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  userName: string;
  age?: number;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserRegisterResponse {
  message: string;
}

export interface IUserLogin {
  userName: string;
  password: string;
}

export interface IUserUpdate {
  id: string;
  userName: string;
  email: string;
}

export interface UserLoginResponse {
  user: IUser;
  message: string;
}

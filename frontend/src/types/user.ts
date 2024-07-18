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

export interface IUserRegisterResponse {
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

export interface IUserLoginResponse {
  user: IUser;
  message: string;
}

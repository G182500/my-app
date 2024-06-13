export interface IUser {
  id: string;
  user: string;
  password: string;
  name: string;
}

export interface ISession {
  token: string;
  user: IUser;
}

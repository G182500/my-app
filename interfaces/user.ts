export interface User {
  id: string;
  user: string;
  password: string;
  name: string;
}

export interface Session {
  token: string;
  user: User;
}

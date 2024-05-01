export interface User {
  token: string;
  user: {
    id: string;
    user: string;
    password: string;
    name: string;
  };
}

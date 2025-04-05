export interface RespCreateUser {
  message: string;
  data:    User;
}

export interface User {
  id:       number;
  username: string;
  email:    string;
  password: string;
}

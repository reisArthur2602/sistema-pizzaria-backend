export type UserResponse = {
  id: string;
  email: string;
  password: string;
};

export type UserRequest = {
  email: string;
  password: string;
};

export type SessionUserResponse = {
  user: UserResponse;
  token: string;
};

export interface IUserRepository {
  create(data: UserRequest): Promise<void>;
  findByEmail(email: string): Promise<UserResponse | null>;
  findById(id: string): Promise<UserResponse | null>;
}

export interface IUserResponse {
  id: string;
  email: string;
  password: string;
}
export interface IUserRequest {
  email: string;
  password: string;
}

export interface IUserRepository {
  findByEmail(email: string): Promise<IUserResponse | null>;
  create(data: IUserRequest): Promise<void>;
}

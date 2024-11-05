import { db } from "../../shared/database/prisma-connection";
import { IUserRepository, UserRequest, UserResponse } from "./user.types";

export class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<UserResponse | null> {
    return await db.user.findUnique({ where: { email } });
  }
  async findById(id: string): Promise<UserResponse | null> {
    return await db.user.findUnique({ where: { id } });
  }
  async create(data: UserRequest): Promise<void> {
    await db.user.create({ data });
  }
}

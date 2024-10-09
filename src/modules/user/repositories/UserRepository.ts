import { db } from "../../../shared/database/prisma-connection";
import { IUserRepository, IUserRequest, IUserResponse } from "./IUserRepository";

export class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<IUserResponse | null> {
    return await db.user.findUnique({ where: { email } });
  }
  async findById(id: string): Promise<IUserResponse | null> {
    return await db.user.findUnique({ where: { id } });
  }
  async create(data: IUserRequest): Promise<void> {
    await db.user.create({ data });
  }
}

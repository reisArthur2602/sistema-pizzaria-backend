import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import {
  NotFoundError,
  UnauthorizedError,
} from "../../../shared/helpers/errors";

import { UserRepository } from "../user.repository";
import {
  IUserRepository,
  SessionUserResponse,
  UserRequest,
} from "../user.types";

export class SessionUserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  private userRepository: IUserRepository;

  async execute({
    email,
    password,
  }: UserRequest): Promise<SessionUserResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundError("O Usuário não foi encontrado");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedError("A senha está incorreta");
    }

    const token = sign({}, process.env.JWT_SECRET as string, {
      subject: user.id,
      expiresIn: "7d",
    });

    return { user, token };
  }
}

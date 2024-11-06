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
import { USER_MESSAGES } from "../user.messages";

export class SessionUserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  private userRepository: IUserRepository;

  async execute({
    email,
    password,
  }: UserRequest): Promise<SessionUserResponse> {
    const hasUserWithEmail = await this.userRepository.findByEmail(email);

    if (!hasUserWithEmail) {
      throw new NotFoundError(USER_MESSAGES.USER_NOT_FOUND);
    }

    const passwordMatch = await compare(password, hasUserWithEmail.password);

    if (!passwordMatch) {
      throw new UnauthorizedError(USER_MESSAGES.INCORRECT_PASSWORD);
    }

    const token = sign({}, process.env.JWT_SECRET as string, {
      subject: hasUserWithEmail.id,
      expiresIn: "7d",
    });

    return { user: hasUserWithEmail, token };
  }
}

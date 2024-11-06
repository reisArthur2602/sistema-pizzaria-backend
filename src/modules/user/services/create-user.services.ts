import { hash } from "bcrypt";
import { ConflictError } from "../../../shared/helpers/errors";
import { IUserRepository, UserRequest } from "../user.types";
import { UserRepository } from "../user.repository";
import { USER_MESSAGES } from "../user.messages";

export class CreateUserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  private userRepository: IUserRepository;

  async execute({ email, password }: UserRequest): Promise<void> {
    const hasUserWithEmail = await this.userRepository.findByEmail(email);

    if (hasUserWithEmail) {
      throw new ConflictError(USER_MESSAGES.EMAIL_ALREADY_ASSOCIATED);
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({ email, password: passwordHash });
  }
}

import { hash } from "bcrypt";
import { ConflictError } from "../../../shared/helpers/errors";
import { IUserRepository, UserRequest } from "../user.types";
import { UserRepository } from "../user.repository";

export class CreateUserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  private userRepository: IUserRepository;

  async execute({ email, password }: UserRequest): Promise<void> {
    const emailExists = await this.userRepository.findByEmail(email);

    if (emailExists) {
      throw new ConflictError("Este email já está associado a um usuário");
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({ email, password: passwordHash });
  }
}

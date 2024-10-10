import { hash } from "bcrypt";
import { ConflictError } from "../../../shared/helpers/errors";
import { IUserRepository, IUserRequest } from "../repositories/IUserRepository";
import { UserRepository } from "../repositories/UserRepository";

export class CreateUserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  private userRepository: IUserRepository;

  async execute({ email, password }: IUserRequest) {
    const emailExists = await this.userRepository.findByEmail(email);

    if (emailExists) {
      throw new ConflictError("Este email já está associado a um usuário");
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({ email, password: passwordHash });
  }
}

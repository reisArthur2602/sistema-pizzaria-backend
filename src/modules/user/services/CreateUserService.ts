import { hash } from "bcrypt";
import { BadRequestError } from "../../../shared/helpers/errors";
import { IUserRepository, IUserRequest } from "../UserInterface";
import { UserRepository } from "../UserRepository";

export class CreateUserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  private userRepository: IUserRepository;

  async execute({ email, password }: IUserRequest) {
    const emailExists = await this.userRepository.findByEmail(email);

    if (emailExists) {
      throw new BadRequestError("Este email já esta associado a um usuário");
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({ email, password: passwordHash });
  }
}

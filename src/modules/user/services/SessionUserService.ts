import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import {
  NotFoundError,
  UnauthorizedError,
} from "../../../shared/helpers/errors";
import {
  ISessionUserResponse,
  IUserRepository,
  IUserRequest,
} from "../UserInterface";
import { UserRepository } from "../UserRepository";

export class SessionUserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  private userRepository: IUserRepository;

  async execute({
    email,
    password,
  }: IUserRequest): Promise<ISessionUserResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundError("O Usuário não foi encontrado");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedError("A senha está incorreta");
    }

    const token = sign(
      { email: user.email },
      process.env.JWT_SECRET as string,
      {
        subject: user.id,
      }
    );

    return { user, token };
  }
}

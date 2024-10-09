import { hash } from "bcrypt";
import { BadRequestError } from "../../../shared/helpers/errors";
import { IUserRepository, IUserRequest, IUserResponse } from "../UserInterface";
import { UserRepository } from "../UserRepository";

export class DetailsUserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  private userRepository: IUserRepository;

  async execute(id: string): Promise<IUserResponse | null> {
    return await this.userRepository.findById(id);
  }
}

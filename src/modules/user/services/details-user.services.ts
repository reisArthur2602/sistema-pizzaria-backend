import { hash } from "bcrypt";
import { BadRequestError } from "../../../shared/helpers/errors";
import { IUserRepository, UserResponse, } from "../user.types";
import { UserRepository } from "../user.repository";

export class DetailsUserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  private userRepository: IUserRepository;

  async execute(id: string): Promise<UserResponse | null> {
    return await this.userRepository.findById(id);
  }
}

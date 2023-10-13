import { Card } from "../../domain/models/Card";
import { User } from "../../domain/models/User";
import { UserRepository } from "../../domain/ports/UserRepository";
import { generateToken } from "../auth";

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async login(email: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findByEmail(email);
    if (user && user.password === password) {
      return {
        ...user,
        token: generateToken({ userId: user.id }),
      };
    }
    return null;
  }

  async getCards(userId: string): Promise<Card[]> {
    return this.userRepository.getCards(userId);
  }
}

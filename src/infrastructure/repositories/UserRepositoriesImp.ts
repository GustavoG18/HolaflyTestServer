import { UserRepository } from "../../domain/ports/UserRepository";
import { User } from "../../domain/models/User";
import { Card } from "../../domain/models/Card";
import { users } from "../db/data";

export class UserRepositoryImp implements UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = users.find((user) => user.email === email);
    return user || null;
  }

  async getCards(userId: string): Promise<Card[]> {
    const user = users.find((user) => user.id === Number(userId));
    return user?.cards || [];
  }
}

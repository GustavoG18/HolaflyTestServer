import { Card } from "../models/Card";
import { User } from "../models/User";

export interface UserRepository {
  findByEmail(email: string): Promise<User | null>;
  getCards(userId: string): Promise<Card[]>;
}

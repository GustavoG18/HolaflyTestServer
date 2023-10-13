import { UserRepository } from "../../domain/ports/UserRepository";
import { User } from "../../domain/models/User";
import { Card } from "../../domain/models/Card";
import fs from "fs";
import path from "path";

export class UserRepositoryImp implements UserRepository {
  private readonly dbPath = path.resolve(__dirname, "../db/data.json");

  async findByEmail(email: string): Promise<User | null> {
    const users = await this.readDb();
    return users.find((user) => user.email === email) || null;
  }

  async getCards(userId: string): Promise<Card[]> {
    const users = await this.readDb();
    const user = users.find((user) => user.id == userId);
    return user?.cards || [];
  }

  private async readDb(): Promise<User[]> {
    const data = await fs.promises.readFile(this.dbPath, "utf-8");
    return JSON.parse(data);
  }
}

import { Card } from "./Card";

export class User {
  constructor(
    public id: Number,
    public email: string,
    public password: string,
    public cards: Card[]
  ) {}
}

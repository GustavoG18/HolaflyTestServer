import { UserService } from "../../application/services/UserService";

export class UserController {
  constructor(private userService: UserService) {}

  async login(req: any, res: any): Promise<void> {
    const { email, password } = req.body;
    const user = await this.userService.login(email, password);
    if (user) {
      res.json({ user });
    } else {
      res.sendStatus(401);
    }
  }

  async getAllCards(req: any, res: any): Promise<void> {
    const { userId } = req.query;
    if (!userId) {
      res.sendStatus(401);
      return;
    }
    const cards = await this.userService.getCards(userId);
    res.json(cards);
  }
}

import { authMiddleware } from "../application/auth";
import { UserController } from "./controllers/UserController";

export function setupRoutes(app: any, userController: UserController): void {
  app.post("/login", (req: any, res: any) => userController.login(req, res));
  app.get("/cards", authMiddleware, (req: any, res: any) =>
    userController.getAllCards(req, res)
  );
}

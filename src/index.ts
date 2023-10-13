import express from "express";
import { UserRepositoryImp } from "./infrastructure/repositories/UserRepositoriesImp";
import { UserService } from "./application/services/UserService";
import { UserController } from "./interfaces/controllers/UserController";
import { setupRoutes } from "./interfaces/routes";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const userRepository = new UserRepositoryImp();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

setupRoutes(app, userController);

app.listen(PORT, () => {
  console.log("Servidor corriendo");
});

import express from "express";
import cors from "cors";
import { UserRepositoryImp } from "./infrastructure/repositories/UserRepositoriesImp";
import { UserService } from "./application/services/UserService";
import { UserController } from "./interfaces/controllers/UserController";
import { setupRoutes } from "./interfaces/routes";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const userRepository = new UserRepositoryImp();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

setupRoutes(app, userController);

app.listen(PORT, () => {
  console.log("Servidor corriendo");
});

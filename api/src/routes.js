import { Router } from "express";

import furnitureController from "./controllers/furnitureController.js";
import userController from "./controllers/userController.js";

const routes = Router();

routes.use("/users", userController);
routes.use("/data/catalog", furnitureController);

export default routes;

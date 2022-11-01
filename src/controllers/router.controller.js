import { Router } from "express";
import * as routerService from "../services/router/index.js";
import authenticateWithJWT from "../helpers/functions/authenticateWithJWT.js";
import JoiMiddleware from "../helpers/middlewares/joiMiddleware.js";
import routerSchema from "../helpers/schemas/createRouter.schema.js";
import updateRouterSchema from "../helpers/schemas/updateRouter.schema.js";
const ordersRouter = Router();

ordersRouter.post(
  "/",
  JoiMiddleware(routerSchema),
  routerService.createRouter
);
ordersRouter.patch(
  "/update/:id",
  JoiMiddleware(updateRouterSchema),
  routerService.updateRouter
);
ordersRouter.get("/", routerService.allRouters);
ordersRouter.get("/:id", routerService.getRouter);

export default ordersRouter;

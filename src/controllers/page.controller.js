import { Router } from "express";
import * as pagesService from "../services/pages/index.js";
import authenticateWithJWT from "../helpers/functions/authenticateWithJWT.js";
import JoiMiddleware from "../helpers/middlewares/joiMiddleware.js";
import pageSchema from "../helpers/schemas/createPage.schema.js";
import updatePageSchema from "../helpers/schemas/updatePage.schema.js";
const ordersRouter = Router();

ordersRouter.post(
  "/:id",
  JoiMiddleware(pageSchema),
  pagesService.createPage
);
ordersRouter.patch(
  "/update/:router/:url/:ex1?/:ex2?/:ex3?/:ex4?/:ex5?/:ex6?",
  JoiMiddleware(updatePageSchema),
  pagesService.updatePage
);
//ordersRouter.get("/", authenticateWithJWT, pagesService.allPages);
ordersRouter.get(
  "/:router/:url/:ex1?/:ex2?/:ex3?/:ex4?/:ex5?/:ex6?",
  pagesService.getPage
);
ordersRouter.delete(
  "/delete/:router/:url/:ex1?/:ex2?/:ex3?/:ex4?/:ex5?/:ex6?",
  authenticateWithJWT,
  pagesService.deletePage
);

export default ordersRouter;

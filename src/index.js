import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import errorHandler from "./helpers/middlewares/errorHandler.js";
import routerRouter from "./controllers/router.controller.js";
import pageRouter from "./controllers/page.controller.js";
import registerStrategies from "./helpers/functions/registerStratigies.js";
import cors from "cors";
const prisma = new PrismaClient();
dotenv.config();

const app = express();
app.use(cors());
registerStrategies();
// -- Middlewares --
app.use(express.json());
// -- Routes --
app.use("/router", routerRouter);
app.use("/pages", pageRouter);
app.use(errorHandler);


app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

export { prisma };

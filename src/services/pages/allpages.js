import { okResponse } from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function allPages(req, res, next) {
  try {
    const page = await prisma.pages.findMany({});

    return okResponse(res, "fetched all pages successfully", page);
  } catch (err) {
    next(err);
  }
}

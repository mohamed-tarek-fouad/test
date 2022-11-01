import {
  badRequestResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function getRouter(req, res, next) {
  try {
    const { id } = req.params;
    const router = await prisma.router.findUnique({
      where: {
        domain: id,
      },
      include: {
        pages: {
          select: {
            url: true,
          },
        },
      },
    });
    if (!router) {
      return badRequestResponse(res, "router doesn't exist");
    }
    return okResponse(res, "fetched router successfully", router);
  } catch (err) {
    next(err);
  }
}

import { okResponse } from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function allRouters(req, res, next) {
  try {
    const router = await prisma.router.findMany({
      include: {
        pages: {
          select: {
            url: true,
          },
        },
      },
    });

    return okResponse(res, "fetched all routers successfully", router);
  } catch (err) {
    next(err);
  }
}

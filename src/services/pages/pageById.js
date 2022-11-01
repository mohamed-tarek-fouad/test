import { okResponse } from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";
export async function getPage(req, res, next) {
  try {
    let { router, url, ex1, ex2, ex3, ex4, ex5, ex6 } = req.params;
    if (ex6) {
      url =
        url +
        "/" +
        ex1 +
        "/" +
        ex2 +
        "/" +
        ex3 +
        "/" +
        ex4 +
        "/" +
        ex5 +
        "/" +
        ex6;
    } else if (ex5) {
      url = url + "/" + ex1 + "/" + ex2 + "/" + ex3 + "/" + ex4 + "/" + ex5;
    } else if (ex4) {
      url = url + "/" + ex1 + "/" + ex2 + "/" + ex3 + "/" + ex4;
    } else if (ex3) {
      url = url + "/" + ex1 + "/" + ex2 + "/" + ex3;
    } else if (ex2) {
      url = url + "/" + ex1 + "/" + ex2;
    } else if (ex1) {
      url = url + "/" + ex1;
    }
    const page = await prisma.pages.findFirst({
      where: {
        AND: [{ routerId: router }, { url }],
      },
    });
    if (!page) {
      return okResponse(res, "PAGE_NOT_FOUND");
    }

    return okResponse(res, "fetched page successfully", page);
  } catch (err) {
    next(err);
  }
}

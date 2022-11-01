import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function updatePage(req, res, next) {
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
    const { navBar, page } = req.body;
    const validatePage = await prisma.pages.findFirst({
      where: {
        AND: [{ routerId: router }, { url }],
      },
    });
    if (!validatePage) {
      return badRequestResponse(res, "page doesn't exist");
    }
    const updatedPage = await prisma.pages.updateMany({
      where: {
        AND: [{ routerId: router }, { url }],
      },
      data: {
        navBar,
        page,
      },
    });
    return createdResponse(res, "updated page successfully", updatedPage);
  } catch (err) {
    next(err);
  }
}

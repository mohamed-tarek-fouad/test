import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function createPage(req, res, next) {
  try {
    const { id } = req.params;
    const { url, page } = req.body;
    const validatePage = await prisma.router.findUnique({
      where: {
        domain: id,
      },
    });
    if (!validatePage) {
      return badRequestResponse(res, "router doesnt exist");
    }
    const validateUrl = await prisma.pages.findFirst({
      where: {
        AND: [{ routerId: id }, { url }],
      },
    });
    if (validateUrl) {
      return badRequestResponse(res, "this url alreeady exists");
    }
    const createdPage = await prisma.pages.create({
      data: {
        url,
        page,
        routerId: id,
      },
    });
    return createdResponse(res, "created page successfully", createdPage);
  } catch (err) {
    next(err);
  }
}

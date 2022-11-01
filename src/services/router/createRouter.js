import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function createRouter(req, res, next) {
  try {
    let {
      domain,
      settings,
      phoneNumber,
      whatsapp,
      startAt,
      endAt,
      days,
      estimatedTime,
      location,
      fees,
      type,
    } = req.body;
    const validateRouter = await prisma.router.findUnique({
      where: {
        domain,
      },
    });
    if (validateRouter) {
      return badRequestResponse(res, "domain already exists");
    }
    if (!whatsapp) {
      whatsapp = "null";
    }
    if (!phoneNumber) {
      phoneNumber = "null";
    }
    if (!days) {
      days = "all";
    }
    if (!estimatedTime) {
      estimatedTime = 0;
    }
    if (!fees) {
      fees = 0;
    }
    if (!startAt) {
      startAt = "2000-10-28T18:00:46.100Z";
    }
    if (!endAt) {
      endAt = "2000-10-28T18:00:46.100Z";
    }

    startAt =
      startAt.getHours().toString() + " : " + startAt.getMinutes().toString();

    endAt = endAt.getHours().toString() + " : " + endAt.getMinutes().toString();

    const createRouter = await prisma.router.create({
      data: {
        domain,
        settings,
        phoneNumber,
        whatsapp,
        startAt,
        endAt,
        days,
        estimatedTime,
        location,
        fees,
        type,
      },
    });
    return createdResponse(res, "created router successfully", createRouter);
  } catch (err) {
    next(err);
  }
}

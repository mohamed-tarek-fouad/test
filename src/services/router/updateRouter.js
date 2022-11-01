import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function updateRouter(req, res, next) {
  try {
    const { id } = req.params;
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
      description,
      type,
    } = req.body;
    const validateRouter = await prisma.router.findUnique({
      where: {
        domain: id,
      },
    });
    if (!validateRouter) {
      return badRequestResponse(res, "domain doesn't exists");
    }
    if (!domain) {
      domain = validateRouter.domain;
    }
    if (!settings) {
      settings = validateRouter.settings;
    }
    if (!phoneNumber) {
      phoneNumber = validateRouter.phoneNumber;
    }
    if (!whatsapp) {
      whatsapp = validateRouter.whatsapp;
    }
    if (!startAt) {
      startAt = validateRouter.startAt;
    }
    if (!endAt) {
      endAt = validateRouter.endAt;
    }
    if (!days) {
      days = validateRouter.days;
    }
    if (!estimatedTime) {
      estimatedTime = validateRouter.estimatedTime;
    }
    if (!location) {
      location = validateRouter.location;
    }
    if (!fees) {
      fees = validateRouter.fees;
    }
    if (!description) {
      description = validateRouter.description;
    }
    if (!type) {
      type = validateRouter.type;
    }

    const updatedRouter = await prisma.router.update({
      where: {
        domain: id,
      },
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
        description,
        type,
      },
    });
    return okResponse(res, "updated router successfully", updatedRouter);
  } catch (err) {
    next(err);
  }
}

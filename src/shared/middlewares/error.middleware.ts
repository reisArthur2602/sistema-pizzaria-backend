import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../helpers/errors";
import { ZodError } from "zod";
import { GENERAL_MESSAGES } from "../helpers/general-messages";

export const ErrorMiddleware = (
  err: Error & Partial<ApplicationError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    res.status(400).json({ message: GENERAL_MESSAGES.FILL_DATA_ERROR });
  } else {
    const statusCode = err.statusCode ?? 500;

    const message = err.message ?? GENERAL_MESSAGES.INTERNAL_SERVER_ERROR;

    console.error({ statusCode: err.statusCode, message });

    res.status(statusCode).json({ message });
  }
};

import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../helpers/errors";
import { ZodError } from "zod";

export const ErrorHandler = (
  err: Error & Partial<ApplicationError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    const validationErrors = err.errors.map((err) => ({
      path: err.path[0],
      message: err.message,
    }));
    console.error(validationErrors);
    res.status(400).json(validationErrors);
  } else {
    const statusCode = err.statusCode ?? 500;

    const message = err.message ?? "Internal Server Error";

    console.error({ message });

    res.status(statusCode).json({ message });
  }
};

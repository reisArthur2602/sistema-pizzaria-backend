import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../helpers/errors";

export const isError = (
  err: Error & Partial<ApplicationError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode ?? 500;
  const message = err.message ?? "Internal Server Error";

  console.error({ message });
  res.status(statusCode).json({ message });
};

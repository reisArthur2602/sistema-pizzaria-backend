import { NextFunction, Request, RequestHandler, Response } from "express";

import { verify } from "jsonwebtoken";
import { UnauthorizedError } from "../helpers/errors";

interface Payload {
  sub: string;
}

export const AuthenticatedMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken = req.headers.authorization;

  if (!authToken) throw new UnauthorizedError("O usuário não está autenticado");

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET as string) as Payload;
    req.userId = sub;
    return next();
  } catch (error) {
    throw new UnauthorizedError("O usuário não está autenticado");
  }
};

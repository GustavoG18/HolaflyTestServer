import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import crypto from "crypto";

export const SECRET_KEY = crypto.randomBytes(256).toString("hex");

export function generateToken(payload: object): string {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET_KEY, (err, _) => {
      if (err) {
        return res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

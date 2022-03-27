import { RequestHandler as Middleware } from "express";
import { verifyJwt } from "../util";

const deserializeUser: Middleware = async (req, res, next) => {
  const accessToken = (req.headers.authorization || "").replace(
    /^Bearer\s/,
    ""
  );

  if (!accessToken) {
    return next();
  }

  const decoded = verifyJwt<{
    _id: string;
    email: string;
    name: string;
    createdAt: number;
    updatedAt: number;
  }>(accessToken, "accessTokenPublicKey");

  if (decoded) {
    res.locals.user = decoded;
  }

  return next();
};

export default deserializeUser;

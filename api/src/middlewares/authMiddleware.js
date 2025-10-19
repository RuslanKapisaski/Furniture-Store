import jwt from "jsonwebtoken";
import getErrorMessage from "../utils/errorUtil.js";

export function authMiddleware(req, res, next) {
  const token = req.header("X-Authorization");

  if (!token) {
    return next();
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decodedToken;

    next();
  } catch (err) {
    const errorMessage = getErrorMessage(err);
    res.status(401).json({ message: errorMessage });
  }
}

import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appErros";

const globalErrorsMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      messsage: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};

export default globalErrorsMiddleware;

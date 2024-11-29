import { Response } from "express";
import { CustomError } from "./custom-error";

export const hanldeError = (res: Response, error: unknown) => {
  if (error instanceof CustomError) {
    res.status(error.statusCode).json({ error: error.message });
    return;
  }

  res.status(500).json({ error: "Internal server error - check logs" });
};

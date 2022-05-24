import { Response } from "express";

export class AppError extends Error {
    statusCode;

    constructor(statusCode: number, message: string) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
};

export const handleError = (err: AppError, response: Response) => {
    const { statusCode, message } = err;

    return response.status(statusCode).json({
        status: "ok",
        message: message
    })
};
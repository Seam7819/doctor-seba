import { NextFunction, Request, RequestHandler, Response } from "express";

export const catchAsync = (fn: RequestHandler) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next);
        } catch (error: any) {
            const statusCode = Number(error?.statusCode || error?.status || 500);
            const message = error?.message || "Internal Server Error";

            res.status(statusCode).json({
                success: false,
                message,
                ...(error?.code ? { code: error.code } : {}),
            });
        }
    }
};
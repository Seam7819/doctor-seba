import { NextFunction, Request, Response } from "express";
import status from "http-status";

export const globalErrorHandler = (err:any, req:Request, res:Response, next:NextFunction) => {
    console.error("Unhandled server error:", err);

    const statusCode : number = status.INTERNAL_SERVER_ERROR;
    const message : string = 'INTERNAL_SERVER_ERROR';
    return res.status(statusCode).json({
        success: false,
        message: message,
        err: err.message || "An unexpected error occurred."
    });
}
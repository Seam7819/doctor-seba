import { Request, Response } from "express";
import { authService } from "./auth.service";
import { sendResponse } from "../../shared/sendResponse";

const registerPatient = async(req:Request, res:Response)=>{
    const payload = req.body;

    const result = await authService.registerPatient(payload);

    sendResponse(res, {
        httpStatusCode : 201,
        success : true,
        message : "Register Successful",
        data : result
    })
}

export const authController = {
    registerPatient
}
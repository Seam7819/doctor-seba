import { Request, Response } from "express";
import { authService } from "./auth.service";
import { sendResponse } from "../../shared/sendResponse";
import { catchAsync } from "../../shared/catchAsync";

const registerPatient = catchAsync(async (req: Request, res: Response) => {
    const payload = req.body;

    const result = await authService.registerPatient(payload);

    sendResponse(res, {
        httpStatusCode: 201,
        success: true,
        message: "Register Successful",
        data: result,
    });
});


const logInUser = catchAsync(
    async(req:Request,res:Response)=>{
        const payLoad = req.body;
        const result = await authService.logInPatient(payLoad);
        sendResponse(res,{
            httpStatusCode: 200,
            success: true,
            message : "logIn successful",
            data: result
        })
    }
)

export const authController = {
    registerPatient,
    logInUser,
};
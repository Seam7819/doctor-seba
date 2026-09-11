import express, { NextFunction, Request, Response } from "express";
import { indexRoutes } from "./app/routes";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFound";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", indexRoutes);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof SyntaxError && "body" in error) {
        return res.status(400).json({
            success: false,
            message: "Invalid JSON payload",
            error: "Request body is not valid JSON."
        });
    }

    console.error("Unhandled server error:", error);
    return res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
});

app.use(globalErrorHandler);
app.use(notFound)

export default app;
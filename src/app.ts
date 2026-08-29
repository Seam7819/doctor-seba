import express, { Request, Response } from "express";
import { prisma } from "./app/lib/prisma";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async(req:Request, res:Response) => {
     const specialty = await prisma.specialty.create({
        data : {
            title: "Cardiology",
        }
     })
     res.status(201).json({
        message: "Specialty created successfully",
        data: specialty
     })
});

export default app;
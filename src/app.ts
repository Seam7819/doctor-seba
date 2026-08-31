import express, { Request, Response } from "express";
import { prisma } from "./app/lib/prisma";
import { indexRoutes } from "./app/routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", indexRoutes);

export default app;
import { Router } from "express";
import { specialtyRoutes } from "../module/specialty/specailty.routes";
import { authRoutes } from "../module/auth/auth.routes";

const router = Router();

router.use("/specialty", specialtyRoutes);  
router.use("/auth", authRoutes);  


export const indexRoutes = router;
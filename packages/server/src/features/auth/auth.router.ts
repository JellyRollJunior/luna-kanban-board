import { Router } from "express";
import * as authController from '@/features/auth/auth.controller.js'

const authRouter = Router();

authRouter.post("/signup", authController.postSignup);

export { authRouter}
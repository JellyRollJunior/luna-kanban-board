import { Router } from 'express';
import { signupInputSchema } from '@/features/auth/input.schema.js';
import { validateBody } from '@/middleware/validate.js';
import * as authController from '@/features/auth/controller.js';

const authRouter = Router();

authRouter.post(
    '/signup',
    validateBody(signupInputSchema),
    authController.postSignup
);

export { authRouter };

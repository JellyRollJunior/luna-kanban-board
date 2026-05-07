import { Router } from 'express';
import { passport } from '@/features/auth/passport/passport.js';
import { signupInputSchema } from '@/features/auth/input.schema.js';
import { validateRequestBody } from '@/middleware/validate.js';
import * as authController from '@/features/auth/controller.js';

const authRouter = Router();

authRouter.post(
    '/signup',
    validateRequestBody(signupInputSchema),
    authController.postSignup
);
authRouter.post(
    '/login',
    passport.authenticate('local', { session: false }),
    (_req, res, _next) => {
        res.json('successful authentication');
    }
);

export { authRouter };

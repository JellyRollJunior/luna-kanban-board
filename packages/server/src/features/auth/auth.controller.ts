import type { Request, Response, NextFunction } from 'express';
import * as userQueries from '@/features/users/user.queries.js';

const postSignup = async (
    req: Request<
        {},
        {},
        { username: string; password: string; displayName: string }
    >,
    res: Response,
    next: NextFunction
) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const displayName = req.body.displayName;

        const newUser = await userQueries.createUser(
            username,
            password,
            displayName
        );
        res.json(newUser);
    } catch (error) {
        next(error);
    }
};

export { postSignup };

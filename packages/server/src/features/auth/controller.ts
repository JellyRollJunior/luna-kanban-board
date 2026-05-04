import type { Request, Response, NextFunction } from 'express';
import { mapUserToDto } from '@/features/users/mapper.js';
import { userDtoSchema } from '@/features/users/dto.schema.js';
import * as userQueries from '@/features/users/queries.js';

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
        const { username, password, displayName } = req.body;
        const newUser = await userQueries.createUser(
            username,
            password,
            displayName
        );

        const mappedOutput = mapUserToDto(newUser);
        const validatedOutput = userDtoSchema.parse(mappedOutput);
        res.json(validatedOutput);
    } catch (error) {
        next(error);
    }
};

export { postSignup };

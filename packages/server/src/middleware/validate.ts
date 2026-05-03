import type { NextFunction, Request, RequestHandler, Response } from 'express';
import type { ZodType } from 'zod';

/* Returns a middleware which validates request body using provided zod schema */
const validateBody = <T>(
    validationSchema: ZodType<T, unknown>
): RequestHandler => {
    return (req: Request, _res: Response, next: NextFunction) => {
        const result = validationSchema.safeParse(req.body);
        if (!result.success) {
            
            // throw validation error to next()
            throw new Error('Internal server error');
        }
        req.body = result.data;
        next();
    };
};

export { validateBody };

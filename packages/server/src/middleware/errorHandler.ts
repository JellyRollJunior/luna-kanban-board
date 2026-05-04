import type { Errback, NextFunction, Request, Response } from 'express';

const errorHandler = (
    err: Errback,
    req: Request,
    res: Response,
    _next: NextFunction
) => {
    res.status(500).json(err);
};

export { errorHandler };

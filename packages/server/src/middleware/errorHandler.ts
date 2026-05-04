import type { Errback, NextFunction, Request, Response } from 'express';
import { z, ZodError } from 'zod';
import { BaseError } from '@/errors/BaseError.js';
import { ValidationError } from '@/errors/ValidationError.js';
import { mapErrorToDto, mapValidationErrorToDto } from '@/errors/mapper.js';

const errorHandler = (
    err: Errback,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    if (err instanceof ZodError) {
        const validationError = new ValidationError(
            z.flattenError(err).fieldErrors
        );
        const validationErrorDto = mapValidationErrorToDto(validationError);
        res.status(validationErrorDto.status).json(validationErrorDto);
    } else if (err instanceof BaseError) {
        const errorDto = mapErrorToDto(err);
        res.status(errorDto.status).json(errorDto);
    } else {
        const errorDto = mapErrorToDto(new BaseError());
        res.status(errorDto.status).json(errorDto);
    }
};

export { errorHandler };

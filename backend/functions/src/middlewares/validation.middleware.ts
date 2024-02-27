import { HttpException } from '@exceptions/http.exception';
import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { RequestHandler, Request, Response, NextFunction } from 'express';

const validationMiddleware = (
    type: any,
    value: string | 'body' | 'query' | 'params' = 'body',
    skipMissingProperties = false,
    whitelist = true,
    forbidNonWhitelisted = true,
): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction) => {
        validate(plainToInstance(type, req[value as keyof Request]), { skipMissingProperties, whitelist, forbidNonWhitelisted }).then(
            (errors: ValidationError[]) => {
                if (errors.length > 0) {
                    const message = errors.map((error: ValidationError) => Object.values(error.constraints!)).join(', ');
                    next(new HttpException(400, message));
                } else {
                    next();
                }
            },
        );
    };
};

export default validationMiddleware;

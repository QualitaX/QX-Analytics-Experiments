import { logger } from '@config/firebase.config';
import { HttpException } from '@exceptions/http.exception';
import { ErrorResponse } from '@schemas/response.schema';
import { NextFunction, Request, Response } from 'express';

const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
    try {
        const status: number = error.status || 500;
        const message: string = error.message || 'Unknown Server Error';
        const stack = error.stack || '';

        logger.error(`[${req.method}] ${req.path}`, `StatusCode:: ${status}`, ` Message:: ${message}`, `Stack:: ${stack}`);
        res.status(status).send(new ErrorResponse(status, message));
        return;
    } catch (error) {
        next(error);
    }
};

export default errorMiddleware;

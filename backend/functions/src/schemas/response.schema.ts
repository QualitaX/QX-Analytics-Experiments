/**
 * @swagger
 * components:
 *   schemas:
 *     BasicResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         data: {}
 */
interface BasicResponse {
    status?: number;
    message?: string;
    data?: any;
}

export class SuccessResponse implements BasicResponse {
    status: number;
    message: string;
    data: any;

    constructor(data: any, status: number = 200, message: string = 'success') {
        this.data = data;
        this.message = message;
        this.status = status;
    }
}

export class ErrorResponse implements BasicResponse {
    status: number;
    message: string;
    data?: any = undefined;

    constructor(status: number, message: string, data?: any) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}

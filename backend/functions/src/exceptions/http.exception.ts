export class HttpException extends Error {
    public status: number;
    public message: string;
    public stack?: any;

    constructor(status: number, message: string, stack?: any) {
        super(message);
        this.status = status;
        this.message = message;
        this.stack = stack;
    }
}

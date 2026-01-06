class ApiError extends Error {
    constructor({ message = "something want wrong", statusCode, errors = [], stacks = [] }) {
        super(message);
        this.message = message;
        this.statusCode = statusCode || 400;
        this.errors = errors;
        this.success = false;
        this.data = null;

        if (stacks) {
            this.stacks = stacks;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError;
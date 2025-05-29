export const errorHandler = (statusCode, info) => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = info;
    return error;
}
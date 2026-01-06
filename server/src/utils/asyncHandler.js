import ApiResponse from "./ApiResponse.js";

export const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(new ApiResponse({
            message: error.message || "Internal Server Error",
            data: null,
            statusCode: error.statusCode || 500
        }));
    }
}
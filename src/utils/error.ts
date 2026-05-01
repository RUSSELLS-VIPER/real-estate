import mongoose from "mongoose";

export const logError = (scope: string, error: unknown) => {
    console.error(`[${scope}]`, error);
};

export const toErrorResponse = (error: unknown) => {
    if (error instanceof mongoose.Error.ValidationError) {
        return {
            message: "Validation failed",
            details: Object.values(error.errors).map((e) => e.message)
        };
    }

    if (error instanceof mongoose.Error.CastError) {
        return {
            message: `Invalid value for ${error.path}`,
            details: error.message
        };
    }

    if (error instanceof Error) {
        return { message: error.message };
    }

    return { message: "Internal server error" };
};

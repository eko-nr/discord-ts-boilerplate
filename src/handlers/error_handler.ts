import { ErrorParams } from "../types/types";

export default function errorHandler<T extends any[]>(fn: (...args1: [...T, ErrorParams]) => Promise<void>) {
    return async function (...args2: T) {
        try {
            await fn(...args2, {
                isError: false,
                errors: null
            });
        } catch (error: any) {
            await fn(...args2, {
                isError: true,
                errors: error
            })
        }
    };
}
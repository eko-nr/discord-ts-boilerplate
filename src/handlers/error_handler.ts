export default function errorHandler<T extends any[]>(fn: (...args1: T) => Promise<void>) {
    return async function (...args2: T) {
        try {
            await fn(...args2);
        } catch (error) {

        }
    };
}
export default async function errorHandler<T>(fn: (...args: any[]) => Promise<void>) {
    return async function (...args: any[]) {
        try {
            await fn(...args);
        } catch (error) {
            console.error('Error:', error);
        }
    };
}
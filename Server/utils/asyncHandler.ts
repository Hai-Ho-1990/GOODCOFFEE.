import { Request, Response, NextFunction } from 'express';

// Wrapper för att hantera asynkrona funktioner i Express
const asyncHandler = (fn: Function) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next); // Fångar alla asynkrona fel och vidarebefordrar dem till next()
    };
};

export default asyncHandler;

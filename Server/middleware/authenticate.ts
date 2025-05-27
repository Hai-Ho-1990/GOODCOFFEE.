import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

declare module 'express-serve-static-core' {
    interface Request {
        user: {
            id: number;
            username: string;
            admin: boolean;
        };
    }
}

export function authenticate(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ message: 'No token provided' });
        return;
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, 'minhemlighetcode') as {
            id: number;
            username: string;
            admin: boolean;
        };
        req.user = {
            id: decoded.id,
            username: decoded.username,
            admin: decoded.admin
        };
        next();
    } catch (err) {
        res.status(403).json({ err: 'Invalid token' });
    }
}

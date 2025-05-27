import { Request, Response, NextFunction } from 'express';

export function isAdmin(req: Request, res: Response, next: NextFunction) {
    if (!req.user?.admin) {
        return res.status(403).json({ message: 'Access denied: Admins only' });
    }
    next();
}

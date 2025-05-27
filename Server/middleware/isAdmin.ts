import { Request, Response, NextFunction } from 'express';

export function isAdmin(req: Request, res: Response, next: NextFunction): void {
    if (!req.user?.admin) {
        res.status(403).json({ message: 'Access denied: Admins only' });
        return;
    }
    next();
}

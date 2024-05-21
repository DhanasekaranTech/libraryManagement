import { Request, Response, NextFunction } from 'express';
import { authMiddleware } from './authMiddleware';

export const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  authMiddleware(req, res, (err: any) => {
    if (err) {
      return next(err);
    }
    const user = (req as any).user;
    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: Admins only' });
    }
    next();
  });
};

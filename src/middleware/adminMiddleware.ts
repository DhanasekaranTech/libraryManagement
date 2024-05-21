import { Request, Response, NextFunction } from 'express';
import { authMiddleware } from './authMiddleware';

export const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    authMiddleware(req, res, (err: any) => {
      if (err) {
        return next(err);
      }
      const user = (req as any).user;
      if (!user || user.role !== 'admin') {
        return res.status(403).json({ message: 'Forbidden: Admins only' });
      }
      next();
    });
  } catch (error) {
    return next(error);
  }
};

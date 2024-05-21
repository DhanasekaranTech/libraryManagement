import { Router } from 'express';
import { getUserBooks } from '../controllers/adminController';

export const router = Router();

router.get('/userbooks', getUserBooks);


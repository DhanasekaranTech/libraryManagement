import { Router } from 'express';
import {  viewBooks, borrowBook ,viewBorrowedBooks} from '../controllers/userController';

const router = Router();


router.get('/books', authMiddleware , viewBooks);
router.post('/borrow',authMiddleware , borrowBook);
router.get('/borrowed',authMiddleware,viewBorrowedBooks);


export{
    router as userRoutes
}
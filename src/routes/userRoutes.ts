import { Router } from 'express';
import { createUser,signIn } from '../controllers/userController';

const router = Router();

router.post("/signup", (req, res) => createUser(req, res));
router.post('/signin',(req,res)=> signIn(req,res))

export default router;

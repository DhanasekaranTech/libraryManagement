import express from "express";
const router = express.Router(); 
import { get, post, del } from "../controllers/adminController"; 

router.post('/postBook', post);
router.get('/show', get);
router.delete('/deleteBook/:id', del); 

export const routes = router;

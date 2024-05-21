import { Router } from 'express';
import { getUserBooks, deleteUB, updateUB, showbook , addnewbook , deletebook } from "../controllers/adminController";
import { adminMiddleware } from '../middleware/adminMiddleware';
const router = Router();

// Endpoint to get all userbook
router.get("/AllUsers", adminMiddleware, getUserBooks);

router.post('/postBook', adminMiddleware, addnewbook );
router.get('/show', adminMiddleware, showbook );
router.delete('/deleteBook/:id', deletebook); 

//create router for admin to delete a UB data
router.delete("/deleteUB", adminMiddleware, deleteUB);

//create route for admin to update a UB data
router.put("/updateUB", adminMiddleware, updateUB);

export { router as adminRoutes };


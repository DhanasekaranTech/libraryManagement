import { Router } from 'express';
import { getUser, deleteUB, updateUB, addnewbook , deletebook } from "../controllers/adminController";
import { adminMiddleware } from '../middleware/adminMiddleware';
const router = Router();

// Endpoint to get all userbook
router.get("/AllUsers", adminMiddleware, getUser);

router.post('/postBook', adminMiddleware, addnewbook );
router.delete('/deleteBook/:id',adminMiddleware, deletebook); 

//create router for admin to delete a UB data
router.delete("/deleteUB", adminMiddleware, deleteUB);

//create route for admin to update a UB data
router.put("/updateUB", adminMiddleware, updateUB);

export { router as adminRoutes };


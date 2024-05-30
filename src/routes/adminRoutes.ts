import { Router } from 'express';


import { getUserBooks, getUser, deleteUB, updateUB, addnewbook , deletebook } from "../controllers/adminController";
import { adminMiddleware } from '../middleware/adminmiddleware';
const router = Router();

// Endpoint to get all userbook
router.get('/userbooks', getUserBooks);
router.get("/AllUsers", adminMiddleware, getUser);

router.post('/postBook', adminMiddleware, addnewbook );
router.delete('/deleteBook/:id',adminMiddleware, deletebook); 

//create router for admin to delete a UB data
router.delete("/deleteUB", adminMiddleware, deleteUB);

//create route for admin to update a UB data
router.put("/updateUB", adminMiddleware, updateUB);

export { router as adminRoutes };


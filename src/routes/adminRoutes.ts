import { Router } from 'express';
import { getUserBooks, deleteUB, updateUB } from "../controllers/adminController";
import { adminMiddleware } from '../middleware/adminmiddleware';
const router = Router();

// Endpoint to get all userbook
router.get("/AllUsers", adminMiddleware, getUserBooks);

//create router for admin to delete a UB data
router.delete("/deleteUB", adminMiddleware, deleteUB);

//create route for admin to update a UB data
router.patch("/updateUB", adminMiddleware, updateUB);

export { router as adminRoutes };


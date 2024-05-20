import { Router } from "express";
import { deleteUB, updateUB } from "../controllers/adminController";
const router = Router();

//create router for admin to delete a UB data
router.delete("/deleteUB", adminMiddleware, deleteUB);

//create route for admin to update a UB data
router.patch("/updateUB", adminMiddleware, updateUB);

export { router as adminRoutes };

import { Router } from "express";
import { deleteUB, updateUB } from "../controllers/adminController";
const router = Router();

//create router for admin to delete a UB-ID
router.delete("/deleteUB", adminMiddleware, deleteUB);

//create route for admin to update a UB-ID
router.patch("/updateUB", adminMiddleware, updateUB);

export { router as adminRoutes };

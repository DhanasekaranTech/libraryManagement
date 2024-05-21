import { Router } from "express";
import { deleteUB, updateUB ,showbook , addnewbook , deletebook} from "../controllers/adminController";
const router = Router();

router.post('/postBook', addnewbook );
router.get('/show', showbook );
router.delete('/deleteBook/:id', deletebook); 

//create router for admin to delete a UB data
router.delete("/deleteUB", adminMiddleware, deleteUB);

//create route for admin to update a UB data
router.patch("/updateUB", adminMiddleware, updateUB);
import
export { router as adminRoutes };
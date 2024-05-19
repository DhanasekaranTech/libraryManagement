import { Router } from "express";

const router = Router();


//create router for admin to delete a UB-ID
router.delete('/viewUserBook/deleteUB',/*adminMiddleware,deleteUB*/)

//create route for admin to update a UB-ID
router.patch('/viewUserBook/updateUB',/*adminMiddleware,updateUB*/)




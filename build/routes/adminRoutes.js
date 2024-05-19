"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//create router for admin to delete a UB-ID
router.delete('/viewUserBook/deleteUB');
//create route for admin to update a UB-ID
router.patch('/viewUserBook/updateUB');

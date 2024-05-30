"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const userBookController_1 = require("../controllers/userBookController");
exports.router = (0, express_1.Router)();
exports.router.get('/UserBookController', userBookController_1.getUserBooks);
exports.default = exports.router;

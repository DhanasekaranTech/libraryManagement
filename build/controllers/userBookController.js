"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserBooks = void 0;
const dbConfig_1 = require("../dbConfig");
const UserBookTable_1 = require("../models/UserBookTable");
const getUserBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userBookRepository = dbConfig_1.AppDataSource.getRepository(UserBookTable_1.UserBook);
        const userBooks = yield userBookRepository.find({
            relations: ["user", "book"],
        });
        res.json(userBooks);
    }
    catch (error) {
        console.error("Error fetching user books:", error);
        res.status(500).json({ message: "Error fetching user books" });
    }
});
exports.getUserBooks = getUserBooks;

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
exports.checkConnection = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const book_1 = require("./models/book");
require("dotenv/config");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: parseInt(process.env.DB_port),
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    synchronize: true,
    logging: false,
    entities: [book_1.Book],
    migrations: [],
    subscribers: [],
});
const checkConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.AppDataSource.initialize();
        console.log("db connected successfully");
    }
    catch (error) {
        console.log("cannot connect to db", error);
    }
});
exports.checkConnection = checkConnection;

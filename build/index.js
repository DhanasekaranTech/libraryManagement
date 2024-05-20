"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dbConfig_1 = require("./dbConfig");
require("reflect-metadata");
exports.app = (0, express_1.default)();
const PORT = 2024;
exports.app.use(express_1.default.json());
//app.use("/user", userRoutes);
//app.use("/admin", adminRoutes);
exports.app.get("/", (req, res) => {
    return res.json({ message: "successssss" });
});
exports.app.listen(PORT, () => {
    console.log(`listening in port ${PORT}`);
    (0, dbConfig_1.checkConnection)();
});

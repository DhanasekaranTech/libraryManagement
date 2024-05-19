"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConfig_1 = require("./dbConfig");
const app = (0, express_1.default)();
const PORT = 2024;
app.use(express_1.default.json());
//app.use("/user", userRoutes);
//app.use("/admin", adminRoutes);
app.get("/", (req, res) => {
    return res.json({ message: "successssss" });
});
app.listen(PORT, () => {
    console.log(`listening in port ${PORT}`);
    (0, dbConfig_1.checkConnection)();
});

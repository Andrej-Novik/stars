"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stars_1 = __importDefault(require("./stars"));
const app = (express_1.default.Application = express_1.default());
app.use(express_1.default.json());
app.use(express_1.default.json({ limit: "10mb" }));
app.use("/api/stars", stars_1.default);
exports.default = app;

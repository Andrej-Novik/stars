"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connector_1 = __importDefault(require("./connector"));
const stars_1 = __importDefault(require("./stars"));
class DB {
    constructor() {
        this.connector = connector_1.default;
        this.stars = stars_1.default;
    }
}
exports.default = new DB();

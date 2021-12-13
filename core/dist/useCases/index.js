"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const starsService_1 = __importDefault(require("./starsService"));
class UseCases {
    constructor() {
        this.StarsService = starsService_1.default;
    }
}
exports.default = new UseCases();

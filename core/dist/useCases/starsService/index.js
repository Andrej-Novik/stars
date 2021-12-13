"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stars_1 = __importDefault(require("../../repository/database/stars"));
class StarsService {
    constructor() {
        this.getList = async () => {
            const { value, error } = await stars_1.default.getList();
            if (error)
                return { error: error };
            return { value: value };
        };
        this.getStar = async (id) => {
            const { value, error } = await stars_1.default.getStar(id);
            console.log(value);
            if (error)
                return { error: error };
            return { value: value };
        };
        this.createStar = async (name, galaxy, img, text) => {
            const { value, error } = await stars_1.default.createStar(name, galaxy, img, text);
            if (error)
                return { error: error };
            return { value: value };
        };
        this.deleteStar = async (id) => {
            const { value, error } = await stars_1.default.deleteStar(id);
            if (error)
                return { error: error };
            return { value: value };
        };
        this.getStarByName = async (name) => {
            const { value, error } = await stars_1.default.getStarByName(name);
            if (error)
                return { error: error };
            return { value: value };
        };
        this.getStarsByQuery = async () => {
            const { value, error } = await stars_1.default.getStarsByQuery();
            if (error)
                return { error: error };
            return { value: value };
        };
    }
}
exports.default = new StarsService();

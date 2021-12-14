"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const star_1 = require("../../models/dbm/star");
const connector_1 = __importDefault(require("./connector"));
class StarRepository {
    constructor() {
        this.getList = async () => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(star_1.StarItem).find());
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
        this.getStar = async (id) => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(star_1.StarItem).findOne({ where: { id } }));
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
        this.createStar = async (name, galaxy, img, text) => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(star_1.StarItem).save({ name, galaxy, img, text }));
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
        this.deleteStar = async (id) => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(star_1.StarItem).delete(id));
                return { value: !!response.affected };
            }
            catch (e) {
                return { error: e };
            }
        };
        this.getStarByName = async (name) => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(star_1.StarItem).findOne({ where: { name } }));
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
        this.getStarsByQuery = async () => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(star_1.StarItem).find());
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
    }
}
exports.default = new StarRepository();

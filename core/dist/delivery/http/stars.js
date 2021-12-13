"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const useCases_1 = __importDefault(require("../../useCases"));
router.get("", async (req, res) => {
    const { value, error } = await useCases_1.default.StarsService.getList();
    if (error) {
        res.status(500).json(error || new Error("UC undefined error"));
        return;
    }
    res.status(200).json(value);
});
router.get("/pagination/", async (req, res) => {
    const { value, error } = await useCases_1.default.StarsService.getStarsByQuery();
    if (error) {
        res.status(500).json(error || new Error("UC undefined error"));
        return;
    }
    res.status(200).json(value);
});
router.post("", async (req, res) => {
    const { value, error } = await useCases_1.default.StarsService.createStar(req.body.name, req.body.galaxy, req.body.img, req.body.text);
    if (error) {
        res.status(500).json(error || new Error("UC undefined error"));
        return;
    }
    res.status(200).json(value);
});
router.delete("/:id", async (req, res) => {
    const { value, error } = await useCases_1.default.StarsService.deleteStar(req.params.id);
    if (error) {
        res.status(500).json(error || new Error("UC undefined error"));
        return;
    }
    res.status(200).json(value);
});
router.get("/:id", async (req, res) => {
    const { value, error } = await useCases_1.default.StarsService.getStar(req.params.id);
    if (error) {
        res.status(500).json(error || new Error("UC undefined error"));
        return;
    }
    res.status(200).json(value);
});
router.get("/search/:name", async (req, res) => {
    const { value, error } = await useCases_1.default.StarsService.getStarByName(req.params.name);
    if (error) {
        res.status(500).json(error || new Error("UC undefined error"));
        return;
    }
    res.status(200).json(value);
});
exports.default = router;

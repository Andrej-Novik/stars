import express from "express";
const router = express.Router();
import UseCases from "../../useCases";

router.get("", async (req, res) => {
  const { value, error } = await UseCases.StarsService.getList();
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

router.get("/pagination/", async (req, res) => {
  const { value, error } = await UseCases.StarsService.getStarsByQuery();
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});
router.post("", async (req, res) => {
  const { value, error } = await UseCases.StarsService.createStar(
    req.body.name,
    req.body.galaxy,
    req.body.img,
    req.body.text
  );
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

router.delete("/:id", async (req, res) => {
  const { value, error } = await UseCases.StarsService.deleteStar(
    req.params.id
  );
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

router.get("/:id", async (req, res) => {
  const { value, error } = await UseCases.StarsService.getStar(req.params.id);
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});
router.get("/search/:name", async (req, res) => {
  const { value, error } = await UseCases.StarsService.getStarByName(
    req.params.name
  );
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

export default router;

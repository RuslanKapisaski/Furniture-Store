import { Router } from "express";
import furnitureService from "../services/furnitureService.js";
import getErrorMessage from "../utils/errorUtil.js";

const furnitureController = Router();

furnitureController.get("/", async (req, res) => {
  const furnitures = await furnitureService.getAll();
  res.json(furnitures ?? []);
});

furnitureController.get("/:furnitureId", async (req, res) => {
  const furnitureId = req.params.furnitureId;
  const furniture = await furnitureService.getOne(furnitureId);

  res.json(furniture);
});

furnitureController.post("/", async (req, res) => {
  const furnitureData = req.body;
  const ownerId = req.user.id;
  try {
    const furniture = await furnitureService.create(furnitureData, ownerId);
    res.status(201).json(furniture);
  } catch (err) {
    const errorMessage = getErrorMessage(err);
    throw new Error(`Error with creating a new furniture: ${errorMessage}`);
  }
});

export default furnitureController;

import { Router } from "express";
import furnitureService from "../services/furnitureService.js";
import getErrorMessage from "../utils/errorUtil.js";

const furnitureController = Router();

furnitureController.get("/", async (req, res) => {
  const furnitures = await furnitureService.getAll();
  res.json(furnitures ?? []);
});

furnitureController.post("/", async (req, res) => {
  const furnitureData = req.body;
  try {
    const furniture = await furnitureService.create(furnitureData);
    res.status(201).json(furniture);
  } catch (err) {
    const errorMessage = getErrorMessage(err);
    throw new Error(`Error with creating a new furniture: ${errorMessage}`);
  }
});

export default furnitureController;

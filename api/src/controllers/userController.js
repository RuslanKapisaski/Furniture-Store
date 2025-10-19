import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await userService.register(email, password);
    res.status(201).end();
  } catch (err) {
    throw new Error(`Unsuccessful registration: ${err.message}`);
  }

  res.end();
});

export default userController;

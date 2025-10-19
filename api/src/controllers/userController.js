import { Router } from "express";
import userService from "../services/userService.js";
import getErrorMessage from "../utils/errorUtil.js";

const userController = Router();

userController.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await userService.register(email, password);
    res.status(201).end();
  } catch (err) {
    const errorMessage = getErrorMessage(err);
    throw new Error(`Unsuccessful registration: ${errorMessage}`);
  }

  res.end();
});

userController.post("/login", async (req, res) => {
  const { email, password } = req.data;

  try {
    const user = await userService.login({ email, password });
    //  res.status(201).json({});
  } catch (err) {
    const errorMessage = getErrorMessage(err);
    res.status(400).end();
  }
});
export default userController;

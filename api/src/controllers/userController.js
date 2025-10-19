import { Router } from "express";

const userController = Router();

userController.post("/register", async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);

  res.end();
});

export default userController;

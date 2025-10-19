import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";

export default {
  async register(email, password) {
    const user = await User.findOne({ email });

    if (user) {
      throw new Error("This user already exists");
    }

    const newUser = await User.create({ email, password });

    const token = generateToken(newUser);

    return {
      _id: newUser._id,
      email: newUser.email,
      accessToken: token,
    };
  },

  async login(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Invalid email or password!");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error("Invalid email or password!");
    }

    //Generate token
    const token = generateToken(user);

    return {
      _id: user._id,
      email,
      accessToken: token,
    };
  },
};

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

export default {
  async register(email, password) {
    const user = await User.findOne({ email });
    if (user) {
      throw new Error("This user already exists");
    }
    return User.create({ email, password });
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
    const payload = {
      id: user.id,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    return {
      _id: user._id,
      email,
      accessToken: token,
    };
  },
};

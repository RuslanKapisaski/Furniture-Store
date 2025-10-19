import bcrypt from "bcrypt";

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
    const user = User.findOne({ email });
    if (!user) {
      throw new Error("Invalid email or password!");
    }

    const isValidPassword = bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error("Invalid email or password!");
    }

    //Generate token
    return user;
  },
};

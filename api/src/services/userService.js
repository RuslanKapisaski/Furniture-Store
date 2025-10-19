import User from "../models/User.js";

export default {
  register(email, password) {
    const user = User.find({ email });
    if (user) {
      throw new Error("This user already exists");
    }
    return User.create({ email, password });
  },
};

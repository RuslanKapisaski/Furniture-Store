import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required!"],
    match: [/^[a-zA-Z0-9_%+-]+@(abv\.bg|gmail\.com)$/, "Enter valid email!"],
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    minLength: [6, "Password should be at lest 6 characters long!"],
  },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

const User = model("User", userSchema);

export default User;

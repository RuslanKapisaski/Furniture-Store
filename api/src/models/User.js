import { Schema, model } from "mongoose";

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

const User = model("User", userSchema);

export default User;

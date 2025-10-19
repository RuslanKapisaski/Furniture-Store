import { Schema, model } from "mongoose";

const furnitureSchema = new Schema({
  make: {
    type: String,
    required: [true, "Make is required!"],
    minLength: [4, "Make should be at least 4 characters long!"],
  },
  model: {
    type: String,
    required: [true, "Model is required!"],
    minLength: [4, "Model should be at least 4 characters long!"],
  },
  year: {
    type: Number,
    min: [1950, "Year should be in range 1950-2050"],
    max: [2050, "Year should be in range 1950-2050"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
    minLength: [10, "Description should be at least 10 characters long!"],
  },
  price: {
    type: Number,
    min: [0, "Price should be a positive number!"],
  },
  imageUrl: {
    type: String,
    required: [true, "Image is required!"],
  },
  material: {
    type: String,
    required: false,
  },
});

const Furniture = model("Furniture", furnitureSchema);

export default Furniture;

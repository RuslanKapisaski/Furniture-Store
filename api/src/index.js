import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./routes.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(authMiddleware);
app.use(routes);

try {
  await mongoose.connect("mongodb://localhost:27017", {
    dbName: "furniture-store",
  });
  console.log("Successful connection with MongoDB!");
} catch (err) {
  throw new Error(`Unsuccessful database connection: ${err.message}`);
}

app.listen(3030, () => "Sever is listening on http://localhost:3030");

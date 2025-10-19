import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import routes from "./routes.js";

const app = express();

app.use(cors());
app.use(express.json());
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

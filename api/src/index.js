import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Works");
});

app.listen(3030, () => "Sever is listening on http://localhost:3030");

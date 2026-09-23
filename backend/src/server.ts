import "dotenv/config";
import express from "express";

import noteRouters from "./routes/noteRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/notes", noteRouters);

app.get("/", async (req, res) => {
  res.json("oii");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

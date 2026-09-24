import express from "express";

import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import { ENV } from "./config/env.js";
import noteRouters from "./routes/noteRoutes.js";

const app = express();
const port = ENV.PORT || 3000;
app.use(cors({ origin: ENV.FRONTEND_URL }));
app.use(express.json());
app.use(clerkMiddleware());
app.use(express.urlencoded({ extended: true }));

app.use("/notes", noteRouters);

app.get("/", async (req, res) => {
  res.json({
    message: "Notepad App",
    endpoints: {
      users: "/api/users",
      notes: "/api/notes",
    },
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

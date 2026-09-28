import express from "express";

import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import { ENV } from "./config/env.js";
import noteRoutes from "./routes/noteRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = ENV.PORT || 3000;
const allowedOrigins = process.env.FRONTEND_URL?.split(",") ?? [];

app.use(clerkMiddleware());
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.json({
    message: "Notepad App",
    endpoints: {
      users: "/api/users",
      notes: "/api/notes",
    },
  });
});

app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

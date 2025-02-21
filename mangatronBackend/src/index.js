import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { db } from "./database/index.js";
import { userRouter, authRouter } from "./routes/index.js";
import { createUploadsFolder } from "./security/helper.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// CORS Configuration
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Middleware
app.use(express.json()); // Replaces bodyParser.json()
app.use(express.urlencoded({ extended: true })); // Handles URL-encoded data

// Routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

// Ensure upload folder exists
createUploadsFolder();

// Connect to database before starting the server
db().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(err => {
  console.error("Failed to connect to the database:", err);
});

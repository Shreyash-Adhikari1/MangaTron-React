import express from "express";
import bodyParser from "body-parser";
import { db } from "./database/index.js";
import { userRouter, authRouter } from "./routes/index.js";
import dotenv from "dotenv";
import cors from "cors"; 
import { createUploadsFolder } from "./security/helper.js";

dotenv.config();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, 
};

app.use(cors(corsOptions)); 

const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use("/api/auth", authRouter); 
app.use("/api/users", userRouter); 

createUploadsFolder();
app.listen(4000, function () {
  console.log("Project running on port 4000");
  db();
});

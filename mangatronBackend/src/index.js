import express from "express";
import bodyParser from "body-parser";
import { db } from "./database/index.js";
import { userRouter } from "./routes/index.js";
import { authRouter } from "./routes/index.js";
import dotenv from "dotenv";
import { createUploadsFolder } from "./security/helper.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use("/api/auth", authRouter); 
app.use("/api/users", userRouter); 

createUploadsFolder();
app.listen(4000, function () {
  console.log("project running in port ");
  db();
});

import express from "express";
import bodyParser from "body-parser";
import { db } from "./database/index.js";
import dotenv from "dotenv";
import { authGuard } from "./middleware/authGuard.js";
import userRoutes from "./routes/userRoutes.js"




dotenv.config();

const app = express();

const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(authGuard);


app.use("/api/user", userRoutes);




// createUploadsFolder();
app.listen(4000, function () {
  console.log("project running in port ");
  db();
});

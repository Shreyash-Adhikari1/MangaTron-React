import express from "express";
import { authController } from "../../controller";
const router = express.Router();
router.get("/init", authController.init);
router.post("/login", authController.login);

export { router as authRouter };
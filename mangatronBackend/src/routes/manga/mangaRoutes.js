import express from "express";
import {
  create,
  getAll,
  getById,
  getByCategory, // New function for category filtering
  update,
  deleteById,
} from "../../controller/manga/mangaController.js";
import { authGuard, authGuardAdmin } from "../../middleware/token-middleware.js";
import upload from "../../middleware/multerConfig.js";

const router = express.Router();

// Public routes
router.get("/", getAll); 
router.get("/:id", getById); 
router.get("/category/:category", getByCategory);

// Protected routes (Admin only)
router.post("/create", authGuard, authGuardAdmin, upload.single("image"), create);
router.put("/:id", authGuard, authGuardAdmin, upload.single("image"), update);
router.delete("/:id", authGuard, authGuardAdmin, deleteById);

export { router as mangaRouter };
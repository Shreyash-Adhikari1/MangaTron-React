import { Router } from "express";
import { register, loginUser, getAllUsers } from "../controller/userController.js";
import { authGuard, authGuardAdmin } from "../middleware/authGuard.js";

const router = Router();

// Create user API
router.post("/register", register);

// Task 1: Create login API
router.post("/login", loginUser);

// Get all users (requires authGuard and authGuardAdmin middleware)
router.get("/getAll", authGuard, authGuardAdmin, getAllUsers);

// Exporting
export default router;

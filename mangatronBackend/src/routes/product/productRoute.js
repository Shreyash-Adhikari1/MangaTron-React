import express from "express";
import { createProduct, getAllProducts,getProductsByCategory , getProductById, updateProduct, deleteProduct } from "../../controller/product/productController.js";
import { authGuard, authGuardAdmin } from "../../middleware/token-middleware.js";
import upload from "../../middleware/multerConfig.js";

const router = express.Router();

router.post("/create", authGuardAdmin, upload.single("image"), createProduct);
router.get("/", getAllProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/:id", getProductById);
router.put("/:id", authGuardAdmin, upload.single("image"), updateProduct);
router.delete("/:id", authGuardAdmin, deleteProduct);

export {router as productRouter};

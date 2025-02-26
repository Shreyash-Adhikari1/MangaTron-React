import { Product } from "../../model/product/productModel.js";
import cloudinary from "../../../uploads/cloudinaryConfig.js";
import { sequelize } from "../../database/index.js";


const uploadToCloudinary = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file, { folder: "products" });
        return { url: result.secure_url, publicId: result.public_id };
    } catch (error) {
        throw new Error("Image upload failed: " + error.message);
    }
};

const deleteFromCloudinary = async (publicId) => {
    try {
        if (publicId) {
            await cloudinary.uploader.destroy(publicId);
        }
    } catch (error) {
        console.error("Error deleting image from Cloudinary:", error.message);
    }
};

// Create Product
export const createProduct = async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
        const { name, description, category, price, stock } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: "Product image is required" });
        }

        // Upload to cloudinsry
        const imageUpload = await uploadToCloudinary(req.file.path);

        
        const newProduct = await Product.create({
            name,
            description,
            category,
            price,
            stock,
            image: imageUpload.url,
            publicId: imageUpload.publicId,
        }, { transaction });

        await transaction.commit();
        res.status(201).json(newProduct);
    } catch (error) {
        await transaction.rollback();
        res.status(500).json({ error: error.message });
    }
};

// Get All Products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getProductsByCategory = async (req, res) => {
    try {
        const { category } = req.params;

       
        const validCategories = ["Manga", "Merchandise", "Figurines", "Posters"];
        if (!validCategories.includes(category)) {
            return res.status(400).json({ error: "Invalid category" });
        }

        const products = await Product.findAll({
            where: { category: category },
        });

        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products by category:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Get Product by ID
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Product
export const updateProduct = async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
        const { name, description, category, price, stock } = req.body;
        const product = await Product.findByPk(req.params.id);

        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        let imageUrl = product.image;
        let publicId = product.publicId;

        // If a new image is uploaded, replace the old one
        if (req.file) {
            await deleteFromCloudinary(product.publicId);
            const imageUpload = await uploadToCloudinary(req.file.path);
            imageUrl = imageUpload.url;
            publicId = imageUpload.publicId;
        }

        await product.update({
            name,
            description,
            category,
            price,
            stock,
            image: imageUrl,
            publicId: publicId,
        }, { transaction });

        await transaction.commit();
        res.status(200).json(product);
    } catch (error) {
        await transaction.rollback();
        res.status(500).json({ error: error.message });
    }
};

// Delete Product
export const deleteProduct = async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        // Delete image from Cloudinary
        await deleteFromCloudinary(product.publicId);
        await product.destroy({ transaction });

        await transaction.commit();
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        await transaction.rollback();
        res.status(500).json({ error: error.message });
    }
};

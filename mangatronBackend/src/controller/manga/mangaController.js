import Manga from "../../model/manga/mangaModel.js";
import cloudinary from "../../../uploads/cloudinaryConfig.js";
import { sequelize } from "../../database/index.js";

// Add a new manga
export const create = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { name, url, author, description, status } = req.body;
    
    // Validate required fields
    if (!name || !url || !author || !description || !status) {
      return res.status(400).json({ error: "All fields are required" });
    }

    let image = null;
    let publicId = null;
    
    if (req.file) {
      try {
        const result = await cloudinary.uploader.upload(req.file.path, { folder: "manga_images" });
        image = result.secure_url;
        publicId = result.public_id; // Store public ID for deletion later
      } catch (uploadError) {
        console.error("Cloudinary upload error:", uploadError);
        return res.status(500).json({ error: "Failed to upload image" });
      }
    }

    const newManga = await Manga.create(
      { name, url, image, publicId, author, description, status },
      { transaction }
    );

    await transaction.commit();
    res.status(201).json({ message: "Manga added successfully", manga: newManga });
  } catch (error) {
    await transaction.rollback();
    console.error("Error adding manga:", error);
    res.status(500).json({ error: "Failed to add manga" });
  }
};

// Get all manga
export const getAll = async (req, res) => {
  try {
    const mangas = await Manga.findAll();
    res.status(200).json(mangas);
  } catch (error) {
    console.error("Error fetching manga:", error);
    res.status(500).json({ error: "Failed to fetch manga" });
  }
};

// Get a single manga by ID
export const getById = async (req, res) => {
  try {
    const manga = await Manga.findByPk(req.params.id);
    if (!manga) return res.status(404).json({ error: "Manga not found" });

    res.status(200).json(manga);
  } catch (error) {
    console.error("Error fetching manga:", error);
    res.status(500).json({ error: "Failed to fetch manga" });
  }
};

// Update manga
export const update = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { name, url, author, description, status } = req.body;

    const manga = await Manga.findByPk(req.params.id);
    if (!manga) return res.status(404).json({ error: "Manga not found" });

    let image = manga.image; // Keep old image
    let publicId = manga.publicId; // Keep old public ID

    if (req.file) {
      try {
        // Delete old image from Cloudinary if it exists
        if (publicId) await cloudinary.uploader.destroy(publicId);

        // Upload new image
        const result = await cloudinary.uploader.upload(req.file.path, { folder: "manga_images" });
        image = result.secure_url;
        publicId = result.public_id; // Update public ID
      } catch (uploadError) {
        console.error("Cloudinary upload error:", uploadError);
        return res.status(500).json({ error: "Failed to upload image" });
      }
    }

    await manga.update(
      { name, url, image, publicId, author, description, status },
      { transaction }
    );

    await transaction.commit();
    res.status(200).json({ message: "Manga updated successfully", manga });
  } catch (error) {
    await transaction.rollback();
    console.error("Error updating manga:", error);
    res.status(500).json({ error: "Failed to update manga" });
  }
};

// Delete manga
export const deleteById = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const manga = await Manga.findByPk(req.params.id);
    if (!manga) return res.status(404).json({ error: "Manga not found" });

    if (manga.publicId) {
      try {
        await cloudinary.uploader.destroy(manga.publicId);
      } catch (deleteError) {
        console.error("Cloudinary delete error:", deleteError);
      }
    }

    await manga.destroy({ transaction });
    await transaction.commit();
    res.status(200).json({ message: "Manga deleted successfully" });
  } catch (error) {
    await transaction.rollback();
    console.error("Error deleting manga:", error);
    res.status(500).json({ error: "Failed to delete manga" });
  }
};

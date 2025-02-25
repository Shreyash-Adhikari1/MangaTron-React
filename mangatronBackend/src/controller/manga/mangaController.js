import Manga from "../../model/manga/mangaModel.js";
import cloudinary from "../../../uploads/cloudinaryConfig.js";
import { sequelize } from "../../database/index.js";

// Add a new manga
export const create = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { name, url, author, description, status, category, genres } = req.body;

    // Validate required fields
    if (!name || !url || !author || !description || !status || !category) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Ensure genres is an array
    const genresArray = Array.isArray(genres) ? genres : genres.split(",").map(genre => genre.trim());

    let image = null;
    let publicId = null;

    if (req.file) {
      try {
        const result = await cloudinary.uploader.upload(req.file.path, { folder: "manga_images" });
        image = result.secure_url;
        publicId = result.public_id;
      } catch (uploadError) {
        console.error("Cloudinary upload error:", uploadError);
        return res.status(500).json({ error: "Failed to upload image" });
      }
    }

    const newManga = await Manga.create(
      { name, url, image, publicId, author, description, status, category, genres: genresArray },
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


// Get all manga (with optional category filtering)
export const getAll = async (req, res) => {
  try {
    const { category } = req.query; // Get category from query params

    const condition = category ? { where: { category } } : {}; // Filter by category if provided

    const mangas = await Manga.findAll(condition);
    res.status(200).json(mangas);
  } catch (error) {
    console.error("Error fetching manga:", error);
    res.status(500).json({ error: "Failed to fetch manga" });
  }
};

// Get manga by category
export const getByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const mangas = await Manga.findAll({ where: { category } });

    if (mangas.length === 0) {
      return res.status(404).json({ error: "No manga found in this category" });
    }

    res.status(200).json(mangas);
  } catch (error) {
    console.error("Error fetching manga by category:", error);
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
    const { name, url, author, description, status, category, genres } = req.body;

    const manga = await Manga.findByPk(req.params.id);
    if (!manga) return res.status(404).json({ error: "Manga not found" });

    let image = manga.image;
    let publicId = manga.publicId;

    if (req.file) {
      try {
        if (publicId) await cloudinary.uploader.destroy(publicId);

        const result = await cloudinary.uploader.upload(req.file.path, { folder: "manga_images" });
        image = result.secure_url;
        publicId = result.public_id;
      } catch (uploadError) {
        console.error("Cloudinary upload error:", uploadError);
        return res.status(500).json({ error: "Failed to upload image" });
      }
    }

    await manga.update(
      { name, url, image, publicId, author, description, status, category, genres },
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
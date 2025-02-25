import { DataTypes } from "sequelize";
import { sequelize } from "../../database/index.js";

export const Manga = sequelize.define(
  "Manga",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isUrl: true },
    },
    image: {
      type: DataTypes.STRING, // Stores Cloudinary image URL
      allowNull: false,
    },
    publicId: {
      type: DataTypes.STRING, // Stores Cloudinary public ID for easy deletion
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("ongoing", "completed", "hiatus"),
      allowNull: false,
      defaultValue: "ongoing",
    },
    category: {
      type: DataTypes.ENUM("trending", "recommended", "latest"), // Specify categories
      allowNull: false,
    },
    genres: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Stores multiple genres
      allowNull: false,
      defaultValue: [],
    },
  },
  {
    timestamps: true,
    tableName: "mangas",
  }
);

export default Manga;

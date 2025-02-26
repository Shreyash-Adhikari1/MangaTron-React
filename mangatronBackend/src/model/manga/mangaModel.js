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
      type: DataTypes.STRING, // cloudinary image url
      allowNull: false,
    },
    publicId: {
      type: DataTypes.STRING, // Cloudinary public id
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
      type: DataTypes.ENUM("trending", "recommended", "latest"),
      allowNull: false,
    },
    genres: {
      type: DataTypes.ARRAY(DataTypes.STRING), 
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
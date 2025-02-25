import { DataTypes } from "sequelize";
import { sequelize } from "../../database/index.js";

export const Product = sequelize.define(
  "Product",
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
    image: {
      type: DataTypes.STRING, // Stores Cloudinary image URL
      allowNull: false,
    },
    publicId: {
      type: DataTypes.STRING, // Stores Cloudinary public ID for easy deletion
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM("Manga", "Merchandise", "Figurines", "Posters"),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // Allows for prices like 999.99
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER, // Represents the available stock quantity
      allowNull: false,
      defaultValue: 0, // Default stock is 0 if not specified
    },
  },
  {
    timestamps: true,
    tableName: "products",
  }
);

export default Product;

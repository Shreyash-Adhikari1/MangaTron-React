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
      type: DataTypes.STRING, 
      allowNull: false,
    },
    publicId: {
      type: DataTypes.STRING, 
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
      type: DataTypes.DECIMAL(10, 2), 
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
    tableName: "products",
  }
);

export default Product;

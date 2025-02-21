import { DataTypes } from "sequelize";
import { sequelize } from "../../database/index.js";

export const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure usernames are unique
    validate: {
      len: [3, 25], // Enforce username length
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure emails are unique
    validate: {
      isEmail: true, // Ensure valid email format
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true, // Automatically adds createdAt & updatedAt fields
  tableName: "users", // Explicitly set table name
});

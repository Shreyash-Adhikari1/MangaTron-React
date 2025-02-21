import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Sequelize with PostgreSQL connection
export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false, // Disable logging in production for cleaner output
  }
);

// Function to connect to the database
export const db = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");
    await sequelize.sync({ alter: true });
  } catch (e) {
    console.error("Failed to connect to database:", e);
    process.exit(1); // Force the app to stop if DB fails
  }
};


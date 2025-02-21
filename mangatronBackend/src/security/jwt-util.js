import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (payload) => {
  const options = {
    expiresIn: process.env.JWT_EXPIRES_IN, // Corrected variable name
  };
  return jwt.sign(payload, process.env.JWT_SECRET, options); // Corrected variable name
};

export { generateToken };

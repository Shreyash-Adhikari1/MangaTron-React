import { User } from "../../model/index.js";
import bcrypt from "bcryptjs";
import { body, validationResult } from "express-validator";
/**
 * Fetch all users
 */
const getAll = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ["password"] } });
    res.status(200).json({ data: users, message: "Successfully fetched users" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

/**
 * Create a new user
 */

const create = async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { username, email, password } = req.body;

    // Check if email is already in use
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    res.status(201).send({ data: user, message: "Successfully created user" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Failed to create user" });
  }
};

/**
 * Update user details
 */
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, username, password } = req.body;

    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    if (email) user.email = email;
    if (username) user.username = username;
    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    await user.save();
    res.status(200).send({ data: user, message: "User updated successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Failed to update user" });
  }
};


/**
 * Delete user
 */
const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    await user.destroy();
    res.status(200).send({ message: "User deleted successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Failed to delete user" });
  }
};


/**
 * Fetch user by ID
 */
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, { attributes: { exclude: ["password"] } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ data: user, message: "User fetched successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

export const userController = { getAll, create, getById, deleteById, update };

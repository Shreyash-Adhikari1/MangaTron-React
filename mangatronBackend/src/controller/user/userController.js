import { User } from "../../model/index.js";

/**
 *  fetch all users
 */
const getAll = async (req, res) => {
  try {
    //fetching all the data from users table
    const users = await User.findAll();
    res.status(200).send({ data: users, message: "successfully fetched data" });
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

/**
 *  create new user
 */

const create = async (req, res) => {
    try {
      const body = req.body;
  
      // Check if the required fields are provided
      if (!body?.username || !body?.email || !body?.password) {
        return res.status(400).send({ message: "Invalid payload" });
      }
  
      // Create the user in the database
      const user = await User.create({
        email: body.email,
        username: body.username,
        password: body.password,  // Ideally, hash the password before saving
      });
  
      // Respond with the created user data
      res.status(201).send({ data: user, message: "Successfully created user" });
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: "Failed to create user" });
    }
  };
  
/**
 *  update existing user
 */

const update = async (req, res) => {
  try {
    const { id = null } = req.params;
    const body = req.body;
    console.log(req.params);
    //checking if user exist or not
    const oldUser = await User.findOne({ where: { id } });
    if (!oldUser) {
      return res.status(500).send({ message: "User not found" });
    }
  
    
    oldUser.email = body.email;
    oldUser.username = body.username;
    oldUser.password = body.password || oldUser.password;
    oldUser.save();
    res
      .status(201)
      .send({ data: oldUser, message: "user updated successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Failed to update users" });
  }
};

/**
 *  delete user
 */
const delelteById = async (req, res) => {
  try {
    const { id = null } = req.params;
    const oldUser = await User.findOne({ where: { id } });

    //checking if user exist or not
    if (!oldUser) {
      return res.status(500).send({ message: "User not found" });
    }
    oldUser.destroy();
    res.status(201).send({ message: "user deleted successfully" });
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

/**
 *  fetch user by id
 */
const getById = async (req, res) => {
  try {
    const { id = null } = req.params;
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(500).send({ message: "User not found" });
    }
    res.status(201).send({ message: "user fetched successfully", data: user });
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};


export const userController = {
  getAll,
  create,
  getById,
  delelteById,
  update,
};

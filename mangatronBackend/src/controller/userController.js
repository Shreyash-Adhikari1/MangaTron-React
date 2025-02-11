import Users from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  // Step 1: Check if data is coming or not
  console.log(req.body);

  // Step 2: Destructure the data
  const { username, email, password } = req.body;

  // Step 3: Validate the incoming data
  if (!username || !email || !password) {
    return res.json({
      success: false,
      message: "Please enter all the fields.",
    });
  }

  // Step 4: Try-catch block
  try {
    // Step 5: Check existing user
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.json({
        success: false,
        message: "User already exists.",
      });
    }

    // Password encryption
    const randomSalt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, randomSalt);

    // Step 6: Create new user
    const newUser = new Users({
      username,
      email,
      password: encryptedPassword,
    });

    // Step 7: Save user and respond
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "User created successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const loginUser = async (req, res) => {
  // Step 1: Check incoming data
  console.log(req.body);

  // Destructuring
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.json({
      success: false,
      message: "Please enter all fields.",
    });
  }

  // Try-catch block
  try {
    // Finding user
    const user = await Users.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "User does not exist.",
      });
    }

    // Comparing password
    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res.json({
        success: false,
        message: "Invalid Credentials.",
      });
    }

    // Create token
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );

    // Response
    res.status(200).json({
      success: true,
      message: "User logged in successfully.",
      token,
      userData: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error,
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    // Limiting query
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query._limit) || 10;
    const skip = (page - 1) * limit;

    const users = await Users.find({}).skip(skip).limit(limit);

    res.status(200).json({
      success: true,
      message: "All users fetched successfully.",
      count: users.length,
      page,
      limit,
      users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error,
    });
  }
};

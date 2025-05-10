import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";

export const Signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    if (!email || !password || !name) {
      throw new Error("All fields are required");
    }

    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "user already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const verificationToken = generateVerificationToken();

    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours.
    });

    await user.save();


    generateTokenAndSetCookie(res, user._id);

    res.status(201).json({
        success: true,
        message: "User created successfully",
        user: {
            ...user._doc,
            passowrd: undefined,

        },
    
    })

  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const Login = async (req, res) => {
  res.send("Login Route");
};

export const Logout = async (req, res) => {
  res.send("Logout Route");
};

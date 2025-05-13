import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../modules/user.model";
import { genereteToken } from "../utils/jwt.utils";

// user registeration
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10); // hash given password

    const user = await User.create({ email: email, password: hashedPassword });
    const token = genereteToken({ id: user._id, email });

    res.json({ message: "User registered successfully", token });
  } catch (err) {
    console.log("Error", err);
  }
};

//login user
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
   
    if (!user) throw new Error("User not Found");
   
    const isMatch = await bcrypt.compare(
      password,
      user.get("password") as string
    );
    
    if (!isMatch) throw new Error("Invalid password");
    
    const token = genereteToken({ id: user._id, email });

    res.json({ message: "Login sucess", token });
  } catch (err) {
    console.log(err);
  }
};

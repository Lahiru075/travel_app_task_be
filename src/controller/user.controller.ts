import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../model/User";
import { signAccessToken , signRefreshToken } from "../utils/token";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        const exsitingUser = await User.findOne({ email });

        if (exsitingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        await user.save();

        res.status(201).json({ message: "User created successfully" });

    } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const asscessToken = signAccessToken(user);
        const refreshToken = signRefreshToken(user);

        res.status(200).json({ accessToken: asscessToken, refreshToken });

    } catch (error) {
        res.status(500).json({ message: "Error logging in user", error });
    }
}

export const refreshToken = async (req: Request, res: Response) => {
    const { token } = req.body;

    if (!token) return res.status(401).json({ message: "Refresh Token is required" });

    try {
        const payload: any = jwt.verify(token, process.env.JWT_REFRESH_SECRET as string);
        
        const user = await User.findById(payload.sub);
        if (!user) return res.status(404).json({ message: "User not found" });

        const newAccessToken = signAccessToken(user);

        res.status(200).json({ accessToken: newAccessToken });
    } catch (error) {
        res.status(403).json({ message: "Invalid or expired refresh token" });
    }
};
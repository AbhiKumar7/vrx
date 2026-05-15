import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyuser = async (req, res, next) => {
  try {
   
    const token = req.cookies?.refreshToken;

    if (!token) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized user",
      });
    }


    const decodeToken = jwt.verify(
      token,
      process.env.REFRESH_TOKEN
    );

   
    const user = await User.findByPk(decodeToken._id, {
      attributes: {
        exclude: ["password", "refreshToken"],
      },
    });

    if (!user) {
      return res.status(401).json({
        status: false,
        message: "Invalid token or user not found",
      });
    }

  
    req.user = user;

    next();
  } catch (error) {
    console.log("Token verification error", error);

    return res.status(401).json({
      status: false,
      message: "Token verification failed",
    });
  }
};


export const adminCheck = (req, res, next) => {
  try {
    if (!req.user || req.user.role !== "ADMIN") {
      return res.status(401).json({
        status: false,
        error: "Unauthorized",
      });
    }

    next();
  } catch (err) {
    return res.status(401).json({
      status: false,
      error: err.message,
    });
  }
};

import { User } from "../models/user.model.js";
import { generateRefreshToken } from "../utils/generateRefreshToken.js";

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    if (!email || !password) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

   
    const userExist = await User.findOne({
      where: {
        email,
      },
    });

    if (userExist) {
      return res.status(400).json({
        status: false,
        message: "User already registered",
      });
    }

    
    const newUser = await User.create({
      email,
      password,
    });

  
    const accessToken = newUser.generateAccessToken();
    const refreshToken = newUser.generateRefreshToken();

    newUser.refreshToken = refreshToken;
    await newUser.save();

    const options = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    // Set cookies
    res.cookie("accessToken", accessToken, options);
    res.cookie("refreshToken", refreshToken, options);

   
    const loggedUser = {
      id: newUser.id,
      email: newUser.email,
      isOnboarded: newUser.isOnboarded,
      createdAt: newUser.createdAt,
    };

    return res.status(201).json({
      status: true,
      message: "User registered successfully",
      user: loggedUser,
      accessToken,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Server error",
      error: error.message,
    });
  }
};
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    if (!(email && password)) {
      return res.status(400).json({
        status: false,
        message: "All fields must be filled",
      });
    }

    
    const user = await User.findOne({
      where: {
        email,
      },
    });

    
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    
    const userPassword = await user.isPassword(password);

    if (!userPassword) {
      return res.status(400).json({
        status: false,
        message: "Password not correct",
      });
    }

    
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    
    user.refreshToken = refreshToken;
    await user.save();

    
    const options = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

  
    res.cookie("refreshToken", refreshToken, options);
    res.cookie("accessToken", accessToken, options);

  
    const loggedUser = {
      id: user.id,
      email: user.email,
      isOnboarded: user.isOnboarded,
      createdAt: user.createdAt,
    };

    return res.status(200).json({
      status: true,
      message: "User login successfully",
      user: loggedUser,
      accessToken,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const logoutUser = async (req, res) => {
  try {
  
    const user = await User.findByPk(req.user.id);

    
    user.refreshToken = null;

    await user.save();

   
    const options = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json({
        status: true,
        message: "Logout successfully",
      });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const onBoard = async (req, res) => {
  try {
    const { name, bio, nativeLanguage, learningLanguage, location } = req.body;
    if (!name || !bio || !nativeLanguage || !learningLanguage || !location) {
      let missingFields = [];
      if (!name) missingFields.push("name");
      if (!bio) missingFields.push("bio");
      if (!nativeLanguage) missingFields.push("nativeLanguage");
      if (!learningLanguage) missingFields.push("learningLanguage");
      if (!location) missingFields.push("location");

      return res.status(400).json({
        status: false,
        error: "failed in adding product",
        message: `${missingFields.join(",")} all fields required`,
      });
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.user?._id,
      {
        ...req.body,
        isOnboarded: true,
      },
      { new: true },
    ).select("-password");

    try {
      await upsertStreamUser({
        id: updatedUser._id.toString(),
        name: updatedUser.name,
        profileImage: updatedUser.profilePic || "",
      });
      console.log(`Stream user created for ${updatedUser.name}`);
    } catch (error) {
      console.log("Error creating Stream user:", error);
    }
    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });

    return res.status(200).json({ success: true, user: updatedUser });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Server error",
      error: error.message,
    });
  }
};
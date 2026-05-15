import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sequelize } from "../dataBase/dataBase.js";


export const User = sequelize.define(
  "User",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    isOnboarded: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    refreshToken: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
  }
);
User.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});
User.prototype.isPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

User.prototype.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this.id,
    },
    process.env.ACCESS_TOKEN,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
User.prototype.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this.id,
      email: this.email,
    },
    process.env.REFRESH_TOKEN,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};


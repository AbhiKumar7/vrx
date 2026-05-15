import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });



export const sequelize = new Sequelize(
  process.env.DATABASE_NAME,        
  process.env.CONNECTION_NAME,       
  process.env.PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL Connected Successfully");

    await sequelize.sync();

    console.log("Tables synced");
  } catch (error) {
    console.log("Database connection failed", error);
  }
};
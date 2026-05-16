import express from "express";
import dotenv from "dotenv";
import baseUserRoute from "./routes/user.route.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";


let app = express();
dotenv.config({ path: "./.env" });
app.use(express.json())


app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (
        origin.includes("localhost") ||
        origin.includes("vercel.app")
      ) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static("public"))
app.use("/userapi",baseUserRoute)
app.get("/", (req, res) => {
  res.send("Backend Running");
});
export {app}

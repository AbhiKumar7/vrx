import express from "express";
import dotenv from "dotenv";
import baseUserRoute from "./routes/user.route.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

// import { fileURLToPath } from "url";
let app = express();
dotenv.config({ path: "./.env" });
app.use(express.json())


app.use(
  cors({
    origin: "https://vrx-theta.vercel.app",
    credentials: true,
  })
);
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static("public"))
app.use("/userapi",baseUserRoute)
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use(
//   express.static(path.join(__dirname, "../../frontend/vrx/dist"))
// );
// app.get(/(.*)/, (req, res) => {
//   res.sendFile(path.join(__dirname, "../../frontend/vrx/dist/index.html"));
// });
export {app}

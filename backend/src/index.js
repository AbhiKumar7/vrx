import { app } from "./app.js";
import { connectDB } from "./dataBase/dataBase.js";



connectDB().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on ${process.env.PORT}`);
  });
});
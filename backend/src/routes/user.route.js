import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controller/user.controller.js";
import { verifyuser } from "../middleware/auth.middleware.js";

const router = Router()
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyuser,logoutUser);
// router.route("/onboard").post(verifyuser,onBoard);


router.route("/me").get(verifyuser, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});
export default router
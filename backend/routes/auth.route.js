import express from "express"
import { Login, Logout, Signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/signup",Signup)

router.get("/login", Login)

router.get("/logout", Logout)

// router.get("/signup", (req, res)=> {
//     res.send("SignUp Route");
// })



export default router;
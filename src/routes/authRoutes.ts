import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

//coonst router = require("express"),Router();
const router = Router();


router.post("/register", AuthController.register);
router.post("/login",AuthController.login);


export default router;
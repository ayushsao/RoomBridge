import express from "express";
import { sendBody } from "../controllers/botController.js";

const router=express.Router();

router.post('/', sendBody);


export default router;
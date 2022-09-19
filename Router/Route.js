import express from "express";
import { postTourData } from "../Controller/tourController.js";

const router = express.Router();

router.post("/tours", postTourData)
router.get("/", (req, res)=>{
    res.send("Welcome to Tours Management")
});

export default router;
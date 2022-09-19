import express from "express";
import { getTourData, postTourData } from "../Controller/tourController.js";

const router = express.Router();

router.post("/tours", postTourData)
router.get("/tours", getTourData);

export default router;
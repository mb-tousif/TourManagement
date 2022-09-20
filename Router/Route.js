import express from "express";
import { getTourData, getTourDataById, postTourData, updateTourData } from "../Controller/tourController.js";

const router = express.Router();

router.post("/tours", postTourData)
router.get("/tours", getTourData);
router.get("/tours/:id", getTourDataById);
router.patch("/tour/:id", updateTourData);

export default router;
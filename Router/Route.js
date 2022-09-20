import express from "express";
import { cheapestTourData, getTourData, getTourDataById, postTourData, trendingTourData, updateTourData } from "../Controller/tourController.js";

const router = express.Router();

router.get("/tours", getTourData);
router.post("/tours", postTourData)
router.get("/tours/:id", getTourDataById);
router.patch("/tour/:id", updateTourData);
router.get("/tour/trending", trendingTourData);
router.get("/tour/cheapest", cheapestTourData);

export default router;
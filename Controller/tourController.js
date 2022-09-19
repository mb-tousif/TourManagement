import TourData from "../Model/tourSchema.js";

// Data Save API
export const postTourData = async ( req, res ) => {
    try {
        const data = req.body
        const result = await TourData.save(data);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};
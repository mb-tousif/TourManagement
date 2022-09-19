import TourData from "../Model/tourSchema.js";

// Data Save API
export const postTourData = async ( req, res ) => {
    try {
        const data = req.body
        const newData = new TourData(data)
        const result = await newData.save();
        // const result = await TourData.create(data);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

// Get All Data API with Pagination
export const getTourData = async ( req, res ) => {
     try {
       const { limit, page } = req.query;
       const result = await TourData.find({}).skip(+page * limit).limit(+limit).select({userName:1, img:1});
       res.status(200).json(result);
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
}

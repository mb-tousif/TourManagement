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
       const result = await TourData.find({}, "name image").skip(+page * limit).limit(+limit).sort({price: -1})
       res.status(200).json(result);
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
}


// API for get Data by ID
export const getTourDataById = async ( req, res ) => {
     try {
       const id = req.params.id
       const result = await TourData.find({ _id: id })
       res.status(200).json(result);
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
}


// API for Update Data
export const updateTourData = async ( req, res ) => {
     try {
       const id = req.params.id
       const updateData = req.body
       const result = await TourData.updateOne({ _id: id }, { $set: updateData })
       res.status(200).json(result);
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
}

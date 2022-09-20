import TourData from "../Model/tourSchema.js";

// API For All Data with Pagination
export const getTourData = async ( req, res ) => {
  try {
    const { limit, page } = req.query;
    const result = await TourData.find({}).skip(+page * limit).limit(+limit)
    // const result = await TourData.find({}, "name image");
    // const result = await TourData.find({}).sort({ price: -1 });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Data Post API
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

// Three Trending Data API
export const trendingTourData = async(req, res)=>{
    try{
      const result = await TourData.find({}).sort({ views: -1 }).limit(3);
      res.status(200).json(result)
    }catch(error){
      res.status(500).json({ error: error.message });
    }
}

// Three cheapest Data API
export const cheapestTourData = async(req, res)=>{
    try{
      const result = await TourData.find({}).sort({price: 1}).limit(3);
      res.status(200).json(result)
    }catch(error){
      res.status(500).json({ error: error.message });
    }
}
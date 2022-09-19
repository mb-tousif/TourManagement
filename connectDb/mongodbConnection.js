import mongoose from "mongoose";

const connect = async (req, res) => {
  const url = `mongodb+srv://${process.env.MONGODB_USER_NAME}:${process.env.MONGODB_USER_PASSWORD}@tourmanagement.bx0yeko.mongodb.net/TourManagement`;
  

  try {
    await mongoose.connect(url);
    console.log("Mongodb connected");
  } catch (error) {
    console.log("Error while connecting with Mongodb", error.message);
  }
};

export default connect;

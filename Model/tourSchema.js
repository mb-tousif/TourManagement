import mongoose from "mongoose";

export const tourSchema = mongoose.Schema(
  {
    id: String,
    userName: {
      type: String,
      required: true,
      min: 5,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    package: {
      type: String,
      required: true,
      trim: true,
    },
    img: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const TourData = mongoose.model("tour", tourSchema);

export default TourData;

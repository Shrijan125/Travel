import mongoose,{Schema} from "mongoose";

const packageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  startavailableDate: {
    type: String,
    required: true,
  },
  endavailableDate: {
    type: String,
    required: true,
  },
});

export const Package = mongoose.model("Package", packageSchema);

import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    numberofTravellers: {
      type: Number,
      required: true,
    },
    specialRequest: {
      type: String
    },
    packageId: {
      type: Schema.Types.ObjectId,
      ref: "Package",
      required: true,
    },
    amountPaid: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Booking = mongoose.model("Booking", bookingSchema);

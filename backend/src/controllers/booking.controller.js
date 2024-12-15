import { Package } from "../models/packages.model.js";
import asyncHandler from "express-async-handler";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Booking } from "../models/bookings.model.js";

export const createBooking = asyncHandler(async (req, res) => {
    const {name, email, phone, numberofTravellers, specialRequest, packageId, amountPaid} = req.body;
    
    if(!name || !email || !phone || !numberofTravellers || !specialRequest || !packageId || !amountPaid) {
        throw new ApiError(400, 'All fields are required');
    }

    const findPackage = await Package.findById(packageId);
    if (!findPackage) {
        throw new ApiError(404, 'Package not found');
    }

    const booking = await Booking.create({
        name,
        email,
        phone,
        numberofTravellers,
        specialRequest,
        packageId,
        amountPaid
    });

    return res.status(200).json(new ApiResponse(201, booking, 'Booking created successfully'));
});
import { Package } from "../models/packages.model.js";
import asyncHandler from "express-async-handler";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


export const getPackages = asyncHandler(async (req, res) => {
    const packages = await Package.find({});
    return res.status(200).json(new ApiResponse(200, packages, 'Packages fetched successfully'));
} );

export const getPackageById = asyncHandler(async (req, res) => {
    const id = req.params.id;
    if (!id) {
        throw new ApiError(400, 'Package ID is required');
    }
    const packagebyid = await Package.findById(id);
    return res.status(200).json(new ApiResponse(200, packagebyid, 'Package fetched successfully'));
});

export const createPackage = asyncHandler(async (req, res) => {
    const { title, description, price, startavailableDate, endavailableDate } = req.body;

    if (!title || !description || !price || !startavailableDate || !endavailableDate) {
        throw new ApiError(400, 'All fields are required');
    }

    if (!req.files || req.files.length === 0) {
        throw new ApiError(400, 'At least one image is required');
    }

    const imageUploadPromises = req.files.map(file => uploadOnCloudinary(file.path));
    const uploadedImages = await Promise.all(imageUploadPromises);

    const images = uploadedImages.map(upload => {
        if (!upload.url) {
            throw new ApiError(400, "Error while uploading an image");
        }
        return upload.url;
    });

    const createdPackage = await Package.create({
        title,
        description,
        price,
        images,
        startavailableDate,
        endavailableDate
    });

    return res.status(201).json(new ApiResponse(201, createdPackage, 'Package created successfully'));
});

export const updatePackage = asyncHandler(async (req, res) => {
    const  id  = req.params.id;
    const { title, description, price, startavailableDate, endavailableDate } = req.body;
    if (!id) {
        throw new ApiError(400, 'Package ID is required');
    }
    const packagebyid = await Package.findById(id);
    if (!packagebyid) {
        throw new ApiError(404, 'Package not found');
    }
    const updatedPackage = await Package.findByIdAndUpdate(id, {
        title,
        description,
        price,
        startavailableDate,
        endavailableDate
    }, {new: true});

    return res.status(200).json(new ApiResponse(200, updatedPackage, 'Package updated successfully'));
});

export const deletePackage = asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!id) {
        throw new ApiError(400, 'Package ID is required');
    }
    const packagebyid = await Package.findById(id);
    if (!packagebyid) {
        throw new ApiError(404, 'Package not found');
    }
    await Package.findByIdAndDelete(id);
    return res.status(200).json(new ApiResponse(200, {}, 'Package deleted successfully'));
});
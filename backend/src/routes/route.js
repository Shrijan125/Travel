import { Router } from "express";
import { createPackage, deletePackage, getPackageById, getPackages, updatePackage } from "../controllers/package.controller.js";
import { createBooking } from "../controllers/booking.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Hello World!" });
});

router.get("/packages",getPackages);
router.get("/packages/:id",getPackageById);
router.post("/bookings",createBooking);
router.post("/admin/packages",upload.array('image',5),createPackage);
router.put("/admin/packages/:id",updatePackage);
router.delete("/admin/packages/:id",deletePackage);

export default router;
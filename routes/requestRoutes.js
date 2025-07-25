const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const requestController = require("../controllers/requestController");

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    // Use Date.now() to make filename unique
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Create a new request (with file uploads)
router.post("/", upload.array("images", 7), requestController.createRequest);

// Create a new request (alternative route)
router.post("/requests", requestController.createRequest);

// Get all requests
router.get("/", requestController.getAllRequests);

// Get a single request
router.get("/:id", requestController.getRequestById);

// Update request status
router.put("/:id/status", requestController.updateRequestStatus);

// Get requests by user
router.get("/user/:id", requestController.getRequestsByUser);

// Check vehicle request restrictions
router.get("/vehicle/:vehicleNumber/restrictions", requestController.checkVehicleRestrictions);

// Place order for an approved request
router.post("/:id/place-order", requestController.placeOrder);

// Delete a request
router.delete("/:id", requestController.deleteRequest);

module.exports = router;

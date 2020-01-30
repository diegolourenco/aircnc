const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const DashboardController = require("./controllers/DashboardController");
const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const BookingController = require("./controllers/BookingController");

const routes = express.Router();
const upload = multer(uploadConfig);

/**
 * User
 */
routes.get("/sessions", SessionController.index);
routes.post("/sessions", SessionController.store);
routes.put("/sessions/:id", SessionController.update);
routes.delete("/sessions/:id", SessionController.destroy);

/**
 * Spots
 */
routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);
routes.delete("/spots", SpotController.destroy);

/**
 * Dashboard
 */
routes.get("/dashboard", DashboardController.show);

/**
 * Booking
 */
routes.get("/bookings", BookingController.index);
routes.post("/spots/:spot_id/bookings", BookingController.store);
routes.delete("/bookings", BookingController.destroyAll);

module.exports = routes;

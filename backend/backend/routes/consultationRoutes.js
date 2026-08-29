const express = require("express");
const router = express.Router();
const consultationController = require("../controllers/consultationController");

// POST /api/consultations - Submit consultation booking
router.post("/", consultationController.createBooking);

// GET /api/consultations/booked-slots - Get booked slots for a date
router.get("/booked-slots", consultationController.getBookedSlots);

// GET /api/consultations - Get all consultations (Admin / Filter)
router.get("/", consultationController.getConsultations);

// GET /api/consultations/:id - Get specific consultation
router.get("/:id", consultationController.getConsultationById);

// PATCH /api/consultations/:id - Update consultation status or notes
router.patch("/:id", consultationController.updateConsultation);

// DELETE /api/consultations/:id - Delete consultation
router.delete("/:id", consultationController.deleteConsultation);

module.exports = router;

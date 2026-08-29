const db = require("../db");

// Simple email regex validator
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Simple date validator (YYYY-MM-DD)
function isValidDate(dateStr) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
    const d = new Date(dateStr);
    return d instanceof Date && !isNaN(d.getTime());
}

/**
 * Controller methods for Consultation API
 */

// POST /api/consultations - Create a new booking
async function createBooking(req, res) {
    try {
        const { name, email, phone, consultation, date, time, message } = req.body || {};

        const missingFields = [];
        if (!name || !name.trim()) missingFields.push("name");
        if (!email || !email.trim()) missingFields.push("email");
        if (!consultation || !consultation.trim()) missingFields.push("consultation");
        if (!date || !date.trim()) missingFields.push("date");
        if (!time || !time.trim()) missingFields.push("time");
        if (!message || !message.trim()) missingFields.push("message");

        if (missingFields.length > 0) {
            return res.status(400).json({
                error: "Bad Request",
                message: `The following required fields are missing: ${missingFields.join(", ")}`,
                missingFields
            });
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({
                error: "Bad Request",
                message: "Please provide a valid email address."
            });
        }

        if (!isValidDate(date)) {
            return res.status(400).json({
                error: "Bad Request",
                message: "Please provide a valid date in YYYY-MM-DD format."
            });
        }

        // Prevent booking dates in the past
        const todayStr = new Date().toISOString().split("T")[0];
        if (date < todayStr) {
            return res.status(400).json({
                error: "Bad Request",
                message: "Selected date cannot be in the past."
            });
        }

        // Check if slot is already booked
        const isTaken = await db.isSlotTaken(date, time);
        if (isTaken) {
            return res.status(409).json({
                error: "Conflict",
                message: "This time slot is already booked for your selected date. Please choose another date or time slot."
            });
        }

        const newConsultation = await db.create({
            name,
            email,
            phone,
            consultation,
            date,
            time,
            message
        });

        return res.status(201).json({
            success: true,
            message: "Consultation enquiry submitted successfully.",
            referenceCode: newConsultation.referenceCode,
            data: newConsultation
        });
    } catch (error) {
        console.error("Error creating consultation:", error);
        return res.status(500).json({
            error: "Internal Server Error",
            message: "Failed to process consultation booking."
        });
    }
}

// GET /api/consultations/booked-slots?date=YYYY-MM-DD
async function getBookedSlots(req, res) {
    try {
        const { date } = req.query;

        if (!date) {
            return res.status(400).json({
                error: "Bad Request",
                message: "Query parameter 'date' (YYYY-MM-DD) is required."
            });
        }

        if (!isValidDate(date)) {
            return res.status(400).json({
                error: "Bad Request",
                message: "Invalid date format. Expected YYYY-MM-DD."
            });
        }

        const bookedSlots = await db.getBookedSlots(date);
        return res.status(200).json({
            success: true,
            date,
            bookedSlots
        });
    } catch (error) {
        console.error("Error fetching booked slots:", error);
        return res.status(500).json({
            error: "Internal Server Error",
            message: "Failed to fetch booked slots."
        });
    }
}

// GET /api/consultations - List consultations (Admin / Overview)
async function getConsultations(req, res) {
    try {
        const { status, date, email } = req.query;
        const consultations = await db.getAll({ status, date, email });

        return res.status(200).json({
            success: true,
            count: consultations.length,
            data: consultations
        });
    } catch (error) {
        console.error("Error fetching consultations:", error);
        return res.status(500).json({
            error: "Internal Server Error",
            message: "Failed to retrieve consultations."
        });
    }
}

// GET /api/consultations/:id - Get single consultation by ID or reference code
async function getConsultationById(req, res) {
    try {
        const { id } = req.params;
        const consultation = await db.getById(id);

        if (!consultation) {
            return res.status(404).json({
                error: "Not Found",
                message: `No consultation found with ID or Reference Code '${id}'.`
            });
        }

        return res.status(200).json({
            success: true,
            data: consultation
        });
    } catch (error) {
        console.error("Error fetching consultation by ID:", error);
        return res.status(500).json({
            error: "Internal Server Error",
            message: "Failed to retrieve consultation details."
        });
    }
}

// PATCH /api/consultations/:id - Update status or notes
async function updateConsultation(req, res) {
    try {
        const { id } = req.params;
        const updates = req.body || {};

        if (updates.status) {
            const validStatuses = ["pending", "confirmed", "completed", "cancelled"];
            if (!validStatuses.includes(updates.status)) {
                return res.status(400).json({
                    error: "Bad Request",
                    message: `Invalid status. Must be one of: ${validStatuses.join(", ")}`
                });
            }
        }

        const updated = await db.update(id, updates);
        if (!updated) {
            return res.status(404).json({
                error: "Not Found",
                message: `No consultation found with ID '${id}'.`
            });
        }

        return res.status(200).json({
            success: true,
            message: "Consultation updated successfully.",
            data: updated
        });
    } catch (error) {
        console.error("Error updating consultation:", error);
        return res.status(500).json({
            error: "Internal Server Error",
            message: "Failed to update consultation."
        });
    }
}

// DELETE /api/consultations/:id - Delete a consultation
async function deleteConsultation(req, res) {
    try {
        const { id } = req.params;
        const deleted = await db.delete(id);

        if (!deleted) {
            return res.status(404).json({
                error: "Not Found",
                message: `No consultation found with ID '${id}'.`
            });
        }

        return res.status(200).json({
            success: true,
            message: "Consultation deleted successfully."
        });
    } catch (error) {
        console.error("Error deleting consultation:", error);
        return res.status(500).json({
            error: "Internal Server Error",
            message: "Failed to delete consultation."
        });
    }
}

module.exports = {
    createBooking,
    getBookedSlots,
    getConsultations,
    getConsultationById,
    updateConsultation,
    deleteConsultation
};

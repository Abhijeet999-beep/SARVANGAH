const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

const envLocalPath = path.resolve(__dirname, "../.env.local");
const envPath = path.resolve(__dirname, "../.env");
if (fs.existsSync(envLocalPath)) dotenv.config({ path: envLocalPath, override: true });
if (fs.existsSync(envPath)) dotenv.config({ path: envPath, override: false });

const express = require("express");
const cors = require("cors");
const consultationRoutes = require("./routes/consultationRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: "*", // Allows requests from Next.js frontend or mobile apps
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// Request logger
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
});

// Health check endpoint
app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        service: "Sarvangah Backend API",
        timestamp: new Date().toISOString()
    });
});

// API Routes
app.use("/api/consultations", consultationRoutes);

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        error: "Not Found",
        message: `Endpoint ${req.method} ${req.originalUrl} does not exist.`
    });
});

// Central Error Handler
app.use((err, req, res, next) => {
    console.error("Unhandled Server Error:", err);
    res.status(500).json({
        error: "Internal Server Error",
        message: err.message || "An unexpected error occurred."
    });
});

// Start server if run directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`=================================`);
        console.log(`Sarvangah Backend Server Running`);
        console.log(`Port: ${PORT}`);
        console.log(`URL:  http://localhost:${PORT}`);
        console.log(`=================================`);
    });
}

module.exports = app;

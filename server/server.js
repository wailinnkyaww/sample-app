import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB Database
connectDB();

const app = express();

// Middlewares
app.use(cors({
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  credentials: true
}));
app.use(express.json());

// Main Routes
app.use("/api/v1/auth", authRoutes);

// Health Check Route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "up",
    message: "Rice Contract Farming System Backend is healthy",
    timestamp: new Date()
  });
});

// Port configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`);
});

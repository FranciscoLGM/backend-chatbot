import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";

const app = express();

// port
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes

// connect db
connectDB();

// listen
try {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
} catch (error) {
  console.error("Error al iniciar el servidor:", error);
}

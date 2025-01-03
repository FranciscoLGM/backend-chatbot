import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import { trainChatbot } from "./nlp/nlpConfig.js";
import chatRoute from "./routes/chatRoute.js";

const app = express();

// puerto
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rutas
app.use("/chat", chatRoute);

// Conexion a la base de datos
connectDB();

// Entrena el modelo
trainChatbot();

// iniciar el servidor
try {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
} catch (error) {
  console.error("Error al iniciar el servidor:", error);
}

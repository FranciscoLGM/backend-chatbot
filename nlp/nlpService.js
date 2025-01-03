import { manager } from "./nlpConfig.js";

// Función para obtener la respuesta del chatbot
const getResponse = async (message) => {
  try {
    const response = await manager.process("es", message);
    return response
      ? { answer: response.answer }
      : { answer: "Lo siento, no entendí tu mensaje" };
  } catch (error) {
    console.error("Error al procesar el mensaje:", error);
  }
};

export default getResponse;

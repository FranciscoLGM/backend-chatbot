import { manager } from "./nlpConfig.js";

// Función para validar el mensaje de entrada
const validateMessage = (message) => {
  if (typeof message !== "string" || message.trim() === "") {
    throw new Error(
      "El mensaje de entrada no es válido. Debe ser una cadena de texto no vacía."
    );
  }
};

// Función para obtener la respuesta del chatbot
const getResponse = async (message) => {
  try {
    // Validar el mensaje de entrada
    validateMessage(message);

    // Procesar el mensaje con NLP.js
    const response = await manager.process("es", message);

    // Devolver la respuesta del chatbot
    return response.answer
      ? { answer: response.answer }
      : {
          answer:
            "¡Ups! No entendí tu mensaje. Estoy aquí para ayudarte, así que no dudes en intentar de nuevo o hacerme otra pregunta.",
        };
  } catch (error) {
    // Manejar errores y proporcionar una respuesta amigable al usuario
    console.error("Error al procesar el mensaje:", error);
    return {
      answer:
        "Lo siento, ocurrió un error al procesar tu mensaje. Por favor, intenta nuevamente más tarde.",
    };
  }
};

export default getResponse;

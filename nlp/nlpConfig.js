import { NlpManager } from "node-nlp";
import utterances from "../data/utterances.js";
import answers from "../data/answers.js";

const manager = new NlpManager({ languages: ["es"] });

// Función para entrenar el modelo del chatbot
const trainChatbot = async () => {
  try {
    // Validación de datos de entrada
    if (!Array.isArray(utterances) || !Array.isArray(answers)) {
      throw new Error("Las intenciones y respuestas deben ser arreglos.");
    }

    // Añade las intenciones para NLP
    utterances.forEach((utterance) => {
      if (utterance.text && utterance.intent) {
        manager.addDocument("es", utterance.text, utterance.intent);
      } else {
        console.warn("Utterance inválido:", utterance);
      }
    });

    // Añade las respuestas para NLP
    answers.forEach((answer) => {
      if (answer.intent && answer.response) {
        manager.addAnswer("es", answer.intent, answer.response);
      } else {
        console.warn("Respuesta inválida:", answer);
      }
    });

    // Entrena el modelo
    await manager.train();
    console.log("🤖 Modelo entrenado satisfactoriamente!");

    // Guarda el modelo
    await manager.save();
  } catch (error) {
    console.error("Error al entrenar el modelo:", error);
  }
};

export { manager, trainChatbot };

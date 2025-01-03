import getResponse from "../nlp/nlpService.js";

const proccessMessage = async (req, res) => {
  const { message } = req.body;

  // Validación de entrada
  if (!message || typeof message !== "string") {
    return res
      .status(400)
      .json({ error: "El mensaje es requerido y debe ser un texto." });
  }

  try {
    const response = await getResponse(message);
    res.json(response);
  } catch (error) {
    console.error("Error al procesar el mensaje:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
};

export default proccessMessage;

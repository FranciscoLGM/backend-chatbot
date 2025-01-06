import { Router } from "express";
import proccessMessage from "../controllers/chatController.js";
import getMenu from "../controllers/menuController.js";
import storeOrder from "../controllers/orderController.js";

const router = Router();
const MENU_KEYWORDS = ["menú", "menu"];

router.post("/", async (req, res) => {
  const { message } = req.body;
  const normalizedMessage = message.toLowerCase();

  // Verifica si el mensaje contiene palabras clave relacionadas con el menú
  const isMenuQuery = MENU_KEYWORDS.some((keyword) =>
    normalizedMessage.includes(keyword)
  );

  if (isMenuQuery) {
    // Obtiene el menú de la DB si la pregunta contiene palabras clave relacionadas con el menú
    return getMenu(req, res);
  } else {
    // Procesa el mensaje normalmente si no es una pregunta sobre el menú
    return proccessMessage(req, res);
  }
});

// Ruta para almacenar el pedido
router.post("/order", storeOrder);

export default router;

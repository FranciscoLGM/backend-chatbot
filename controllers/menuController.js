import Menu from "../models/Menu.js";

const getMenu = async (req, res) => {
  try {
    const menu = await Menu.find();
    res.json({ answer: "Aquí tienes el menú:", menu });
  } catch (error) {
    console.error("Error al obtener el menú:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
};

export default getMenu;

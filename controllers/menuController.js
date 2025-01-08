import Menu from "../models/Menu.js";

const getMenu = async (req, res, next) => {
  try {
    const menu = await Menu.find().lean().exec();
    res.json({ menu });
  } catch (error) {
    console.error("Error al obtener el menú:", error);
    next(error); // Pasar el error al middleware de manejo de errores
  }
};

export default getMenu;

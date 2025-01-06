import answers from "../data/answers.js";
import Menu from "../models/Menu.js";

const getMenu = async (req, res) => {
  try {
    const menu = await Menu.find();
    res.json({ menu });
  } catch (error) {
    console.error("Error al obtener el menú:", error);
    res.status(500).json({ answer: "Error al obtener el menú.", error });
  }
};

export default getMenu;

import Menu from "../models/Menu.js";
import connectDB from "../config/db.js";

const menu = [
  {
    name: "Sushi Roll de Salmón",
    description:
      "Delicioso sushi roll con salmón fresco, aguacate y pepino, envuelto en alga nori.",
    price: 300,
  },
  {
    name: "Sushi Roll de Atún",
    description:
      "Sushi roll con atún fresco, aguacate y mayonesa picante, envuelto en alga nori.",
    price: 320,
  },
  {
    name: "Sushi Roll California",
    description:
      "Rollito de cangrejo, aguacate y pepino, cubierto con sésamo tostado.",
    price: 280,
  },
  {
    name: "Sushi Nigiri de Salmón",
    description:
      "Rebanadas de salmón fresco sobre arroz de sushi, acompañadas de wasabi.",
    price: 240,
  },
  {
    name: "Sushi Nigiri de Atún",
    description:
      "Rebanadas de atún fresco sobre arroz de sushi, acompañadas de wasabi.",
    price: 240,
  },
  {
    name: "Sushi Temaki de Verduras",
    description:
      "Cono de alga nori relleno de verduras frescas y arroz de sushi.",
    price: 200,
  },
  {
    name: "Sushi Sashimi de Salmón",
    description:
      "Finas rebanadas de salmón fresco, servidas con salsa de soja y wasabi.",
    price: 360,
  },
  {
    name: "Sushi Sashimi de Atún",
    description:
      "Finas rebanadas de atún fresco, servidas con salsa de soja y wasabi.",
    price: 360,
  },
  {
    name: "Miso Soup",
    description: "Sopa de miso tradicional con tofu, algas y cebollín.",
    price: 80,
  },
  {
    name: "Edamame",
    description: "Frijoles de soya al vapor, espolvoreados con sal marina.",
    price: 100,
  },
  {
    name: "Tempura de Verduras",
    description:
      "Verduras frescas rebozadas y fritas, servidas con salsa de tempura.",
    price: 150,
  },
  {
    name: "Postre Mochi",
    description:
      "Dulce de arroz glutinoso relleno de helado, disponible en varios sabores.",
    price: 120,
  },
  {
    name: "Bebida de Té Verde",
    description: "Refrescante té verde japonés, servido frío o caliente.",
    price: 50,
  },
  {
    name: "Bebida de Sake",
    description:
      "Tradicional bebida japonesa de arroz, servida fría o caliente.",
    price: 250,
  },
];

const storeMenu = async () => {
  try {
    await connectDB();
    const menuItems = await Menu.insertMany(menu);
    console.log("Menú almacenado satisfactoriamente!");
  } catch (error) {
    console.error("Error al almacenar el menú:", error);
    process.exit(1);
  }
};

storeMenu();

import Order from "../models/Order.js";

const storeOrder = async (req, res, next) => {
  try {
    const { items, total, customerName, customerContact, customerAddress } =
      req.body;

    // Validar que todos los campos necesarios estén presentes
    if (
      !items ||
      !total ||
      !customerName ||
      !customerContact ||
      !customerAddress
    ) {
      return res.status(400).json({ answer: "Faltan detalles del pedido." });
    }

    // Validar que items no esté vacío y tenga las propiedades necesarias
    if (
      !Array.isArray(items) ||
      items.length === 0 ||
      !items.every((item) => item.name && item.quantity && item.price)
    ) {
      return res
        .status(400)
        .json({ answer: "Detalles del artículo del pedido no válidos." });
    }

    // Crear un nuevo pedido
    const order = new Order({
      items,
      total,
      customerName,
      customerContact,
      customerAddress,
    });

    // Guardar el pedido en la base de datos
    await order.save();

    // Responder con éxito
    res.status(201).json({ answer: "Pedido almacenado satisfactoriamente!" });
  } catch (error) {
    // Pasar el error al middleware de manejo de errores
    next(error);
  }
};

export default storeOrder;

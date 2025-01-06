import Order from "../models/Order.js";

const storeOrder = async (req, res) => {
  try {
    const { items, total, customerName, customerContact, customerAddress } =
      req.body;
    const order = new Order({
      items,
      total,
      customerName,
      customerContact,
      customerAddress,
    });
    await order.save();
    res.json({ answer: "Pedido almacenado satisfactoriamente!" });
  } catch (error) {
    res.status(500).json({ answer: "Error al almacenar el pedido.", error });
  }
};

export default storeOrder;

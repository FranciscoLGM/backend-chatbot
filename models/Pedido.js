import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
  nombreCliente: {
    type: String,
    require: true,
  },
  telefono: {
    type: String,
    require: true,
  },
  dirección: {
    type: String,
    require: true,
  },
  detallePedido: {
    type: String,
    require: true,
  },
  estadoPedido: {
    type: String,
    enum: ["pendiente", "en preparación", "entregado"],
    default: "pendiente",
  },
});

const Pedido = mongoose.model("Pedido", pedidoSchema);

export default Pedido;

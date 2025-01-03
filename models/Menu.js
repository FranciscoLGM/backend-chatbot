import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  nombre: {
    type: String,
    require: true,
  },
  descripcion: {
    type: String,
    require: true,
  },
  precio: {
    type: Number,
    require: true,
  },
});

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;

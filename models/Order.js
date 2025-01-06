import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: {
        type: String,
        require: true,
      },
      quantity: {
        type: Number,
        require: true,
      },
      price: {
        type: Number,
        require: true,
      },
    },
  ],
  total: {
    type: Number,
    require: true,
  },
  customerName: {
    type: String,
    require: true,
  },
  customerContact: {
    type: String,
    require: true,
  },
  customerAddress: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;

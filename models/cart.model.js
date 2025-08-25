import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  cartItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'cartItems',
      default: []
    }
  ],
  totalPrice: {
    type: Number,
    required: true,
    default: 0
  },
  totalDiscountedPrice: {
    type: Number,
    required: true,
    default: 0
  },
  discounte: {
    type: Number,
    required: true,
    default: 0
  }
});

const Cart = mongoose.model('cart', cartSchema);

export default Cart
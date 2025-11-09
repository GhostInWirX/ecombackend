import Cart from "../models/cart.model.js";
import CartItem from "../models/cartitem.model.js";
import Product from "../models/product.model.js";

export async function createCart(user) {
  try {
    const userId = user?._id || user;
    if (!userId) {
      throw new Error("User ID is required to create a cart");
    }
    const cart = new Cart({
      user: userId,
      cartItems: [],
      totalPrice: 0,
      totalDiscountedPrice: 0,
      discounte: 0,
    });

    const createdCart = await cart.save();
    return createdCart;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function findUserCart(userId) {
  try {
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = await createCart(userId);
    }

    const cartItems = await CartItem.find({ cart: cart._id }).populate("product");
    cart.cartItems = cartItems;

    let totalDiscountedPrice = 0;
    let totalPrice = 0;
    let totalItem = 0;

    for (const cartItem of cart.cartItems) {
      const price = Number(cartItem.product.price) * cartItem.quantity;
      const discountedPrice = Number(cartItem.product.discountedPrice) * cartItem.quantity;

      totalPrice += price;
      totalDiscountedPrice += discountedPrice;
      totalItem += cartItem.quantity;
    }

    cart.totalPrice = totalPrice;
    cart.totalDiscountedPrice = totalDiscountedPrice;
    cart.totalItem = totalItem;
    cart.discounte = totalPrice - totalDiscountedPrice;

    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function addItemToCart({ userId, productId, size, quantity = 1 }) {
  try {
    if (!userId) throw new Error("User ID is required");
    if (!productId) throw new Error("Product ID is required");
    if (!size) throw new Error("Size is required");

    const parsedQuantity = Number(quantity) || 1;
    if (parsedQuantity <= 0) throw new Error("Quantity must be greater than zero");

    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = await createCart(userId);
    }

    const product = await Product.findById(productId);
    if (!product) throw new Error("Product not found");
    if (Array.isArray(product.sizes) && !product.sizes.includes(size)) {
      throw new Error("Selected size is not available for this product");
    }

    const existingItem = await CartItem.findOne({
      cart: cart._id,
      product: product._id,
      size,
      UserId: userId,
    });

    const itemPrice = Number(product.price) || 0;
    const itemDiscountedPrice = Number(product.discountedPrice) || itemPrice;

    if (existingItem) {
      existingItem.quantity += parsedQuantity;
      existingItem.price = itemPrice * existingItem.quantity;
      existingItem.discountedPrice = itemDiscountedPrice * existingItem.quantity;
      await existingItem.save();
    } else {
      const cartItem = new CartItem({
        cart: cart._id,
        product: product._id,
        size,
        quantity: parsedQuantity,
        price: itemPrice * parsedQuantity,
        discountedPrice: itemDiscountedPrice * parsedQuantity,
        UserId: userId,
      });

      await cartItem.save();
      cart.cartItems.push(cartItem._id);
    }

    await cart.save();
    return findUserCart(userId);
  } catch (error) {
    throw new Error(error.message);
  }
}

const cartService = {
  createCart,
  findUserCart,
  addItemToCart,
};

export default cartService;


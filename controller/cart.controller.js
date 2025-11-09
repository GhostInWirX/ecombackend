import cartService, { createCart } from "../service/cart.service.js";

const findUserCart = async (req, res) => {
    
    try {
        const userId = req.user?._id || req.user;
        const cart = await cartService.findUserCart?.(userId);
        if (!cart) {
            return res.status(404).send({ error: "Cart not found" });
        }
        return res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const addItemTocart = async (req, res) => {
  try {
    const userId = req.user?._id || req.user;
    const { productId, size, quantity } = req.body;

    const cart = await cartService.addItemToCart({
      userId,
      productId,
      size,
      quantity,
    });

    return res.status(200).json({
      success: true,
      message: "Item added to cart",
      cart,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
 const createCartController = async (req, res) => {
  try {
    // assuming req.user is set by authentication middleware (e.g., JWT)
    const user = req.user?._id || req.body.user;

    if (!user) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const cart = await createCart(user);

    return res.status(201).json({
      success: true,
      message: "Cart created successfully",
      cart,
    });
  } catch (error) {
    console.error("Error creating cart:", error.message);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to create cart",
    });
  }
};


export default {
    
    findUserCart,
    addItemTocart
}

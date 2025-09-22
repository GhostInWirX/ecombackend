import Cart from '../models/cart.model.js'
import CartItem from '../models/cartitem.model.js'
import Product from '../models/product.model.js';
async function createCart(user)
{
    try{

        const cart=new Cart({user:user,
            cartItems: [],
            totalPrice:0,
            totalDiscountedPrice:0,
            discount:0
    })

    
    const createdCart=await cart.save();
    return createdCart
    }
    catch(error)
    {
        throw new Error(error.message)
    }
}



async function findUserCart(userId) {
    try {
        let cart = await Cart.findOne({ user: userId });
        if (!cart) throw new Error("Cart not found");

        let cartItems = await CartItem.find({ cart: cart._id }).populate("product");
        cart.cartItems = cartItems;

        let totalDiscountedPrice = 0;
        let totalPrice = 0;
        let totalItem = 0;

        for (let cartItem of cart.cartItems) {
            const price = cartItem.product.price * cartItem.quantity; 
            const discountedPrice = cartItem.product.discountedPrice * cartItem.quantity;

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

async function addCartItem(req){
    try{
        const cart=await Cart.findOne({user:userId})
        const product=await Product.findById(req.productId)
        if(!cart||!product){
            throw new Error("Cart And Product Not Found")
        }
        const isPresent=await CartItem.findOne({cart:cart._id ,product:product._id ,userId})
        if(!isPresent)
        {
            const cartItem=new CartItem({
                product:product_id,
                cart:cart._id,
                quantity:1,
                userId,
                price:product.price,
                size:req.size,
                discountedPrice:product.discountedPrice
            })
        }

        const createcartItem=await CartItem.save()
        cart.cartItems.push(createcartItem)
        await cart.save()
        return "Item Is Added To The Cart"
    }
    catch(error){
        throw new Error (error.message)
    }
}


export default createCart


import Cart from '../models/cart.model.js'

async function createCart(user)
{
    try{
        const cart=new Cart({user:user_id,
            cartItems: [],
            totalPrice:0,
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

export default createCart


import userService from "./user.service";
import CartItem from "../models/cartitem.model";

async function findCartItemById(cartItemId)
{
    try{
        const cartItem=await CartItem.findById(cartItemId)
        if(cartItem)
        {
            return cartItem
        }
        else{
            throw new Error("Cart Item Not Found :",cartItemId)
        }
    }
    catch(error)
    {
        throw new Error (error.message)

    }
}



async function updateCartItem(cartItemId,cartitemData,userId)
{
    try{
        const item=await findCartItemById(cartItemId);
        if(!item)
        {
            throw new Error("Cart Item Not Found ",cartItemId)
        }

        const user =await userService.findUserByID(userId)
        if(!user)
        {
            throw new Error("User Not Found ",userId)
        }


        if(user._id==userId.toString())
        {
            item.quantity=cartitemData.quantity
            item.price=item.quantity* item.product.price
            item.discountedPrice=item.quantity * item.product.discountedPrice;
            const updatecart=await item.save()
            return updatecart
        }

        else{
            throw new Error("You Can't Update This Cart ")
        }
    }
    catch(error)
    {
        throw new Error(error.message)
    }

}

async function removecartitem(userid,cartitemId)
{
    const user = await userService.findUserByID(userid)
    const Cartitem= await findCartItemById(cartitemId)

    if(user._id.toString()==Cartitem.UserId.toString())
    {
        await CartItem.findByIdAndDelete(cartitemId)

    }
    throw new Error("You Cannot Remove Another User's Item")
}


export default {findCartItemById,removecartitem,updateCartItem}



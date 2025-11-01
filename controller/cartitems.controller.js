import CartItems from '../service/cartitem.services';

const updateCartItem=async(req,res)=>
{    
    const user =req.user;
    try{
        const updatecart=await CartItems.updateCartItem(req.params.id,req.body,user._id)
        return res.status(200).send(updatecart)


    }
    catch(error){
        return res.status(500).send({error:error.message});
    }

}

const RemoveCartItem=async(req,res)=>
{    
    const user =req.user;
    try{
        const deletecart=await CartItems.removecartitem(user._id,req.params.id)
        return res.status(200).send(deletecart)


    }
    catch(error){
        return res.status(500).send({error:error.message});
    }

}

module.exports={

    updateCartItem,
    RemoveCartItem
}
import cartitemServices from "./cartitem.services";
import userService from "./user.service";
import addresses from '../models/address.model.js'
import cartservice from './cart.service.js'
import orders from '../models/order.model.js'
async function createorder(shipAdress,user)
{

    let address

    if(shipAdress._id)
    {
        //fetching old address
        address=await addresses.findById(shipAdress._id)
    }
    //saving New Address
    else
    {
        address=new addresses(shipAdress);
        address.user=user._id;
        await address.save()
        user.address.push(address);
        await user.save()
    }

    const cart =await cartservice.findUserByID(user._id)
    const orderItems=[]
    for(const item of cart.cartitemServices )
    {
        const orderItem=new OrderItem({
            price:item.price,
            product:item.product,
            quantity:item.quantity,
            size:item.size,
            userId:item.userId,
            discountedPrice:item.discountedPrice
        })

        const createdOrderItem=await orderItem.save();
        orderItems.push(createdOrderItem)
    }

    const createorder=new orders ({
        user:user._id,
        orderItems,
        totalprice:cart.totalprice,
        totalDiscountedprice:cart.totalDiscountedprice,
        discount:cart.discount,
        totalitem:cart.totalItem,
        shipAdress:shipAdress,
        paymentDetails:{status:"Pending"},
        orderStatus:"PLACED"
    })
    const savedOrder=await createorder.save();
    return savedOrder
}

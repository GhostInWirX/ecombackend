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

//Place Order

async function placeOrder(orderId)
{
    const order=await orders.findById(orderId)
    order.orderStatus="SHIPPED"
    order.paymentDetails.status="COMPLETED"
    return await order.save()
}
//Ship Order
async function ShipOrder(orderId)
{
    const order=await findOrderById(orderId)
    order.orderStatus="SHIPPED"
    return await order.save()
}
//Deleiver Order
async function DeleiverOrder(orderId)
{
    const order=await findOrderById(orderId)
    order.orderStatus="Deleivery"
    return await order.save()
}
//Cancel Order
async function DeleiverOrder(orderId)
{
    const order=await findOrderById(orderId)
    order.orderStatus="Cancelled"
    return await order.save()
}
//Confirm Order
async function ConfirmOrders(orderId){
    const order=await findOrderById(orderId)
    order.orderStatus="Confirmed"
    return await order.save()
}

//Find Order By Id
async function findOrderById(orderId)
{
    const order =await orders.findById(orderId).populate("user").populate({path:"orderItems",populate:"product"}).populate("shipAdress")
    return order
}

//User Order History
async function userOrderHistory(userId,orderId)
{
    const orders=await orders.find({user:userId}).populate("user").populate({path:"orderItems",populate:"product"}).sort({"createdAt":-1}).lean();
    return orders
}
//Delete Orders
async function DeleteOrders(orderId)
{
    const order =await findOrderById(orderId);
    if(!order){
        throw new Error("Order Not Found")
    }
    await orders.findOrderByIdAndDelete(orderId)
    return {message :" Order Deleted Successfully "}
}
async function getAllOrders(){
    return await orders.find().populate("user").populate({path:"orderItems",populate:"product"})
    .lean()
}


module.exports={
    createorder,
    placeOrder,
    ShipOrder,
    DeleiverOrder,
    findOrderById,
    userOrderHistory,
    DeleteOrders,
    getAllOrders,
    ConfirmOrders
}




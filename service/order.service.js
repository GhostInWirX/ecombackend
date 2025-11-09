import cartitemServices from "./cartitem.services.js";
import userService from "./user.service.js";
import Address from '../models/address.model.js'
import cartservice from './cart.service.js'
import Order from '../models/order.model.js'
import OrderItem from '../models/orderitems.model.js'
async function createorder(shipAdress,user)
{

    let address

    if(shipAdress._id)
    {
        //fetching old address
        address=await Address.findById(shipAdress._id)
    }
    //saving New Address
    else
    {
        address=new Address(shipAdress);
        address.user=user._id;
        await address.save()
        user.address.push(address);
        await user.save()
    }

    const cart =await cartservice.findUserCart(user._id)
    const orderItems=[]
    for(const item of cart.cartItems )
    {
        const orderItem=new OrderItem({
            price:item.price,
            product:item.product,
            quantity:item.quantity,
            size:item.size,
            userId:item.UserId,
            discountedPrice:item.discountedPrice
        })

        const createdOrderItem=await orderItem.save();
        orderItems.push(createdOrderItem)
    }

    const createorder=new Order ({
        user:user._id,
        orderItems,
        totalPrice:cart.totalPrice,
        totalDiscountedPrice:cart.totalDiscountedPrice,
        totalItems:cart.totalItem,
        shippingAddress:address._id,
        paymentDetails:{ paymentstatus:"Pending" },
        orderStatus:"PLACED"
    })
    const savedOrder=await createorder.save();
    return savedOrder
}

//Place Order

async function placeOrder(orderId)
{
    const order=await Order.findById(orderId)
    order.orderStatus="SHIPPED"
    order.paymentDetails.paymentstatus="COMPLETED"
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
    order.orderStatus="DELIVERED"
    return await order.save()
}
//Cancel Order
async function CancelOrders(orderId){
    const order = await findOrderById(orderId);
    order.orderStatus = "Cancelled";
    return await order.save();
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
    const order =await Order.findById(orderId).populate("user").populate({path:"orderItems",populate:"product"}).populate("shippingAddress")
    return order
}

//User Order History
async function userOrderHistory(userId,orderId)
{
    const orderList=await Order.find({user:userId}).populate("user").populate({path:"orderItems",populate:"product"}).sort({"createdAt":-1}).lean();
    return orderList
}
//Delete Orders
async function DeleteOrders(orderId)
{
    const order =await findOrderById(orderId);
    if(!order){
        throw new Error("Order Not Found")
    }
    await Order.findByIdAndDelete(orderId)
    return {message :" Order Deleted Successfully "}
}
async function getAllOrders(){
    return await Order.find().populate("user").populate({path:"orderItems",populate:"product"})
    .lean()
}


export {
  createorder,
  placeOrder,
  ShipOrder,
  DeleiverOrder,
  CancelOrders,
  findOrderById,
  userOrderHistory,
  DeleteOrders,
  getAllOrders,
  ConfirmOrders
}




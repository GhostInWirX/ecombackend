import mongoose from "mongoose";

const cartSchema=new mongoose.Schema({
    user:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }],
    cartItem:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'cartitems',
        required:true
    }],
    totalPrice:{
        type:Number,
        required:true,
        default:0
    },
    totalDiscounted:{
        type:Number,
        required:true,
        default:0
    },
    discountedPercentage:{
        type:Number,
        required:true,
        default:0
    }
})

const Cart=mongoose.model('Cart',cartSchema)

export default Cart
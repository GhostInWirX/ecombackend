import mongoose from 'mongoose' 

const orderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    orderItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"orderitems"
    }],
    shippingAddress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    },

    paymentDetails:{
        paymentMethod:{
            type:String
        },
        paymentid:{
            type:String
        },
        transactionid:{
            type:String
        },
        paymentstatus:{
            type:String,
            default:"Pending"
        }
    },
    totalPrice:{
        type:Number,
        required:true
    },
    totalDiscountedPrice:{
        type:Number,
        required:true
    },
    orderStatus:
    {
        type:String,
        required:true,
        default:"PENDING"
    },
    totalItems:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Order=mongoose.model('orders' ,orderSchema)

export default Order
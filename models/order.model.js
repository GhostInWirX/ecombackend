import mongoose from mongoose 

const orderSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:user
    },
    orderItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"orderitems"
    }],
    shippingAddresss:{
        type:mongoose.Schema.Types.ObejctId,
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
    
})
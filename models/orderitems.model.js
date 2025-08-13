import mongoose from mongoose 
const orderItemSchema=new Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        required:true
    },
    Selectedsize:{
        type:String
    },
    Setquantity:{
        type:String,
        required:true,
        default:1
    },
    price:{
        type:Number,
        required:true

    },
    discountedPrice:{
        type:Number,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
})

const OrderItem=mongoose.model('orderitems' ,orderItemSchema);
export default OrderItem
import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    discountedPrice:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    sizes:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    ratings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ratings"
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"reviews"
    }],
    numRatings:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories"
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Product=mongoose.model("products",productSchema)
export default Product


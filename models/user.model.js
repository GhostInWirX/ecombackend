import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({

    Firstname:{
        type:String,
        required:true
    },
    Lastname:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        default:"CUSTOMER"
    },
    mobile:{
        type:String,
        required:true
    },
    address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    }],
    paymentInformation:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"payment_information"
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"reviews"
    }],
    ratings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ratings"
    }],
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const User=mongoose.model("user",UserSchema)

export default User
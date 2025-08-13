import mongoose from "mongoose";

const AddressSchema=new mongoose.Schema({

    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    streetaddress:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zipCode:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    user:[{
        type:mongoose.Schema.ObjectId,
        ref:"users"
    }]
})
const adress=mongoose.model("addresses",AddressSchema)
export default AddressSchema
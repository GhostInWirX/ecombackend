import mongoose from 'mongoose'

const ratingSchema=new mongoose.Schema({

    rating:{
        type:Number,
        required:true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products',
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
});

const Rating=mongoose.model('ratings',ratingSchema)

export default Rating
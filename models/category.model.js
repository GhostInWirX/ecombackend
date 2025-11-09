import mongoose from 'mongoose';

const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:50
    },
    level:{
        type:Number,
        required:true
    }
})

const Category = mongoose.model('categories',categorySchema)
export default Category
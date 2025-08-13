import mongoose from mongoose 

const Subcatogory=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    parentCategory:{
        type:mongoose.model.Types.ObjectId,
        ref:"categories"
    }
})

const SubCategory=mongoose.model('subcategories',Subcatogory)
export default SubCategory
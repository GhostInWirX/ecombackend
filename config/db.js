import mongoose from 'mongoose'
const mondbURL="mongodb+srv://muqqadam:test123@cluster0.wswgsi9.mongodb.net/ecommerce?retryWrites=true&w=majority"

const connectdb=async()=>{
    try {
         console.log("Connecting To MongoDB....")
         await mongoose.connect(mondbURL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
         })
         console.log("Mongo DB Connected ")
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message)
         process.exit(1)
    }
}

export default connectdb
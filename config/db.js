import mongoose from 'mongoose'
const mondbURL="mongodb+srv://lpcod4067:riaz123456@cluster0.g9bwdp7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectdb=()=>{
    console.log("MongoDB Is Connected")
    return mongoose.connect(mondbURL)
}
export default connectdb
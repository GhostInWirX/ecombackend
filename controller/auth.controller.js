import userService from "../service/user.service.js"
import jwtprovider from "../config/jwtprovider.js";
import createCart from '../service/cart.service.js'
const register = async(req,res)=>{
    try{
        const User=await userService.CreateUser(req.body);
        const jwt=jwtprovider.generateToken(User._id)
        await createCart(User)
        return res.status(200).send({jwt,message:"User Registered Successfully"})
    }
    catch(error){

        return res.status(500).send({error:error.message})
    }
}

export default {register}
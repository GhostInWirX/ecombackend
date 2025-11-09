import userService from "../service/user.service.js"
import jwtprovider from "../config/jwtprovider.js";
import { createCart } from '../service/cart.service.js'
import bcrypt from 'bcrypt'
const register = async (req, res) => {
    try {
        const User = await userService.CreateUser(req.body);
        const jwt = jwtprovider.generateToken(User)
        await createCart(User)
        return res.status(200).send({ jwt, message: "User Registered Successfully" })
    }
    catch (error) {

        return res.status(500).send({ error: error.message })
    }
}

const login = async (req, res) => 
{
    try {
         const { password, email } = req.body;
        const user = await userService.findUserByEmail(email);
        if (!user) {
            return res.status(404).send({message: 'user not found with email : ', email})
        }
    const isPasswordValid = await bcrypt.compare(password, user.Password);
    if (!isPasswordValid) 
    {
        return res.status(401).send({message: "Invalid Password..."})
    }

    const jwt =jwtprovider.generateToken(user);
    console.log(jwt)
    return res.status(200).send({jwt ,message:"Login Successfull"})
} 

catch (error) {
    
        return res.status(500).send({ error: error.message })
}
}

export default { register ,login}
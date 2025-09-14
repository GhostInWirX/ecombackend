import userService from '../service/user.service.js'

const getUserProfile=async (req , res)=>{
    try{
        const authHeader =req.headers.authorization || ""
        const jwt = authHeader.startsWith("Bearer ")?authHeader.slice(7).trim() : "";
        
        if(!jwt)
        {
            return res.status(404).send({error:"Token Not Found"})
        }
        const user=await userService.getUserProfileByToken(jwt)
        return res.status(200).send(user)
    }
    catch(error)
    {
        return res.status(500).send({error:error.message})
    }
}

const getAllUsers =async (req,res)=>{
    try{
        const users=await userService.getAllUsers();
        return res.status(200).send(users)
        }
    catch(error){
        return res.status(500).send({error:error.message});
    }
}

export default {getAllUsers,getUserProfile}
import jwtprovider from "../config/jwtprovider";
import userService from "../service/user.service";

const authenticate=async(req,res,next)=>
{
    try{
        const token=req.headers.authorization?.split("")[1];
        if(!token)
        {
            return res.status(404).send({error:"token not found"})
        }
        const userId=jwtprovider.getUserIdFromToken(token)
        const user=userService.findUserByID(userId)
        req.user=user
    }
    catch(error)
    {
        return res.status(500).send({error:error.error.message})
    }
    next();

}

modules.export={
    authenticate
}
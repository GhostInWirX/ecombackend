import jwt from 'jsonwebtoken'
const SECRET_KEY="Twinkle Twinkle Littl Star"

const generateToken=(user)=>{
    const payload={
        userId:user?._id?.toString?.() || user?._id ||user,
        role:user?.role
    }
    const token =jwt.sign(payload,SECRET_KEY,{expiresIn:"24h"})
    return token;
}

const getUserIdFromToken =(token)=>
{
    const decodedToken=jwt.verify(token,SECRET_KEY);
    return decodedToken.userId;
}

export default {generateToken,getUserIdFromToken}




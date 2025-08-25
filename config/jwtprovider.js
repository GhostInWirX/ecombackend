import jwt from 'jsonwebtoken'

const SECRET_KEY="Twinkle Twinkle Littl Star"

const generateToken=(userID)=>{
    const token= jwt.sign({userID},SECRET_KEY,{expiresIn:"24h"});
    return token;
}


const getUserIdFromToken =(token)=>
{
    const decodedToken=jwt.verify(token,SECRET_KEY);
    return decodedToken.userID;
}


export default {generateToken,getUserIdFromToken}




import User from '../models/user.model'
import bcrypt from 'bcrpyt'
import jwtprovider from '../config/jwtprovider'
const CreateUser = async (UserData) => {

    try {
        let { firstname, lastname, password, email } = UserData;
        const isUserExist = await User.findOne({ email });

        if (isUserExist) {
            throw new Error("User Already Exists With This Email ")
        }

        password = await bcrypt.hash(password, 8);

        const user = await User.create({ Firstname: firstname, Email: email, Password: password, Lastname: lastname })

        console.log("User Created ", user)

        return user
    }
    catch (error) {
        throw new Error(error.message)
    }
    
}

const findUserByID = async(userid)=>{
    try{
        const user=await User.findById(userid).populate("address")

        if(!user){
            throw new Error("User Not Found With The ID" + userid)
        }
        return user;
    }
    catch(error){
        throw new Error(error.message)
    }
}

const findUserByEmail = async(email)=>{
    try{
        const useremail=await User.findUserByEmail({email})

        if(!useremail){
            throw new Error("User Not Found With The Email" + useremail)
        }
        return useremail;
    }
    catch(error){
        throw new Error(error.message)
    }
}


const getUserProfileByToken=async(token)=>{
    try{
        const userId=jwtprovider.getUserIdFromToken(token)
        const user =await findUserByID(userId)

        if(!user){
            throw new Error("User Not Found `")
        }
        return user;
        
    }
    catch(error){
        throw new Error(error.message)
    }
}

const getAllUsers=async ()=>{
    try{
        const users=await User.find();
        return users;
    }
    catch(error){
        throw new Error(error.message)
    }
};

export default {CreateUser,findUserByID,findUserByEmail,getAllUsers,getUserProfileByToken}
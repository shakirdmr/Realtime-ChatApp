import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model.js';

const secureRoute =async (req, res, next)=>{


    try {
        const token = req.cookies.jwt;

        if(!token)
            res.status(400).json({result:false,message:"No TOKEN FOUND IN COOKIES"});
        

        const decodeToken = jwt.verify(token, process.env.JWT_SECRET);

        if(!decodeToken)
            res.status(400).json({result:false,message:"Inavlid Token Found"});


        const ourLoggedUser =await UserModel.findById(decodeToken.newUserID).select("-password");

        // console.log(ourLoggedUser);

        req.user = ourLoggedUser;

        next();

    } catch (error) {
            res.status(400).json({result:false, message:"ERROR : "+error});
        
    }



}

export default secureRoute
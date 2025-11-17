import { use } from "react";
import { User } from "../models/user_model.js";

const registerUser = async(req, res) =>{
    try {
        const {username, password, email} = req.body;
        //Basic Validation
        if(!username || !password || !email){
            return res.status(400).json({
                message:"All field are important"
            })
        }
        const existing = await User.findOne({email: email.tolowerCase()});
        if (existing){
            return res.status(400).json({
                message:"User already exist"
            })
        }

        const user = await User.create({
            username,
            email: email.tolowerCase(),
            password,
            loggedIn: false,
        });

        res.status(201).json({
            message:"User Created",
            user: {id: user._id, email: user.email, username: user.username}
        });
    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error",
            error: error.message
        })
    }
};


export{
    registerUser
}
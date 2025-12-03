import { Router } from "express";
import { sample_user } from "../data";
import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import { User, UserModl } from "../models/user.model";
import bcrypt from 'bcryptjs'

const ramp=Router();

ramp.get("/seed",asyncHandler(
    async function(req,res){
        const usercount=await UserModl.countDocuments();
        if(usercount>0){
            res.send("Seed is already done!");
            return;
        }
        await UserModl.create(sample_user);
        res.send("Seed Is Done!");
    }
));

ramp.post("/login",asyncHandler(
    async function(req,res){
    const{email,password}=req.body;
    const user=await UserModl.findOne({email});
    if (!user){
        res.status(400).send("Email is not valid!");
        return;
    }
    const passwordMatch = await bcrypt.compare(password,user.password);
    if (!passwordMatch) {
        res.status(400).send("Password is not valid!");
        return;
    }

    res.send(generateTokenResponse(user));

}
));

ramp.post("/register",asyncHandler(
    async function(req,res){
        const{name,email,password}=req.body;
        const user=await UserModl.findOne({email});
        if(user){
            res.status(400).send("This email is already used, please use another email!");
            return;
        }
        const HashedPasword=await bcrypt.hash(password,10);
        const newUs:User={
            id:'',
            name,
            email:email.toLowerCase(),
            password:HashedPasword,
            isAdmin:false
        }
        const dbUser=await UserModl.create(newUs);
        res.send(generateTokenResponse(dbUser));
    }
));

const generateTokenResponse=(user:User)=>{
    const token=jwt.sign({
        email:user.email,isAdmin:user.isAdmin
    },process.env.JWT_SECRET!,{
        expiresIn:"30d"
    });
    return {
        id: user.id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
        token
    };
}

export default ramp;
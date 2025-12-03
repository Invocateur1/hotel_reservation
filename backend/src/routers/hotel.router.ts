import { Router } from "express";
import {sample_hotel} from "../data";
import asyncHandler from 'express-async-handler';
import { HotellModel } from "../models/hotel.model";

const mapp=Router();

mapp.get("/seed",asyncHandler(
    async function(req,res){
        const hotelConut=await HotellModel.countDocuments();
        if(hotelConut>0){
            res.send("Seed is already done!");
            return;
        }
        await HotellModel.create(sample_hotel);
        res.send("Seed Is Done!");
    }
))

mapp.get("/",asyncHandler(
    async function(req,res){
        const hotels=await HotellModel.find();
        res.send(hotels);
    }
));

mapp.get("/search/:searchTerm",asyncHandler(
    async function(req,res){
    const searchRegex=new RegExp(req.params.searchTerm,'i');
    const hotels=await HotellModel.find({name:{$regex:searchRegex}});
    res.send(hotels);
    }
));

mapp.get("/:hotelId",asyncHandler(
    async function(req,res){
    const hotel=await HotellModel.findById(req.params.hotelId);
    res.send(hotel);
    }
))

mapp.post("/ajout",asyncHandler(
    async function(req,res){
        const hotelData=req.body;
        const hotel=await HotellModel.create(hotelData);
        res.send(hotel);
    }
));



export default mapp;

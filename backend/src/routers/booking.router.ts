import { Router } from "express";
import { BookingModel } from "../models/booking.model";
import asyncHandler from 'express-async-handler';
import jwt from "jsonwebtoken";

const router = Router();

router.post("/",asyncHandler(
    async(req,res)=>{
      const authHeader=req.headers.authorization;
      if(!authHeader?.startsWith("Bearer ")){
        res.status(401).json("No token");
        return;
      }

      const token=authHeader?.split(" ")[1];

      let decoded=jwt.verify(token, process.env.JWT_SECRET!);

      if(!decoded) {
        res.status(401).json("Invalid token");
        return;
      }

      const {userId,hotelId,checkIn,checkOut}=req.body;

      const today=new Date();
      const inDate=new Date(checkIn);
      const outDate=new Date(checkOut);
      today.setHours(0,0,0,0);
  
      if(inDate<today){
        res.status(400).json("Check-in date cannot be in the past.");
        return;
      }

      if(inDate>=outDate){
        res.status(400).json("Check-in date must be before check-out date.");
        return;
      }
      
      const overlappingBooking=await BookingModel.findOne({hotelId
        ,checkIn:{$lte:outDate}
        ,checkOut:{$gte:inDate}
      });

      if(overlappingBooking){
        res.status(409).json("This hotel is already booked for the selected dates");
        return;
      }
        
      try{  
        const booking=new BookingModel({userId,hotelId,checkIn:inDate,checkOut:outDate});
        await booking.save();
        res.status(201).json({message: "Booking created successfully",booking});
      }
      catch(err:any){
        res.status(400).json({message: err.message});
      }
    }
  )
);

router.delete("/:id",asyncHandler(
  async(req,res)=>{

    const bookingId=req.params.id;
    const deleted=await BookingModel.findByIdAndDelete(bookingId);

    if(!deleted){
      res.send("Booking not found");
      return;
    }

    res.send({
      message:"Booking canceled successfully",
      deleted
    });

  }
));


export default router;

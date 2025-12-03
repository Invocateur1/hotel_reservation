import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import HotelRouter from "./routers/hotel.router";
import UserRouter from "./routers/user.router";
import BookingRouter from "./routers/booking.router";
import { dbConn } from "./configs/database.config";

dbConn();
const app=express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/hotels",HotelRouter);
app.use("/api/users",UserRouter);
app.use("/api/bookings",BookingRouter);

const port=5000;
app.listen(port,function(){
    console.log("Website served on http://localhost:"+port);
})

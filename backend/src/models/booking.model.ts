import { Schema,model } from "mongoose";

export interface Booking{
    userId:string;  
    hotelId:string;
    checkIn:Date;
    checkOut:Date;
}

const bookingSchema=new Schema<Booking>({
    userId:{type:String,required:true},
    hotelId:{type:String,required:true},
    checkIn:{type:Date,required:true},
    checkOut:{type:Date,required:true}
    },{
        toJSON:{virtuals:true},
        toObject:{virtuals:true},
        timestamps:true
    });

export const BookingModel=model<Booking>('Booking',bookingSchema);
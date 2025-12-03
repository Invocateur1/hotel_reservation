import { Schema,model } from "mongoose";

export interface Hotel{
    id:string;
    name:string;
    bedroom:number;
    bathroom:number;
    imageUrl:string;
    price:number;
}
export const HSchema=new Schema<Hotel>({
    name:{type:String, required:true},
    price:{type:Number,required:true},
    bedroom:{type: Number,required:true},
    bathroom:{type: Number,required:true},
    imageUrl:{type:String,required:true}
    },{
        toJSON:{virtuals:true},
        toObject:{virtuals:true},
        timestamps:true
    }
);
export const HotellModel=model<Hotel>('hotel',HSchema);
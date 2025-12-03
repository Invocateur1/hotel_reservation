import { Schema,model } from "mongoose";

export interface User{
    id:string;
    email:string;
    name:string;
    password:string;
    isAdmin:boolean;
}
export const USSchema=new Schema<User>({
    name:{type:String, required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean,required:true}
    },{
        timestamps:true,
        toJSON:{virtuals:true},
        toObject:{virtuals:true}
    }
)
export const UserModl=model<User>('user',USSchema);
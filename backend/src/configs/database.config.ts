import {connect} from "mongoose";

export const dbConn=()=>{
    connect(process.env.MONGO_URL!).then(
        ()=>console.log("connected successfully"),
        (error)=>console.log(error)
    );
}
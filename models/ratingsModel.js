import mongoose from "mongoose";

const ratingsSchame=mongoose.Schema({
          userId:{
                    type:Number,
                    required:true
          },
          rating:{
                    type:Number,
                    required:true,
                    default:0
          },
})
export default ratingsSchame

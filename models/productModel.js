import mongoose from "mongoose";
import ratingsSchame from "./ratingsModel.js";





const PruductSchame=mongoose.Schema({
          name:{
                    type:String,
                    required:true
          },
          Image:{
                    type:String,
                    required:true
          },
          category:{
                    type:String,
                    required:true
          },
          description:{
                    type:String,
                    required:true
          },
          price:{
                    type:Number,
                    required:true
          },
          oldprice:{
                    type:Number,
                    required:true
          },
          countInStock:{
                    type:Number,
                    required:true
          },
          rating:{
                    type:Number,
                    required:true,
                    default:0
          },
          ratings:[ratingsSchame]
})
const product=mongoose.model('products', PruductSchame)
export default product

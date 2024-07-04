import mongoose from 'mongoose';

const UserSchame=mongoose.Schema({
          name:{
                    type:String,
                    requires:true
          },
          email:{
                    type:String,
                    requires:true
          },
          password:{
                    type:String,
                    requires:true
          },
          isAdmin:{
                    type:Boolean,
                    requires:false,
                    default:false
          },
          phone:{
                    type:Number,
                    requires:true
          },
          address:{
                    type:String,
                    requires:true
          },
          carts:[



          ],
          wishlist:[

          ]
})
const Users=mongoose.model('users', UserSchame)
export default Users

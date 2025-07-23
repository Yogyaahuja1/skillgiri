const mongoose =require('mongoose');

const userSchema=new mongoose.Schema({
    name: {type:String,required:true},
    email: {type: String,unique:true,required:true},
    phone:{type:Number,required:true},
    referrerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
   referredUsers: {
    type: Number,
    default: 0
  }
})
module.exports=mongoose.model('user',userSchema);
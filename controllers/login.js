const User =require('../models/user');
const jwt=require('jsonwebtoken');

const login=async (req,res)=>{
     console.log("body is",req.body);
     const {email,password}=req.body;
     const user=await User.findOne({email});
     console.log(user);

     if(!user||user.password!=password)return res.status(401).json({error:'invalid'});

     const token=jwt.sign(
        {
            id:user._id,
            email:user.email
        },process.env.SECRET_KEY
     )

     console.log(`token sent with ${user._id} and ${user.email}`);

      console.log('Signed JWT:', token);
      return res.json({token});
}

module.exports=login;
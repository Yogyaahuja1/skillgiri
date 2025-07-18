const user =require('../models/user');

const signup= async (req,res) =>{
    console.log("body is",req.body);
    const {name,email,phone}=req.body;

    try{
        const exits=user.findOne({email:email});
        if(exits) return res.status(400).json({message:'email already'});

        else 
        {
            const newUser=new user({name,email,phone})
            await newUser.save();
            res.status(201).json({ message: 'User registered successfully' });
        }
    }
    catch (err){
        console.error('Signup error:', err.message);
        res.status(500).json({ message: 'Server error' });
  }
    };
    module.exports=signup;


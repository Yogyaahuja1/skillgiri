const user =require('../models/user');

const signup= async (req,res) =>{
    console.log("body is",req.body);
    const {name,email,phone,password,referredId}=req.body;

    try{
        const exits=await user.findOne({email:email});
        if(exits) return res.status(400).json({message:'email already'});

        else 
        {
            const newUser=new user({name,email,phone,password,referredId:referredId||null});
            await newUser.save();
            console.log("user saved",newUser);
             if (referredId) {
                await user.findByIdAndUpdate(referredId, {
                $inc: { referredUsers: 1 }
                });
            }
            const referralLink = `https://skillgiri.com/signup?ref=${newUser._id}`;
            res.send(`<h2>Signup successful!</h2><p>Your referral link:</p><code>${referralLink}</code>`);
        }
    }
    catch (err){
        console.error('Signup error:', err.message);
        res.status(500).json({ message: 'Server error' });
  }
    };
    module.exports=signup;



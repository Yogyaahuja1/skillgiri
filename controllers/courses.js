const user =require('../models/user');

const find=async(req,res)=>{
    const userId=req.user.id;
    try{
        const User=await user.findById(userId);
        const {courseId}=req.params;

        if(!User.courses.includes(courseId)){
            User.courses.push(courseId);
            await User.save();
            res.json({message:`enrolled to course ${courseId}`});
        }
        else{
            res.status(400).json({message:'already enrolled'});
        }
    }catch{
        res.status(500).json({message:'error in backend/registering courses'});
    }
}
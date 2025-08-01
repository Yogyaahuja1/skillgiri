const jwt = require('jsonwebtoken');
function authenticateToken(req,res,next){
    const authheader=req.headers['authorization'];
    const token=authheader.split(' ')[1];

    if(!token)return res.status(401).json({error:'invalid'});

    jwt.verify(token,process.env.SECRET_KEY,(err,userData)=>{
        if(err)return res.status(403).json({message:'erorr'});
        console.log('Decoded token payload:', userData);
        req.user=userData;
        console.log(userData);
        next();
    })
}
module.exports=authenticateToken;

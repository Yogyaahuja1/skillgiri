const mongoose=require('mongoose');

const connectdb= async ()=>{
    try{
         await mongoose.connect(process.env.MONGO_URI);
         console.log('Mongodb connected');
    }
   catch(err) {
    console.error("connection failed");
    process.exit(1);
   }
   
}
module.exports=connectdb;
const express=require('express');
const router=express.Router();
const  authenticateToken=require('../middleware/authenticateToken');
const courses=require('../controllers/courses');

router.post('/enroll/:courseId',authenticateToken,courses);
module.exports=router;
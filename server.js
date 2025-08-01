const express=require('express');
const dotenv=require('dotenv');
const path=require('path');
const connectdb= require('./config/db');
const authRoutes = require('./routes/authroutes');
const logger=require('./middleware/logger');
const userroutes=require("./routes/userroutes");
const loginroute=require("./routes/loginroute")


dotenv.config();
connectdb();
const app=express();

app.use(logger);
app.use(express.json()); // Parses incoming JSON
app.use(express.urlencoded({ extended: true })); // Parses form submissions
app.use(express.static(path.join(__dirname, 'public'))); // Serves frontend files

// Routes
app.use('/api/auth', authRoutes);
app.use(userroutes);
app.use(loginroute);


// Start server
const PORT = process.env.PORT || 300;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

const express=require('express');
const dotenv=require('dotenv');
const path=require('path');
const connectdb= require('./config/db');
const authRoutes = require('./routes/authRoutes');
const logger=require('./middleware/logger');

dotenv.config();
connectdb();
const app=express();

app.use(logger);
app.use(express.json()); // Parses incoming JSON
app.use(express.urlencoded({ extended: true })); // Parses form submissions
app.use(express.static(path.join(__dirname, 'public'))); // Serves frontend files

// Routes
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 300;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

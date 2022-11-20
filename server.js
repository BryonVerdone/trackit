const express = require('express');
const app = express();
const connectDB = require('./config/database');
const mainRoutes = require('./routes/main');
const mongoose = require('mongoose');
require('dotenv').config({ path: './config/.env' });
connectDB();

app.set('view engine', 'ejs');
app.use('/', mainRoutes);
app.listen(process.env.PORT, () => {
  console.log(`server is running on port `, process.env.PORT);
  // console.log(secret);
});

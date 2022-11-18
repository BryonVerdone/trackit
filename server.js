const express = require('express');
const app = express();
const mainRoutes = require('./routes/main');
require('dotenv').config({ path: './config/.env' });
require('dotenv').config({ path: './config/.env' });
app.use('/', mainRoutes);
app.listen(process.env.PORT, () => {
  console.log(`server is running on port `, process.env.PORT);
  // console.log(secret);
});

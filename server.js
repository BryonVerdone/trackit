const express = require('express');
const app = express();

require('dotenv').config({ path: './config/.env' });
require('dotenv').config({ path: './config/.env' });
app.listen(process.env.PORT, () => {
  console.log(`server is running on port `, process.env.PORT);
  // console.log(secret);
});

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('./config/passport');
const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
const methodOverride = require('method-override');
const flash = require('express-flash');
const logger = require('morgan');
const connectDB = require('./config/database');
const mainRoutes = require('./routes/main');
const assetRoutes = require('./routes/assets');

// use .env file
require('dotenv').config({ path: './config/.env' });

//passport config

// require('./config/passport')(passport);

//connect to mongodb
connectDB();

//ejs for views
app.set('view engine', 'ejs');

//static files
app.use(express.static('public'));

//body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//logging
app.use(logger('dev'));

//use forms for put / delete
app.use(methodOverride('_method'));

//setup session -stored in mongo db
// app.use(
//   session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false,
//     store: new MongoStore({ mongooseConnection: mongoose.connection }),
//   })
// );
//passport middleware

// app.use(passport.initialize());
// app.use(passport.session());
// flash messages for errors

// app.use(flash());

app.use('/', mainRoutes);
app.use('/post', assetRoutes);

//server running
app.listen(process.env.PORT, () => {
  console.log(`server is running on port `, process.env.PORT);
  // console.log(secret);
});

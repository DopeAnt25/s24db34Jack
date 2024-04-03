var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose'); // Import mongoose here

require ('dotenv').config();
const connectionString = process.env.MONGO_CON;

mongoose.connect(connectionString); // Connect to MongoDB

//get the default connection
var db = mongoose.connection;

//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once("open",function(){
  console.log("connection to DB succeeded");
});

var Drone = require('./models/drone');
var resourceRouter = require('./routes/resource');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dronesRouter = require('./routes/drones');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/drones', dronesRouter);
app.use('/grid', gridRouter);
app.use('/randomitem', pickRouter);
app.use('/resource', resourceRouter);

async function recreateDB(){
  await Drone.deleteMany();
  let instance1 = new Drone({model: "Phantom 4 Pro", purpose: "Aerial Photography", flight_range: 7 })
  let instance2 = new Drone({model: "DJI Mavic Air 2", purpose: "Recreational", flight_range: 10 })
  let instance3 = new Drone({ model: "DJI Inspire 2", purpose: "Professional Filmmaking", flight_range: 15 })

  instance1.save().then(doc =>{
    console.log("first obj saved")
  }).catch(err=> {
    console.log(err)
  })
  instance2.save().then(doc =>{
    console.log("second obj saved")
  }).catch(err=> {
    console.log(err)
  })
  instance3.save().then(doc =>{
    console.log("third obj saved")
  }).catch(err=> {
    console.log(err)
  })
}
let reseed = true;
if (reseed){
  recreateDB()
}
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

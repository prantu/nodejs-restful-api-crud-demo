var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'), 
  bodyParser = require('body-parser');
  
// Connecting mongoose with mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/carsdb'); // 'carsdb' is our main database for this operation
var Car = require('./api/models/carListModel');// Loading the Car model
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/carListRoutes'); // Loading route
routes(app); // Registering the route

// This block will populate the mongodb with dummy data from local cars.json file IF the mongodb is empty. So there will be always something to play with
mongoose.connection.on('connected', function () { 
  console.log('Mongoose default connection open to ' + 'carsdb');
  
  // To Count Documents of a particular collection
  mongoose.connection.db.collection('cars').countDocuments(function(err, count) {
      // If the collection is empty 
      if( count == 0) {
        // We are gonna load the local JSON array to the database 
        var fs = require('fs');
         Car = mongoose.model('Cars');
    
        // Populating mongodb with local json arrays
        fs.readFile('./cars.json', 'utf8', function (err,data) {
            data = JSON.parse(data);
            console.log('Adding JSON data to mongodb');
            for(var i = 0; i < data.length; i++) {
              var newCar = new Car();
              newCar.make = data[i].make;
              console.log(data[i]);
              newCar.model = data[i].model;
              newCar.color = data[i].color;
              newCar.dealerName = data[i].dealerName;
              newCar.save(function(err) {});
            }
        });
      }
      else {
          console.log("Found Records : " + count);
      }
  });
});


app.listen(port);

console.log('RESTful API server started on: ' + port);
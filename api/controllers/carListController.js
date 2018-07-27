'use strict';

var mongoose = require('mongoose'),
  Car = mongoose.model('Cars');

exports.list_all_cars = function(req, res) {
  Car.find({}, function(err, car) {
    if (err)
      res.status(404).send(err);
    res.status(200).json(car);
  });
};


exports.create_a_car = function(req, res) {
  var new_car = new Car(req.body);
  new_car.save(function(err, car) {
    if (err)
      res.status(500).send(err);
    res.status(201).json(car);
  });
};

// What not to show in json reponse
var excludeParams = { 
    __v: false
};

exports.get_a_car = function(req, res) {
  Car.findById(req.params.carId, function(err, car) {
//    Car.find({id:req.params.autoIncr_id}, {}, function(err, car){
    if (err)
      res.status(400).send(err);
    res.status(200).json(car);
  });
};


exports.update_a_car = function(req, res) {
  //Car.findOneAndUpdate({id: req.params.autoIncr_id}, req.body, {new: true}, function(err, car) {
  Car.findOneAndUpdate({_id: req.params.carId}, req.body, {new: true}, function(err, car) {
    if (err)
      res.status(400).send(err);
    res.status(200).json(car);
  });
};


exports.delete_a_car = function(req, res) {
  Car.findByIdAndRemove(req.params.carId, function(err, car) {
    if (err)
      res.status(400).send(err);
    res.status(204).json({ message: 'Car successfully deleted' });
  });
};
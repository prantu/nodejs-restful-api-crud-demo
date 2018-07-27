# A basic app with Simple RESTful API with CRUD using Nodejs + Express + Mongodb
## Mostly learned from [LinkedIn Nodejs tutorial](https://www.linkedin.com/learning/building-restful-web-apis-with-node-js-and-express/)

### This is a simple node app to do CRUD operations with a RESTful API to interact with the server (PORT 4000).
#### Use [Postman](https://getpostman.com) for API call tests
##### Examples
Get all cars
> GET CARS/ | http://localhost:4000/cars

Get a car
> GET CARS/<_id> | http://localhost:4000/cars/here-is-your-car-id

Add a car
> POST CARS/

Update a car
> PUT CARS/<_id>

Delete a car
> DELETE CARS/<_id>

# How to use

### Required Packages
*nodejs*, *npm*

Install using Linux command line tool 
> sudo apt install nodejs

> sudo apt install npm

Check if Node or Node is installed
> node -v
> npm -v

Clone this repo
> git clone https://github.com/prantu/nodejs-restful-api-crud-demo.git

Go to the folder and install all dependencies
> npm install

### Running the App

Initiate the database
> mongod

Run the server
> npm run start

nodemon is attached so any new commit will automatically restart the server

## Troubleshoot

### Error Message
```
Unable to lock file: /data/db/mongod.lock. Is a mongod instance already running?, terminating
```
That means an instance of mongod is already running. To kill it use
> mongo --eval "db.getSiblingDB('admin').shutdownServer()"
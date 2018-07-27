# A basic app with Simple RESTful API with CRUD using Nodejs + Express + Mongodb
## Mostly learning from [LinkedIn Nodejs turotial] (https://www.linkedin.com/learning/building-restful-web-apis-with-node-js-and-express/)

# How to use

### Required Packages
*nodejs*, *npm*

Install using command line tool 
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
> npm mongo

Run the server
> npm run start

## Troubleshoot

### Error Message
```
Unable to lock file: /data/db/mongod.lock. Is a mongod instance already running?, terminating
```
That means an instance of mongod is already running. To kill it use
> mongo --eval "db.getSiblingDB('admin').shutdownServer()"
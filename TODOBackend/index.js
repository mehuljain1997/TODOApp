const express = require('express');
const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser');
var cors = require('cors');

// create express app
const app = express();
app.use(cors());



// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))


// parse requests of content-type - application/json
app.use(bodyParser.json())


app.use(function (req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,If-Modified-Since,Authorization,multipart/form-data');
    
    if (req.method == 'OPTIONS') {
    res.status(200).end();
    } else {
    next();
    }
    });
    

    const dbConfig = require('./config/database.config.js');
    const mongoose = require('mongoose');
    
    mongoose.Promise = global.Promise;
    
    // Connecting to the database
    mongoose.connect(dbConfig.url, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database");    
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });
      
    

    require('./app/routes/Product.routes.js')(app);

// listen for requestsr
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

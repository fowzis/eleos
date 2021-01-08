// Require packages and set the port
const port = 9999;
const express = require('express');
const bodyParser = require('body-parser');
//const dotenv = require('dotenv').config();
const routes = require('./routes');

const app = express();

//const AuthKey = process.env.ELEOS_AUTH_KEY;

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
// To prevent: Access has been blocked by CORS policy
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

routes(app);

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});	
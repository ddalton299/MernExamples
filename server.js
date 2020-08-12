const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



const app = express(); 

// body parser
app.use(bodyParser.json()); 

// DB config

const db = require('./config/keys').mongoURI; 

// connect to mongo

mongoose.connect(db,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Mongo')).catch(err => console.log(err));
    
const port = process.env.port || 5000; 

app.listen(port, () => console.log('Click Here:https://localhost:' + port));

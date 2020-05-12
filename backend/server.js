require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const path = require('path')
const app = express();
const mongoose = require('mongoose');

// MongoDB and Mongoose

mongoose.Promise = require('bluebird');

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.on('connected', function () {  
  console.log(`Database connection open to ${connection.host} ${connection.name}`);
});
connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
});
connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

// Express App

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride());
app.use(cookieParser());

require('./routes')(app);

app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
})

// Listening Port

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
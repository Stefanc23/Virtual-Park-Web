require('dotenv').config();
const express = require('express');
require('express-async-errors');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();
const mongoose = require('mongoose');

// MongoDB and Mongoose

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connection to database was opened successfully");  
})

// Express App

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'));
})

// Listening Port

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
var _ = require('lodash');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send(__dirname + "public/index.html")

});

app.post('/', (req, res) => {
    const name = req.body.name;
    console.log(name);
    console.log(req)
});



app.listen(3000, () => {
    console.log("server running in 3000");
})

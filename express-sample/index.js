const express = require('express'); //ES6 can't be used here, have to be ES5
const app = express();

// Res is the response. In this get return this msg.
app.get('/', function(req, res) {
    res.json({
        node: "hi"
    });
});

// Listen on 8080
app.listen(8080, function() {
    console.log('Hello World');
});
var express = require('express');
var app = express();

var productMap = {
    'a': 100,
    's': 1200,
    'd': 323
};

app.get('/catalog', function (req, res) {
    res.send(productMap);
});

app.use(express.static('dist'));

app.listen(8080, function() {
    console.log('Point of Sale listening on port 8080!');
});
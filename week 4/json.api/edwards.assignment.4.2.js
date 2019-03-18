var express = require('express');
var http = require ('http');
var logger = require ('morgan');

var app = express();

app.use(logger('dev'));

app.get('/customer/:id', function(require, response) {

    var id = parseInt(req.params.id, 10);

    response.json({
        firstName:'Leo',
        lastName:'Tolsoy',
        employeeId: id,
    });
});

http.createServer(app).listen(3000, function() {
    console.log('Application has started and is listening on port 3000');
});

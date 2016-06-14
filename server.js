//
// # SimpleServer
//
// A simple Express server
//
var http = require('http');
var path = require('path');

var express = require('express');
var bodyParser = require('body-parser');

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);

router.use(bodyParser.json());

router.use(express.static(path.resolve(__dirname, 'client')));

// API Routes
router.get('/api/v1/getData', function(request, response) {
    var data = [
        {question: 'What is your favorite color?', answers: [
            {id: 1, value: "crimson"},
            {id: 2, value: "chartreuse"},
            {id: 3, value: "aquamarine"},
            {id: 4, value: "sienna"},
            {id: 5, value: "lavander blush"},
            {id: 6, value: "azure"},
            {id: 7, value: "light slate grey"},
            {id: 8, value: "peru"},
            {id: 9, value: "medium orchid"},
            {id: 10, value: "carnation pink"},
            ]},
        {question: 'where is one place you would most want to travel to right now?', answers: [
            {id: 1, value: "bora bora"},
            {id: 2, value: "london"},
            {id: 3, value: "barcelona"},
            {id: 4, value: "Paris"},
            {id: 5, value: "sydney"},
            {id: 6, value: "new york"},
            {id: 7, value: "maui"},
            {id: 8, value: "maldives"},
            {id: 9, value: "tokyo"},
            {id: 10, value: "budapest"},
            ]},
            
        {question: 'what movie do you think is the best?', answers: [
            {id: 1, value: "mortdecai"},
            {id: 2, value: "alice in wonder land"},
            {id: 3, value: "edward scissorahnds"},
            {id: 4, value: "pirates of the carabian"},
            {id: 5, value: "the lone ranger"},
            {id: 6, value: "transendence"},
            {id: 7, value: "dark shadows"},
            {id: 8, value: "black mass"},
            {id: 9, value: " charlie and the chocolate factory"},
            {id: 10, value: "sleepy hollow"},
            ]},
        {question: 'who do you want to win?', answers: [
            {id: 1, value: "cleveland cavaliers"},
            {id: 2, value: "golden state warriors"}
            ]},
        {question: 'do you enjoy nature?', answers: [
            {id: 1, value: "yes"},
            {id: 2, value: "no"},
            ]},
        
    ];
    response.send(data);
});

router.post('/api/v1/postData', function(request, response) {
    var color = request.body.color;
    if (color) {
        color = color.charAt(0).toUpperCase() + color.substring(1) + ' ';
    }
    var data = {
        message: color + 'Monday??'
    };
    response.send(data);
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    var addr = server.address();
    console.log("Server listening at", addr.address + ":" + addr.port);
});

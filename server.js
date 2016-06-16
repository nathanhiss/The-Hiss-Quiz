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
    var data = [{
            question: 'What is your favorite color?',
            answers: [{
                id: 1,
                value: "crimson",
            }, {
                id: 2,
                value: "chartreuse"
            }, {
                id: 3,
                value: "aquamarine"
            }, {
                id: 4,
                value: "sienna"
            }, {
                id: 5,
                value: "lavander blush"
            }, {
                id: 6,
                value: "azure"
            }, {
                id: 7,
                value: "light slate grey"
            }, {
                id: 8,
                value: "peru"
            }, {
                id: 9,
                value: "medium orchid"
            }, {
                id: 10,
                value: "carnation pink"
            }, ]
        }, {
            question: 'where is one place you would most want to travel to right now?',
            answers: [{
                id: 1,
                value: "bora bora"
            }, {
                id: 2,
                value: "london"
            }, {
                id: 3,
                value: "barcelona"
            }, {
                id: 4,
                value: "Cape Town"
            }, {
                id: 5,
                value: "sydney"
            }, {
                id: 6,
                value: "new york"
            }, {
                id: 7,
                value: "maui"
            }, {
                id: 8,
                value: "maldives"
            }, {
                id: 9,
                value: "tokyo"
            }, {
                id: 10,
                value: "budapest"
            }, ]
        },

        {
            question: 'what movie do you think is the best?',
            answers: [{
                id: 1,
                value: "mortdecai"
            }, {
                id: 2,
                value: "alice in wonder land"
            }, {
                id: 3,
                value: "edward scissorahnds"
            }, {
                id: 4,
                value: "pirates of the carabian"
            }, {
                id: 5,
                value: "the lone ranger"
            }, {
                id: 6,
                value: "transendence"
            }, {
                id: 7,
                value: "dark shadows"
            }, {
                id: 8,
                value: "black mass"
            }, {
                id: 9,
                value: " charlie and the chocolate factory"
            }, {
                id: 10,
                value: "sleepy hollow"
            }, ]
        }, {
            question: 'who do you want to win?',
            answers: [{
                id: 1,
                value: "cleveland cavaliers"
            }, {
                id: 2,
                value: "golden state warriors"
            }]
        }, {
            question: 'do you enjoy nature?',
            answers: [{
                id: 1,
                value: "yes"
            }, {
                id: 2,
                value: "no"
            }, ]
        },
    ];
    response.send(data);
});

router.post('/api/v1/postData', function(request, response) {
    var answers = request.body.answers;
    var messages = [{
            text: 'Your dream home is a beach house. You love the relaxed life and to wake up with the calming sounds of water. You enjoy tranquility and either have or wants to join a yoga class.',
            img: 'beach house'
        }, {
            text: 'You got Suburban House. You enjoy the suburban lifestyle. You are not too secluded but you also are not too close to the city. Mini vans and Whole Foods represents you. ',
            img: 'suburban house'
        }, {
            text: 'The city life is your life. Bustling through the streets is what you enjoy. All the high tech buildings, large malls, and interesting people give joy to your life. You have gotten so accustomed to public transport that you bring your own hand sanitizer and seat cover. A city home is your home',
            img: 'city'
        }, {
            text: 'Your future house will be in the desert. You enjoy peace sometimes and the arid climate. Your home is heavily air conditioned but a step outside brings you back to reality. you enjoy dipping into a pool in the hot weather because you have such a spunky personality. ',
            img: 'desert house'
        }, {
            text: 'You got penthouse. You have a chic personality and an avid yearning for organic food. You love exercise, social activities but recharge your batteries alone.',
            img: 'penthouse'
        }, {
            text: 'You fancy the log cabin home. Being in a forest roars your personality to life and all your friends can see how you really are. You would enjoy living in a home secluded in a forest. ',
            img: 'forest house'
        },

        {
            text: 'You are one who would enjoy living on the edge. UnderWater would suite your personality for your dream home. away from the noise of a conventional home you can be undisturbed under water. You can blast your music hold extravagant parties and live your life to the fullest underwater.',
            img: 'underwater house'
        }, {
            text: 'You enjoy the rich life. You are not a basic starbucks customer, you take golden coffee beans and cold brew them on your throne. You have hundreds of servants to appease you and have a plethora of cars to choose from to drive you to the local Gucci store. ',
            img: 'mansion'
        }, {
            text: 'You got HOMELESS, life is just not on your side. flip another coin to try again!',
            img: 'tent'
        }, {
            text: 'WILD CARD!!! You got Donald Trump. Redo the quiz before your hair turns floppy!',
            img: 'donald'
        },
    ];

    // Randomly assigned result
    //var result = Math.floor(Math.random() * messages.length);
    
    var result = answers[1] - 1;

    var data = {
        message: messages[result]
    };
    response.send(data);
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    var addr = server.address();
    console.log("Server listening at", addr.address + ":" + addr.port);
});

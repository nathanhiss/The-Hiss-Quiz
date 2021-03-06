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
                value: "Crimson",
                className: 'crimson'
            }, {
                id: 2,
                value: "Bangladesh Green",
                className: 'bangladeshgreen'
            }, {
                id: 3,
                value: "Aquamarine",
                className: 'aquamarine'
            }, {
                id: 4,
                value: "Sienna",
                className: 'sienna'
            }, {
                id: 5,
                value: "Lavender blush",
                className: 'lavenderblush'
            }, {
                id: 6,
                value: "Azure",
                className: 'azure'
            }, {
                id: 7,
                value: "Light Slate Grey",
                className: 'lightslategrey'
            }, {
                id: 8,
                value: "Peru",
                className: 'peru'
            }, {
                id: 9,
                value: "Medium Orchid",
                className: 'mediumorchid'
            }, {
                id: 10,
                value: "Carnation Pink",
                className: 'carnationpink'
            }, ]
        }, {
            question: 'Where is one place you would most want to travel to right now?',
            answers: [{
                id: 1,
                value: "Bora Bora",
                className: 'borabora'
            }, {
                id: 2,
                value: "London",
                className: 'london'
            }, {
                id: 3,
                value: "Barcelona",
                className: 'barcelona'
            }, {
                id: 4,
                value: "Cape Town",
                className: 'capetown'
            }, {
                id: 5,
                value: "Sydney",
                className: 'sydney'
            }, {
                id: 6,
                value: "New York",
                className: 'newyork'
            }, {
                id: 7,
                value: "Maui",
                className: 'maui'
            }, {
                id: 8,
                value: "Maldives",
                className:'maldives'
            }, {
                id: 9,
                value: "Tokyo",
                className: 'tokyo'
            }, {
                id: 10,
                value: "Budapest",
                className: 'budapest'
            }, ]
        },

        {
            question: 'What movie do you think is the best?',
            answers: [{
                id: 1,
                value: "Mortdecai",
                className: 'mortdecai'
            }, {
                id: 2,
                value: "Alice in Wonderland",
                className: 'alice'
            }, {
                id: 3,
                value: "Edward Scissorhands",
                className: 'ed'
            }, {
                id: 4,
                value: "Pirates of the Caribbean",
                className: 'pirate'
            }, {
                id: 5,
                value: "The Lone Ranger",
                className: 'lone'
            }, {
                id: 6,
                value: "Transcendence",
                className: 'tran'
            }, {
                id: 7,
                value: "Dark Shadows",
                className: 'dark'
            }, {
                id: 8,
                value: "Black Mass",
                className: 'mass'
            }, {
                id: 9,
                value: "Charlie and the Chocolate Factory",
                className: 'charlie'
            }, {
                id: 10,
                value: "Sleepy hollow",
                className: 'hollow'
            }, ]
        }, {
            question: 'Who do you want to win?',
            answers: [{
                id: 1,
                value: "Cleveland Cavaliers"
            }, {
                id: 2,
                value: "Golden State Warriors"
            }]
        }, {
            question: 'Do you enjoy nature?',
            answers: [{
                id: 1,
                value: "Yes"
            }, {
                id: 2,
                value: "No"
            }, ]
        },
    ];
    response.send(data);
});

router.post('/api/v1/postData', function(request, response) {
    var answers = request.body.answers;
    var messages = [{
            text: 'Your dream home is a Beach House. You love the relaxed life and to wake up with the calming sounds of water. You enjoy tranquility and either have or want to join a yoga class.',
            img: ['beach house.jpg']
        }, {
            text: 'You got Suburban House. You enjoy the suburban lifestyle. You are not too secluded but you also are not too close to the city. Mini vans and Whole Foods represents you. ',
            img: ['suburban house.jpg']
        }, {
            text: 'The city life is your life. Bustling through the streets is what you enjoy. All the high tech buildings, large malls, and interesting people give joy to your life. You have gotten so accustomed to public transport that you bring your own hand sanitizer and seat cover. A City Home is your home',
            img: ['city.jpg']
        }, {
            text: 'Your future house will be in the desert. You enjoy peace and the arid climate. Your home is heavily air conditioned but a step outside brings you back to reality. You enjoy dipping into a pool in the hot weather because you have such a spunky personality. ',
            img: ['desert house.jpg']
        }, {
            text: 'You got Penthouse. You have a chic personality and an avid yearning for organic food. You love exercise and social activities but recharge your batteries alone.',
            img: ['penthouse.jpg']
        }, {
            text: 'You fancy the Log Cabin Home. Being in a forest roars your personality to life and all your friends can see how you really are. You would enjoy living in a home secluded in a forest. ',
            img: ['forest house.jpg']
        },

        {
            text: 'You are one who would enjoy living on the edge. UnderWater would suite your personality for your dream home. Away from the noise of a conventional home you can be undisturbed under water. You can blast your music, hold extravagant parties and live your life to the fullest underwater.',
            img: ['underwater house.jpg']
        }, {
            text: 'You enjoy the rich life. You are not a basic Starbucks customer, you take golden coffee beans and cold brew them on your throne. You have hundreds of servants to appease you and have a plethora of cars to choose from to drive you to the local Gucci store. ',
            img: ['mansion.jpg']
        }, {
            text: 'You got HOMELESS, life is just not on your side. Flip another coin to try again!',
            img: ['tent.jpg']
        }, {
            text: 'WILD CARD!!! You got Donald Trump. Redo the quiz before your hair turns floppy!',
            img: ['donald.jpg', 'dt 2.jpg', 'dt 3.jpg', 'dt.jpg', 'dt1.gif'] 
        },
    ];

    // Randomly assigned result
    var result = Math.floor(Math.random() * messages.length);
    
 if (answers [3] == 2){
       result = 9;
     }
    
    var data = {
        message: messages[result]
    };
    response.send(data);
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    var addr = server.address();
    console.log("Server listening at", addr.address + ":" + addr.port);
});

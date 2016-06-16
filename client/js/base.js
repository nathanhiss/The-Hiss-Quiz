'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
        'ngRoute'
    ])

    .config(['$routeProvider', function($routeProvider) {
        console.log('test');

        $routeProvider.when('/game', {
            templateUrl: 'templates/game.html',
            controller: 'MyController'
        })
        .otherwise({redirectTo: '/game'})

    }])

    .controller('MyController', function($scope, $http) {

    $scope.questions = [];
    $scope.currentsquestion = {};
    $scope.message = '';
    $scope.done = false;
    var questionIndex = 0;
    var answers = [];

    $scope.postData = function() {
        $http.post('/api/v1/postData', {
            answers: answers
        }).then(function(response) {
            console.log(response.data.message);
            $scope.message = response.data.message.text;
            $scope.img = response.data.message.img;
        });
        $scope.answers = '';
    };

    $scope.getData = function() {
        $http.get('/api/v1/getData').then(function(response) {
            $scope.questions = response.data;
            $scope.done = false;
            questionIndex = 0;
            $scope.currentQuestion = $scope.questions[questionIndex];
            console.log($scope.currentQuestion);
        });
    };

    $scope.answerQuestion = function(answerValue) {
        console.log(answerValue);
        console.log(questionIndex);
        answers.push(answerValue);
        questionIndex = questionIndex + 1
        console.log('questionIndex: ' + questionIndex);
        console.log('currentQuestion: ' + JSON.stringify($scope.questions[questionIndex]));
        $scope.currentQuestion = $scope.questions[questionIndex]
            //checking if the quiz is over!
        if (questionIndex == $scope.questions.length) {
            $scope.done = true;
            console.log('Wait a Moment we are Building a Wall');
            $scope.postData();
        }

    };
});
//record their data and based on a certain amout of answers they give they will get an output too their answers which they gave.

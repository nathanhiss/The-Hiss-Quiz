function MyController($scope, $http) {
    
    $scope.questions = [];
    $scope.currentsquestion = {};
    $scope.color= '';
    $scope.message = '';
     $scope.done = false;
   var questionIndex = 0;
    var answers = [];
    
    $scope.postData = function() {
        $http.post('/api/v1/postData', {color: $scope.color}).then(function(response) {
            $scope.message = response.data.message;
        });
        $scope.color = '';
    };
    
    $scope.getData = function() {
        $http.get('/api/v1/getData').then(function(response) {
            $scope.questions = response.data;
  $scope.currentQuestion =  $scope.questions[questionIndex];
            console.log($scope.currentQuestion);
        });
    };
    
    $scope.answerQuestion = function(answerValue) {
        console.log(answerValue); console.log(questionIndex);
        answers.push(answerValue);
        questionIndex = questionIndex + 1
         console.log('questionIndex: ' + questionIndex);
       console.log('currentQuestion: ' + JSON.stringify($scope.questions[questionIndex]));
        $scope.currentQuestion = $scope.questions[questionIndex]
        if (questionIndex == $scope.questions.length ){
            $scope.done = true;
            questionIndex = 0;
            console.log( 'Wait a Moment we are Building a Wall');
        }
            
    };
}
//record their data and based on a certain amout of answers they give they will get an output too their answers which they gave. 
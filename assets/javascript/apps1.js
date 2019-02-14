$(document).ready(function() {

//Variables
//To hold questions
let myQuestions = [
    
    //Questions, Answer Choices, Correct Answer ======================================   
        {
            question: "What is a group flamingos called?",
            
            answers: {
                a: "Flock",
                b: "Pride",
                c: "Flamboyance", 
            },

            correct: "c",
        }, 
        {
            question: "Which is not a term for a group of vultures?",

            answers: {
                a: "Funeral",
                b: "Wake",
                c: "Venue",
            },

            correct: "a",
        },
        {
            question: "Penguins can stay underwater up to how many minutes?",

            answers: {
                a: "10 minutes",
                b: "20 minutes",
                c: "30 minutes",
            },

            correct: "b",
        },
        {
            question: "Owls have what type of vision?",

            answers: {
                a: "Binocular",
                b: "Myopic",
                c: "Persbyopic"
        },

        correct: "a",
        }
    ];
        console.log(myQuestions[0]);
        console.log(myQuestions[0].question);
        console.log(myQuestions[0].answers.a);
        console.log(myQuestions[0].answers.b);
        console.log(myQuestions[0].answers.c);
        console.log(myQuestions[0].correct);
        console.log(myQuestions[1]);
        console.log(myQuestions[1].question);
        console.log(myQuestions[1].question);
        console.log(myQuestions[1].answers.a);
        console.log(myQuestions[1].answers.b);
        console.log(myQuestions[1].answers.c);
        console.log(myQuestions[1].correct);
        console.log(myQuestions[1].correct);
        console.log(myQuestions[2]);
        console.log(myQuestions[2].question);
        console.log(myQuestions[2].answers.a);
        console.log(myQuestions[2].answers.b);
        console.log(myQuestions[2].answers.c);
        console.log(myQuestions[2].correct);
        console.log(myQuestions[3]);
        console.log(myQuestions[3].question);
        console.log(myQuestions[3].answers.a);
        console.log(myQuestions[3].answers.b);
        console.log(myQuestions[3].answers.c);
        console.log(myQuestions[3].correct);

//To hold score
let score = 0;
//To hold timer
let timer = 0;
//To hold answers
let userAnswers = [];
//To hold correctAnswers
let correctAnswers = [];
//To hold total correct answers
let totalCorrect = " ";
//To hold total wrong answers
let totalWrong = " ";

//Hide questions and time
// function hideGame() {
//     $(".quiz").hide()
// }
//Create a function that when onclick on start button - questions are displayed
$("#clickStart").on("click",function(){
    $(this).hide();
    $(".startImages").hide();
});



//Create function to set up screen and timer- append questions and choices to html
function gameStart() {
    for (i = 0; i < myQuestions.length; i++) {
    
    console.log(myQuestions);
    $(".quiz").append("<p>" + myQuestions[i].question + "</p>");
    }
}
gameStart();


//Create a function to store user answers and push to userAnswers array
//Create function to compare the results of userAnswers vs correctAnswers
    //if/else if
    //log the total correct answers / log total wrong
//Display total wrong and total right  
//Calling the functions
// hideGame();

});

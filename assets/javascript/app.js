$(document).ready(function () {

    //Variables
    //To hold questions
    let myQuestions = [

        //Questions, Answer Choices, Correct Answer ======================================   
        {
            question: "What is a group flamingos called?",

            answers: ["Flock", "Pride", "Flamboyance"],

            correct: "Flamboyance",
        },
        {
            question: "Which is not a term for a group of vultures?",

            answers: ["Funeral", "Wake", "Venue"],

            correct: "Funeral",
        },


    ];
    // console.log(myQuestions[0]);
    // console.log(myQuestions[0].question);
    // console.log(myQuestions[0].answers);
    // console.log(myQuestions[0].correct);
    // console.log(myQuestions[1]);
    // console.log(myQuestions[1].question);
    // console.log(myQuestions[1].answers);
    // console.log(myQuestions[1].correct);



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
    //To hold answer options
    let answers = [];


    // //Hide questions and time
    // function hideGame() {
    //     $(".quiz").hide()
    // }
    // hideGame();

    $(".quiz").append("<ol></ol>");



    // //Create a function that when onclick on start button - questions are displayed
    // $("#clickStart").on("click",function(){
    //     $(this).hide();
    //     $(".startImages").hide();
    //     $(".quiz").show()
    // });



    //Create function to set up screen and timer- append questions and choices to html
    function gameStart() {
        for (var i = 0; i < myQuestions.length; i++) {
          // console.log(myQuestions[i]);
        //    console.log(myQuestions[i].answers);

            $("ol").append("<li>" + myQuestions[i].question + "</li>");
            $("li").attr("class", "alignment");
           
            for (var j = 0; j < myQuestions[i].answers.length; j++) {
                console.log(myQuestions[i].answers[j]);
            }
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
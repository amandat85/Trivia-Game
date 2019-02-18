$(document).ready(function () {

    //VARIABLES ==========================================================================
    //To hold score
    let score = 0;
    //To hold timer
    let timer;
    //To hold answers
    let userAnswers = [];
    //To hold correctAnswers
    let correctAnswers = [];
    //To hold total correct answers
    let totalCorrect = " ";
    //To hold total wrong answers
    let totalWrong = " ";
    //To hold question position
    let indexQuestions = 0;
    //Define number for timer
    let number = 20;

    //Questions, Answer Choices, Correct Answer ======================================   
    let myQuestions = [
        {
            question: "What is a group of flamingos called?",
            answers: ["Flock", "Pride", "Flamboyance"],
            correct: "Flamboyance",
        },
        {
            question: "Which is not a term for a group of vultures?",
            answers: ["Funeral", "Wake", "Venue"],
            correct: "Funeral",
        },
    ];

    console.log(myQuestions[0].question);
    console.log(myQuestions[0].answers);

    //FUNCTIONS====================================================================
    // Hide questions and time
    function hideGame() {
        $(".quiz").hide();
        $("#timer").hide();
    }
    hideGame();

    //Create a function that when onclick on start button - questions are displayed
    $("#clickStart").on("click", function () {
        $(this).hide();
        $(".startImages").hide();
        $(".quiz").show();
        $("#timer").show();

    });
    //SET TIMER FUNCTION==========================================================
    function run() {
        clearInterval(timer);
        timer = setInterval(decrement, 1000);
    }

    function decrement() {
        number--;
        document.querySelector("#timer").innerHTML = "Time Remaining: " + number;
    }
    run();
    decrement();

    //FUNCTION - TIMER STOP=================================
    function intervalStop() {      
        clearInterval(timer);
    }
    //on click stoppage
    $("#options").on("click", function() {
        clearInterval(timer);
    });

    //number = 0 stoppage
    if (number < 0 ){
        intervalStop();
    }

    //Create function to set up questions and answer options
    function gameStart() {
        
        if (indexQuestions <= (myQuestions.length - 1)) {
            document.querySelector("#question").innerHTML = ([indexQuestions + 1] + "&rpar; " + myQuestions[indexQuestions].question);

        for (var i = 0; i < 3; i++) {
            console.log(myQuestions[indexQuestions].answers[i])
            document.querySelector("#options").innerHTML += ("<input type='button' name='opt" + i + "' value='" + myQuestions[indexQuestions].answers[i] + " '>" + "</input>");
            $("input").attr("class", "buttonStyle");
            $("input").attr("id", "buttonStop");
        }
        correctAnswers = myQuestions[indexQuestions].correct;
        console.log(correctAnswers);
        }
        else {
            //Game Over
        }
    }
    gameStart(); 


  
    

    //Create function to compare the results of userAnswers vs correctAnswers
    //if/else if
    //log the total correct answers / log total wrong
    //Display total wrong and total right  
    //Calling the functions
    // hideGame();
    indexQuestions++;


});
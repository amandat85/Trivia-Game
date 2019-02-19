$(document).ready(function () {

    //VARIABLES ==========================================================================
    //To hold score
    let score = 0;
    //To hold timer
    let timer;
    //To hold answers
    let userAnswers = [];
    //To hold correctAnswers
    let correctAnswers = " ";
    //To hold total correct answers
    let totalCorrect = " ";
    //To hold total wrong answers
    let totalWrong = " ";
    //To hold question position
    let indexQuestions = 0;
    //Define number for timer
    let number = 20;
    //Hold value from clicked button
    let clickedButton;

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

    //HIDE AND SHOW FUNCTIONS==============================================================
    //Hide questions and time on start page
    function hideGame() {
        $(".quiz").hide();
        $("#timer").hide();
    }
    hideGame();

    //When start is click show questions and time
    $("#clickStart").on("click", function () {
        $(this).hide();
        $(".startImages").hide();
        $(".quiz").show();
        $("#timer").show();

    });
    //SET TIMER FUNCTION==========================================================
    function run() {
        //clearInterval(timer);
        timer = setInterval(decrement, 1000);
    }

    function decrement() {
        number--;
        document.querySelector("#timer").innerHTML = "Time Remaining: " + number;
        //Why does this need to be declared in the decrement function? Is it a scope issue?
        if (number === 0) {
            intervalStop();
        }
    }
    run();
    decrement();
    
    //FUNCTION TIMER STOP=======================================================
    function intervalStop() {
        clearInterval(timer);
    }
    //on click stoppage
    $("#options").on("click", function () {
        intervalStop();
    });
 
    //GAME START FUNCTION=========================================================================================
    //Create function to set up questions and answer options
    function gameStart() {
        if (indexQuestions <= (myQuestions.length - 1)) {
            document.querySelector("#question").innerHTML = ([indexQuestions + 1] + "&rpar; " + myQuestions[indexQuestions].question);

            for (var i = 0; i < 3; i++) {
                console.log(myQuestions[indexQuestions].answers[i])
                document.querySelector("#options").innerHTML += ("<input type='button' name='opt" + i + "' value='" + myQuestions[indexQuestions].answers[i] + " '>" + "</input>");
                $("input").attr("class", "buttonClicked");
                $("input").attr("id", "buttonStop");
            }
            correctAnswers = myQuestions[indexQuestions].correct;
            return correctAnswers;
        }
        else {
            //Game Over alert on page
            //Show results function
        }
    }
    gameStart();
    console.log(correctAnswers);

    //ANSWER CHOICE AND CORRECT ANSWERS===================================================================
    //Assign a button class to pick up the value of the button clicked 

    $(".buttonClicked").on("click", function () {
        clickedButton = $(this).val();
        // console.log(clickedButton);

    });
    function checkResults() {
        if (clickedButton === correctAnswers) {
            console.log(clickedButton);
        }
    }
    checkResults();

    //if clicked button value = myQuestions[indexQuestions].correct
    //then alert user on page that they are correct
    //push correct answer to total correct 
    //Next question
    //else if click button value !== myQuestions[indexQuestions].correct
    //then alert the user that they are incorrect and show right answer
    //push to incorrect
    //Next question

    //RESULTS FUNCTION======================================================================================
    //Display total correct
    //Display total wrong
    //Display total unanswered

    //RESET FUNCTION========================================================================================

    //increment questions
    indexQuestions++;


});
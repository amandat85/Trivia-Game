$(document).ready(function () {
    //VARIALBES====================================
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;
    var number = 15;
    var questionIndex = 0;

    //Question, Answer, and Answer Choices===================
    var myQuestions = [
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
    console.log(myQuestions);

    //HIDE START SCREEN================================
    $("#clickStart").on("click", function () {
        $(this).hide();
        $(".startImages").hide();
        $("#timer").show();
        loadQuestions();
    });

    //SET TIMER FUNCTION=====================================
    function run() {
        clearInterval(timer);
        timer = setInterval(decrement, 1000);
    }
    function decrement() {
        number--;
        document.querySelector("#timer").innerHTML = "Time Remaining: " + number;
        // Why does this need to be declared in the decrement function? Is it a scope issue?
        if (number === 0) {
            clearInterval(timer);
            document.querySelector("#question").innerHTML = "The correct answer is " + myQuestions[questionIndex].correct;
            $("#options").html("");
            setTimeout(loadQuestions, 4000);
            questionIndex++;
        }
    }

    //LOAD QUESTIONS=================================
    function loadQuestions() {
        if (questionIndex < myQuestions.length) {
            document.querySelector("#timer").innerHTML = "Time Remaining: " + timer;
            document.querySelector("#question").innerHTML = (myQuestions[questionIndex].question);
            number = 15;
            run();
            decrement();
            for (var i = 0; i < 3; i++) {
                //need to empty div 
                console.log(myQuestions[questionIndex].answers[i])
                document.querySelector("#options").innerHTML += ("<input type='submit' name='opt" + i + "' value='" + myQuestions[questionIndex].answers[i] + " '>" + "</input>");
                $("input").attr("class", "buttonClicked");  
            }
        }
        else {
            $(".quiz").hide();
            results();
        }
    }

    //DISABLE BUTTONS===================================    
    $("#options").on("click", function () {
        clearInterval(timer);
        $(".buttonClicked").prop("disabled", true);
        setTimeout(function () {
            $(".buttonClicked").prop("disabled", false);
        }, 5000);
    });

    //CORRECT ANSWERS====================================

    //RESULTS=============================================
    function results() {
        $(".quiz").hide();
        document.querySelector("#results").innerHTML = ("<p> You guessed " + correctAnswers + " correct.<p> You guessed " + wrongAnswers + " incorrect.</p>");
    }


});
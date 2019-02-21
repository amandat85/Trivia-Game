$(document).ready(function () {
    //VARIALBES============================================================================================
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;
    var number = 15;
    var questionIndex = 0;
    //Question, Answer, and Answer Choices================================================================
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
        {
            question: "Penguins can stay underwater up to how many minutes?",
            answers: ["10 minutes", "20 minutes", "30 minutes"],
            correct: "20 minutes",
        },
        {
            question: "Owls have what type of vision?",
            answers: ["Binocular", "Myopic", "Persbyopic"],
            correct: "Binocular",
        },
        {
            question: "What is the average lifespan of a wild turkey?",
            answers: ["10-15 years", "2-4 years", "3-5 years"],
            correct: "3-5 years",
        },
        {
            question: "Which is not a blue jay colour?",
            answers: ["Purple", "Brown", "White"],
            correct: "Brown",
        },
        {
            question: "What is a baby puffin called?",
            answers: ["Puffling", "Duckling", "Kindle"],
            correct: "Puffling",
        },
    ];
    //ON LOAD===================================================================================================
    $("#timer").hide();
    //HIDE START SCREEN=========================================================================================
    $("#clickStart").on("click", function (e) {
        $(this).hide();
        $(".startImages").hide();
        $("#answers").hide()
        $("#timer").show();
        loadQuestions();
    });
    //SET TIMER FUNCTION=======================================================================================
    function run() {
        clearInterval(timer);
        timer = setInterval(decrement, 1000);
    }
    function decrement() {
        number--;
        document.querySelector("#timer").innerHTML = ("Time Remaining: " + number);
        if (number === 0) {
            clearInterval(timer);
            document.querySelector("#question").innerHTML = ("The correct answer is <br><button>" + myQuestions[questionIndex].correct + "</button>");
            $("#answers").html("");
            setTimeout(loadQuestions, 4000);
            unanswered++;
            questionIndex++;
        }
    }
    //LOAD QUESTIONS==========================================================================================
    function loadQuestions() {
        if (questionIndex < myQuestions.length) {
            document.querySelector("#timer").innerHTML = "Time Remaining: " + timer;
            document.querySelector("#question").innerHTML = (myQuestions[questionIndex].question);
            number = 15;
            run();
            decrement();
            answerOptions();
        }
        else {
            $(".quiz").hide();
            results();
        }
    }
    //ANSWER OPTIONS==========================================================================================
    function answerOptions() {
        for (var i = 0; i < 3; i++) {
            $("#answers").show();
            document.querySelector("#answers").innerHTML += ("<button id='opt" + i + "' data-answer='" + myQuestions[questionIndex].answers[i] + "'>" + myQuestions[questionIndex].answers[i] + "</button>");
            $("button").addClass("buttonClicked");
            console.log(myQuestions[questionIndex].correct);
        }
    }
    //CHECK ANSWERS==========================================================================================
    $("#answers").on("click", function (event) {
        if ($(event.target).attr("data-answer") === myQuestions[questionIndex].correct) {
            clearInterval(timer);
            document.querySelector("#question").innerHTML = ("Correct");
            $("#answers").html("");
            setTimeout(loadQuestions, 4000);
            correctAnswers++;
            questionIndex++;
        }
        else {
            clearInterval(timer);
            document.querySelector("#question").innerHTML = ("The correct answer is <br><button>" + myQuestions[questionIndex].correct + "</button>");
            $("#answers").html("");
            setTimeout(loadQuestions, 4000);
            wrongAnswers++;
            questionIndex++;
            console.log("wrong");
        }
    });
    //RESULTS================================================================================================
    function results() {
        $("#results").show();
        document.querySelector("#results").innerHTML = ("<p> You guessed " + correctAnswers + " correct.<p> You guessed " + wrongAnswers + " incorrect.</p><p> You left " + unanswered + " unanswered</p>");
        var target = document.getElementById("results");
        var newBtn = document.createElement("button");
        newBtn.innerHTML = "Play Again";
        target.appendChild(newBtn);
        newBtn.setAttribute("id", "playAgain");
    }
    //RESET===================================================================================================
    function reset() {
        $("#results").on("click", function (e) {
            clearInterval(timer);
            correctAnswers = 0;
            wrongAnswers = 0;
            unanswered = 0;
            number = 15;
            questionIndex = 0;
            $("#question").html("");
            $("#results").html("");
            $("#results").hide();
            $(".startImages").show();
            $("#clickStart").show();
            $(".quiz").show();
            $("#timer").hide();
        });
    }
    reset();
});
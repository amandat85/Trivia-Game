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
            funFact: "The backward bending 'knee' of a flamingo's leg is actually the bird's ankle. The actual knee is very close to the body and is not visible through the bird's plumage.",
        },
        {
            question: "Which is not a term for a group of vultures?",
            answers: ["Funeral", "Wake", "Venue"],
            correct: "Funeral",
            funFact: "Vultures pee on their legs to cool off in hot weather.",
        },
        {
            question: "Penguins can stay underwater up to how many minutes?",
            answers: ["10 minutes", "20 minutes", "30 minutes"],
            correct: "20 minutes",
            funFact: "Emperor penguin males incubate their eggs for two months in the winter without eating while the females are at sea.",
        },
        {
            question: "Owls have what type of vision?",
            answers: ["Binocular", "Myopic", "Persbyopic"],
            correct: "Binocular",
            funFact: "An owl has three eyelids: one for blinking, one for sleeping, and one for keeping the eye clean and healthy.",
        },
        {
            question: "What is the average lifespan of a wild turkey?",
            answers: ["10-15 years", "2-4 years", "3-5 years"],
            correct: "3-5 years",
            funFact: "A wild turkey’s gobble can be heard up to one mile away and is a primary means for a tom to communicate with his harem.",
        },
        {
            question: "Which is not a blue jay colour?",
            answers: ["Purple", "Brown", "White"],
            correct: "Brown",
            funFact: "Blue jays communicate via loud screams and high-pitched calls. They are able to imitate sound of hawks, cats and humans.",
        },
        {
            question: "What is a baby puffin called?",
            answers: ["Puffling", "Duckling", "Kindle"],
            correct: "Puffling",
            funFact: "A puffin’s beak (or bill) changes colour during the year. In winter, the beak has a dull grey colour, but in spring it blooms with an outrageous orange!",
        },
    ];
    //ON LOAD===================================================================================================
    $("#timer").hide();
    //HIDE START SCREEN=========================================================================================
    $("#clickStart").on("click", function (e) {
        $(this).hide();
        $(".startImages").hide();
        $("#answers").hide();
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
            $("#timer").hide();
            $("#question").hide();
            $("#answerAlert").show();
            document.querySelector("#answerAlert").innerHTML = ("<p class='answersArea'>Time's Up! The correct answer is: <br><button>" + myQuestions[questionIndex].correct + "</button><br><br>Did you know?<br><br>" + myQuestions[questionIndex].funFact + "</p>");
            $("#answers").html("");
            setTimeout(loadQuestions, 000);
            unanswered++;
            questionIndex++;
        }
    }
    //LOAD QUESTIONS==========================================================================================
    function loadQuestions() {
        if (questionIndex < myQuestions.length) {
            $("#answerAlert").hide();
            $("#timer").show();
            $("#question").show();
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
            $("#timer").hide();
            $("#question").hide();
            $("#answerAlert").show();
            document.querySelector("#answerAlert").innerHTML = ("<p class='answersArea'>Excellent! <button>" + myQuestions[questionIndex].correct + "</button>is correct!<br><br>Did you know?<br><br>" + myQuestions[questionIndex].funFact + "</p>");
            $("#answers").html("");
            setTimeout(loadQuestions, 5000);
            correctAnswers++;
            questionIndex++;
        }
        else {
            clearInterval(timer);
            $("#timer").hide();
            $("#question").hide();
            $("#answerAlert").show();
            document.querySelector("#answerAlert").innerHTML = ("<p class='answersArea'>Sorry! The correct answer is: <br><button>" + myQuestions[questionIndex].correct + "</button><br><br>Did you know?<br><br>" + myQuestions[questionIndex].funFact + "</p>");
            $("#answers").html("");
            setTimeout(loadQuestions, 5000);
            wrongAnswers++;
            questionIndex++;
            console.log("wrong");
        }
    });
    //RESULTS================================================================================================
    function results() {
        $("#results").show();
        $("#answerAlert").hide();
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
            $("#results").hide();
            $(".startImages").show();
            $("#clickStart").show();
            $(".quiz").show();
            $("#timer").hide();
        });
    }
    reset();
});
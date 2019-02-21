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

    //ON LOAD==========================================
    $("#timer").hide();

    //HIDE START SCREEN================================
    $("#clickStart").on("click", function () {
        $(this).hide();
        $(".startImages").hide();
        $("#timer").show();
        loadQuestions();
    });

    //SET TIMER FUNCTION================================
    function run() {
        clearInterval(timer);
        timer = setInterval(decrement, 1000);
    }
    function decrement() {
        number--;
        document.querySelector("#timer").innerHTML = ("Time Remaining: " + number);
        // Why does this need to be declared in the decrement function? Is it a scope issue?
        if (number === 0) {
            clearInterval(timer);
            document.querySelector("#question").innerHTML = ("The correct answer is <br><button>" + myQuestions[questionIndex].correct + "</button>");
            $("#answers").html("");
            setTimeout(loadQuestions, 4000);
            questionIndex++;
        }
    }

    //LOAD QUESTIONS===================================
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

    //ANSWER OPTIONS===============================================
    function answerOptions() {
        for (var i = 0; i < 3; i++) {
            var answerBtn = $("<button>");
            answerBtn.addClass("buttonClicked");
            answerBtn.attr("data-answer", myQuestions[questionIndex].answers[i]);
            answerBtn.text(myQuestions[questionIndex].answers[i]);
            $("#answers").append(answerBtn);
            $(".buttonClicked").on("click", function(){
                answerBtn.text($(this).attr("data-answer"));
            })
        }
    }

    console.log(myQuestions[questionIndex].correct);

    // document.querySelector("#answers").innerHTML += ("<button name='opt" + i + "' data-answer='" + myQuestions[questionIndex].answers[i] + "'>" + myQuestions[questionIndex].answers[i] + "</button>");
    // $("button").addClass("buttonClicked");
    //console.log(myQuestions[questionIndex].answers[i])
    // document.querySelector("#answers").innerHTML += ("<input type='button' name='opt" + i + "' value='" + myQuestions[questionIndex].answers[i] + "'>" + "</input>");


    //DISABLE BUTTONS===================================  
    $("#answers").on("click", function () {
        clearInterval(timer);
        $(".buttonClicked").prop("disabled", true);
        setTimeout(function () {
            $(".buttonClicked").prop("disabled", false);
        }, 4000);
    });

    //CHECK ANSWERS====================================
    //Not working
    function checkAnswers() {
        $(".buttonClicked").on("click", function () {
            if (answerBtn.text($(this).attr("data-answer")) === myQuestions[questionIndex].correct) {
                alert("hello");
                // clearInterval(timer);
                // document.querySelector("#question").innerHTML = ("Excellent. You are correct!");
                // $("#answers").html("");
                // setTimeout(loadQuestions, 4000);
                // correctAnswers++;
                // questionIndex++;
            }
            // else {
            //     clearInterval(timer);
            //     document.querySelector("#question").innerHTML = ("Sorry. The correct answer is <br><button>" + myQuestions[questionIndex].correct + "</button>");
            //     $("#answers").html("");
            //     setTimeout(loadQuestions, 4000);
            //     wrongAnswers++;
            //     questionIndex++;
            // }

        });
    }
    checkAnswers();
    //To pass data attribute - If button has data-answer === myQuestions[questionIndex].correct then do this

    //RESULTS=============================================
    function results() {
        $(".quiz").hide();
        document.querySelector("#results").innerHTML = ("<p> You guessed " + correctAnswers + " correct.<p> You guessed " + wrongAnswers + " incorrect.</p>");
    }

    //RESET===============================================
});
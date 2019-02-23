$(document).ready(function () {
    //VARIALBES============================================================================================
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;
    var number = 15;
    var questionIndex = 0;
    var timer =0;
    //Question, Answer, and Answer Choices================================================================
    var myQuestions = [
        {
            question: "What is a group of flamingos called?",
            answers: ["Flock", "Pride", "Flamboyance"],
            correct: "Flamboyance",
            funFact: "The backward bending 'knee' of a flamingo's leg is actually the bird's ankle. The actual knee is very close to the body and is not visible through the bird's plumage.",
            audio: "assets/audio/flamingo.wav",
        },
        // {
        //     question: "Which is not a term for a group of vultures?",
        //     answers: ["Funeral", "Wake", "Venue"],
        //     correct: "Funeral",
        //     funFact: "Vultures pee on their legs to cool off in hot weather.",
        //     audio: "assets/audio/vulture..wav",
        // },
        // {
        //     question: "Penguins can stay underwater up to how many minutes?",
        //     answers: ["10 minutes", "20 minutes", "30 minutes"],
        //     correct: "20 minutes",
        //     funFact: "Emperor penguin males incubate their eggs for two months in the winter without eating while the females are at sea.",
        //     audio: "assets/audio/penguin.mp3",
        // },
        // {
        //     question: "Owls have what type of vision?",
        //     answers: ["Binocular", "Myopic", "Persbyopic"],
        //     correct: "Binocular",
        //     funFact: "An owl has three eyelids: one for blinking, one for sleeping, and one for keeping the eye clean and healthy.",
        //     audio: "assets/audio/owl.mp3",
        // },
        // {
        //     question: "What is the average lifespan of a wild turkey?",
        //     answers: ["10-15 years", "2-4 years", "3-5 years"],
        //     correct: "3-5 years",
        //     funFact: "A wild turkey’s gobble can be heard up to one mile away and is a primary means for a tom to communicate with his harem.",
        //     audio: "assets/audio/Turkey.mp3",
        // },
        // {
        //     question: "Which is not a blue jay colour?",
        //     answers: ["Purple", "Brown", "White"],
        //     correct: "Brown",
        //     funFact: "Blue jays communicate via loud screams and high-pitched calls. They are able to imitate sound of hawks, cats and humans.",audio: "assets/audio/bluejay.wav"
        // },
        // {
        //     question: "What is a baby puffin called?",
        //     answers: ["Puffling", "Duckling", "Kindle"],
        //     correct: "Puffling",
        //     funFact: "A puffin’s beak (or bill) changes colour during the year. In winter, the beak has a dull grey colour, but in spring it blooms with an outrageous orange!",
        //     audio: "assets/audio/Puffin.wav",
        // },
        // {   question: "How many stomachs do ostriches have?",
        //     answers: ["One", "Two", "Three"],
        //     correct: "Three",
        //     funFact: "The ostrich has the largest eye of any land animal, measuring almost 5 cm across, allowing predators such as lions to be seen at long distances.",
        //     audio: "assets/audio/ostrich.wav",
        // },
        // {
        //     question: "A woodpeckers tongue is how many times the length of its bill?",
        //     answers: ["3 times", "5 times", "2 times"],
        //     correct: "3 times",
        //     funFact: "Woodpeckers peck wood at a speed of 20 times per second.",
        //     audio: "assets/audio/woodpecker.mp3",
        // },
        // {   question: "What is a hummingbird's average heartbeat?",
        //     answers: ["1000 beats per minute", "1200 beats per minute", "1500 beats per minute"],
        //     correct: "1200 beats per minute",
        //     funFact: "A hummingbird’s wings beat between 50 and 200 flaps per second depending on the direction of flight, the purpose of their flight and the surrounding air conditions.",
        //     audio: "assets/audio/hummingbird.mp3",
        // }
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
            playSound();
            $("#answers").html("");
            setTimeout(loadQuestions, 5000);
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
            playSound();
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
            playSound();
            $("#answers").html("");
            setTimeout(loadQuestions, 5000);
            wrongAnswers++;
            questionIndex++;
        }
    });
    //PLAY AUDIO=============================================================================================
    function playSound(){
        var audio = document.createElement('audio');
        audio.style.display = "none";
        audio.src = myQuestions[questionIndex].audio;
        audio.autoplay = true;
        audio.onended = function(){
          audio.remove();
        };
        document.body.appendChild(audio);
      }
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
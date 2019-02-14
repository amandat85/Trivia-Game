//Start screen - action on "start button"

//Variables
//To hold questions
const Myquestions = [

//Questions ======================================   
     {question1: "What is a group flamingos called?",
    } 
    

    ];
    console.log(Myquestions);
//Answers =====================================
//Correct Answers =============================
//User Answers ================================

//What is a group of flamingos called
    //a: Flock
    //b: Pride
    //c: Flamboyance
    //Correct: c

//Which is not a term for a group of vultures?
    //a: Funeral
    //b: Wake
    //c: Venue
    //Correct: a


//Penguins can stay underwater up to how many minutes?
    //a: 10 minutes
    //b: 20 minutes
    //c: 30 minutes
    //Correct: b

//Owls have what type of vision?
    //a: Binocular
    //b: Myopic
    //c: Persbyopic
    //Correct: a 


//To hold score
let score = 0;
//To hold timer
let timer = 0;

//Create array to hold questions and answer options and correct answer * 4 (nested arrays?)
//Create a function to [loop [for each loop?]] through the questions that will
    //Set timer [interval]
    //Display each question in HTML [jQuery $().html]
    //Get answer (button input)
    //User answers and submits (submit button)
    //Compare user answer submitted to correct answer [if/else]//Notify the user if correct or the correct answer if wrong
    //Increase score
    //If time runs out prompt the user of correct answer and that time has run out
    //Move onto the next

//Display total wrong and total right    



   //Start screen - action on "start button"

    //Variables
    //To hold questions
    const myQuestions = [
    
        //Questions, Answers, Correct Answer ======================================   
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
    
                anwsers: {
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
    
            console.log(myQuestions);
           
       
        //User Answers ================================
        let userAnswer = [];
    
        //To hold score
        let score = 0;
    
        //Hold Index of current question
        let questionIndex = 0;
        
        
        //Create a function to [loop [for loop?]] through the questions that will
        function renderQuestions () {
            if (questionIndex <= (myQuestions.length-1)) {
                $("#question").html = myQuestions[questionIndex].question;
                ;
            }
        };
    
        renderQuestions();
        
        
        //Set timer [interval]
            //Display each question in HTML [jQuery $().html]
            //Get answer (button input)
            //User answers and submits (submit button)
            //Compare user answer submitted to correct answer [if/else]//Notify the user if correct or the correct answer if wrong
            //Timer function
            //Increase score
            //If time runs out prompt the user of correct answer and that time has run out
            //Move onto the next
        
        //Display total wrong and total right    
        
var quizContainer = document.getElementById("")

 // My Questions
var questionIdx = 0;
var currentQuestion;
var allQuestions = [
    {
    questionText: "On a vertical traffic light, where is the green light?" ,
    choices: ["Top", "Middle", "Bottom", "Right"] ,
    answer: "Bottom"
    },
    {
    questionText: "What is the square root of 25?" ,
    choices: ["5", "625", "25", "2"] ,
    answer: "5"
    },
    {
    questionText: "What letter is not used in the naming of any of the 50 US states?" ,
    choices: ["Z", "Q", "X", "P"] ,
    answer: "Q"
    },
    {
    questionText: "What country has the highest population density?" ,
    choices: ["China", "India", "Singapore", "Monaco"] ,
    answer: "Monaco"
    },
    {
    questionText: "What is the fastest animal on the planet?" ,
    choices: ["Cheetah", "Marlin", "Peregrine Falcon", "Pronghorn Antelope"] ,
    answer: "Peregrine Falcon"
    },
];

var currentQuestionsIndex = 0;
var initialRemainingSeconds = 60;
var remainingSeconds = initialRemainingSeconds;
var timerCount = document.getElementById("showtimer");
var timerClick = document.querySelector("#start-button");

//variables
var a1 = document.createElement("button");
var a2 = document.createElement("button");
var a3 = document.createElement("button");
var a4 = document.createElement("button");
var a5 = document.createElement("button");
a1.id = "button-choice-0";
a2.id = "button-choice-1";
a3.id = "button-choice-2";
a4.id = "button-choice-3";


function displayQuestion

var clickBtn = document.getElementById("click-me");

clickBtn.addEventListener("click", function(event){
    console.log(event);
    var newHEadline = document.createElement("hi");
    newHEadline.textContent = "Hello";
    document.body.appendChild(newHEadline);
})


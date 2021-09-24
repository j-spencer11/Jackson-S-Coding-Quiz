var clickBtn = document.getElementById("click-me");

clickBtn.addEventListener("click", function(event){
    console.log(event);
    var newHEadline = document.createElement("hi");
    newHEadline.textContent = "Hello";
    document.body.appendChild(newHEadline);
})
 // My Questions
var question = [
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

var currentQuestionIndex = -1;
var initialRemainingSeconds = 60;
var remainingSeconds = initialRemainingSeconds;
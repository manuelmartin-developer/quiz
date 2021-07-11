/******************* QUESTIONS OBJECT *****************/
const questions = [
    {
        id: 1,
        question: "Como se llama el caballo blanco de Santiago?",
        correctAnswer: ["Ni idea"],
        incorrectAnswers: ["Blanco", "Chispita", "Pequeño tio"]
    },
    {
        id: 2,
        question: "Cual es la fecha de mi cumpleanos?",
        correctAnswer: ["El dia que naciste"],
        incorrectAnswers: ["1 Enero 2020", "25 Diciembre 0", "9 Julio 2021"]
    },
    {
        id: 3,
        question: "Fue antes el huevo, la gallina, el color naranja o la fruta? ",
        correctAnswer: ["No se te ocurrian mas preguntas"],
        incorrectAnswers: ["Huevo", "Naranja (fruta)", "Gallina"]
    },
    {
        id: 4,
        question: "Cuanto tiempo me ha costado hace esto?",
        correctAnswer: ["Tienes ojeras. No has dormido"],
        incorrectAnswers: ["Un rato", "Lo tenias hecho", "Lo has copiado"]
    },
    {
        id: 5,
        question: "Otra pregunta",
        correctAnswer: ["Tienes ojeras. No has dormido"],
        incorrectAnswers: ["Un rato", "Lo tenias hecho", "Lo has copiado"]
    }

];

/*******************  INDEX PAGE *******************/
const categories = document.querySelectorAll(".category");
let currentCategory = "";

for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener("click", function () {
        currentCategory = categories[i].value;
        setCategory();
    });
}


function setCategory() {

    if (typeof (Storage) !== undefined) {
        sessionStorage.setItem("category", currentCategory);
    } else {
        console.log("Tu browser no acepta webStorage :(");
    }
};
/******************* COUNTER *****************/

let counter = document.querySelector("#counter");
if (document.title == "Quiz") {

    counter.innerHTML = "Time: 30"
};
let seconds = 30;
// Basic counter that reload every second
const run = () => {
    if (seconds != 0) {
        seconds--;
    } else if (seconds === 0) {
        location.reload()
    }
    if (document.title == "Quiz") {

        counter.innerHTML = `Time: ${seconds}`;
    };
};

setInterval(run, 1000);

/******************* SCORE *****************/
let score = document.querySelector("#score");
if (document.title == "Quiz") {

    score.innerHTML = "Score: 0"
};
let currentScore = 0;
// Score is storage in sessionStorage
const scoreSessionStorage = sessionStorage.getItem("score");
if (scoreSessionStorage !== null) {

    score.innerHTML = `Score: ${sessionStorage.getItem("score")}`;
};


function setScore() {

    if (typeof (Storage) !== undefined) {
        currentScore = sessionStorage.getItem("score");
        currentScore++;
        sessionStorage.setItem("score", currentScore);
    } else {
        score.innerHTML = "Tu browser no acepta webStorage :(";
    }
};

// Selecting DOM Objects
const question = document.querySelector("#question");
const answers = document.querySelectorAll(".answer")
const buttons = document.querySelectorAll(".button");

// Random Question
const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
const currentQuestion = randomQuestion.question;
const currentAnswers = randomQuestion.incorrectAnswers;
const correctAnswer = randomQuestion.correctAnswer;

// Shuffle the correct answer
let allAnswers = currentAnswers.concat(correctAnswer);
allAnswers = allAnswers.sort(() => Math.random() - 0.5);

// Painting Question in HTML
if (document.title == "Quiz") {

    question.innerHTML = currentQuestion;
};

// Painting Answers in HTML
for (let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = allAnswers[i];
    let currentButton = buttons[i];
    currentButton.addEventListener("click", function () {

        if (currentButton.textContent === correctAnswer[0]) {
            currentButton.style.backgroundColor = "green";
            counter.style.color = "green";
            setScore();
            score.innerHTML = `Score: ${currentScore}`;

            disableButtons();
            hightlightCorrect()
            seconds = 3;

        } else {
            currentButton.style.backgroundColor = "red";
            counter.style.color = "red";
            disableButtons();
            hightlightCorrect();
            seconds = 3;
        }
    });
};

// Disable buttons

function disableButtons() {

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].style.webkitFilter = "blur(4px)"
        buttons[i].style.boxShadow = "none";
    }
};

// Highlight correct answer

function hightlightCorrect() {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].textContent === correctAnswer[0]) {
            buttons[i].style.webkitFilter = "blur(0px)";
            buttons[i].style.color = "#000000";
        };
    }
};
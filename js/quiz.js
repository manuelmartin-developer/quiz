/******************* COUNTER *****************/

const counter = document.querySelector("#counter");
let seconds = 1000;

const run = () => {
    if (seconds != 0) {
        seconds--;
    } else if (seconds === 0) {
        location.reload()
    }
    counter.innerHTML = seconds;
};
setInterval(run, 1000);

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
question.innerHTML = currentQuestion;

// Painting Answers in HTML
for (let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = allAnswers[i];

    buttons[i].addEventListener("click", function () {

        if (buttons[i].textContent === correctAnswer[0]) {
            buttons[i].style.backgroundColor = "green";
            counter.style.color = "green";
            
            disableButtons();
            seconds = 5
            
        } else {
            buttons[i].style.backgroundColor = "red";
            counter.style.color = "red";
            disableButtons();
            seconds = 5
            
        }
    });
};

// Disable buttons

function disableButtons(){

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        
    }
};
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
let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
let currentQuestion = randomQuestion.question;
let currentAnswers = randomQuestion.incorrectAnswers;
let correctAnswer = randomQuestion.correctAnswer;
//! Cambiar la logica para que inserte la respuesta correcta en diferentes sitios
let allAnswers = currentAnswers.unshift(correctAnswer);

// Painting Question in HTML
question.innerHTML = currentQuestion;

// Painting Answers in HTML
for (let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = currentAnswers[i];

    buttons[i].addEventListener("click", function () {
        buttons[i].get
        if (buttons[i].textContent === correctAnswer[0]) {
            buttons[i].style.backgroundColor = "green";
            counter.style.color = "red";
            seconds = 5
            location.reload();
        } else {
            buttons[i].style.backgroundColor = "red";
        }
    });
};


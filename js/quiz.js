/******************* CUESTIONS  **********************/
let questions;

const fetchQuestions = async () => {

    await fetch('https://opentdb.com/api.php?amount=50&type=multiple')
        .then(response => response.json())
        .then(data => questions = data.results)
        .then(questions => {

            /*******************  INDEX PAGE *******************/
            const categories = document.querySelectorAll(".category");
            let currentCategory = "";

            // Adding category at localStorage

            categories.forEach(category => {
                category.addEventListener("click", () => {
                    currentCategory = category.title;
                    setCategory();
                });
            });

            function setCategory() {
                const ssPermitted = localStorage.setItem("category", currentCategory);
                const ssForbidden = console.log("Tu browser no acepta webStorage :(");
                typeof (Storage) !== undefined ? ssPermitted : ssForbidden;

            };

            /******************* COUNTER *****************/

            let counter = document.querySelector("#counter");
            //Checking that page is quiz page.
            if (document.title == "Quiz") {
                counter.innerHTML = "Time: 30"
            };
            // Initial time
            let seconds = 30;
            // Basic counter that reload every second. When time= 0, page is reload
            // and another question is show.
            const run = () => {

                seconds === 0 ? location.reload() : seconds--;
                //Checking that page is quiz page.
                if (document.title == "Quiz") {
                    counter.innerHTML = `Time: ${seconds}`;
                };
            };
            // Interval of time reload
            if(document.title == "Quiz"){

                setInterval(run, 1000);
            };

            /******************* SCORE *****************/
            let score = document.querySelector("#score");
            //Checking that page is quiz page.
            if (document.title == "Quiz") {
                score.innerHTML = "Score: 0"
            };
            // Initial score
            let currentScore = 0;
            // Adding score at localStorage
            const scoreLocalStorage = localStorage.getItem("score");
            //Checking that page is quiz page and score is storaged
            if (scoreLocalStorage !== null && document.title == "Quiz") {
                score.innerHTML = `Score: ${localStorage.getItem("score")}`;
            };

            function setScore() {

                const ssPermitted = () => {
                    currentScore = localStorage.getItem("score");
                    currentScore++;
                    localStorage.setItem("score", currentScore);
                };
                const ssForbidden = score.innerHTML = "Tu browser no acepta webStorage :(";
                typeof (Storage) !== undefined ? ssPermitted() : ssForbidden;

            };

            // Selecting DOM Objects
            const question = document.querySelector("#question");
            const answers = document.querySelectorAll(".answer")
            const buttons = document.querySelectorAll(".button");

            // Random Question
            currentCategory = localStorage.getItem("category");
            const categoryQuestions = questions.filter(question => question.category.startsWith(currentCategory));
            const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
            const currentQuestion = randomQuestion.question;
            const currentAnswers = randomQuestion.incorrect_answers;
            const correctAnswer = randomQuestion.correct_answer;

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
                    //! PENDING OF REFACTOR
                    if (currentButton.textContent === correctAnswer) {
                        currentButton.style.backgroundColor = "#38b000";
                        counter.style.color = "#38b000";
                        setScore();
                        score.innerHTML = `Score: ${currentScore}`;

                        disableButtons();
                        hightlightCorrect()
                        seconds = 3;

                    } else {
                        currentButton.style.backgroundColor = "#e71d36";
                        counter.style.color = "#e71d36";
                        disableButtons();
                        hightlightCorrect();
                        seconds = 3;
                    }
                    //! PENDING OF REFACTOR
                });
            };

            // Disable buttons

            function disableButtons() {

                for (let button of buttons) {
                    button.disabled = true
                    button.style.webkitFilter = "blur(6px)"
                    button.style.boxShadow = "none";
                }
            };

            // Highlight correct answer

            function hightlightCorrect() {

                for (let button of buttons) {
                    if (button.textContent === correctAnswer) {
                        button.style.webkitFilter = "blur(0px)";
                        button.style.color = "#000000";
                    };
                };

            };
        }
        )
}

fetchQuestions();
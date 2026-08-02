let currentQuestion = 0;
let score = 0;
let gameQuestions = [];
let answered = false;
let gameLength = 10;
let currentCategory = "Random";
let selectedLength = 10;


function setCategory(category, button) {
    currentCategory = category;

    document.getElementById("selectedCategory").textContent =
        "🎲 Current Category: " + category.toUpperCase();

    document.querySelectorAll(".category-buttons button")
        .forEach(item => item.classList.remove("selected"));

    button.classList.add("selected");
}
function startGame(length, button){

    selectedLength = length;

    document.querySelectorAll(".mode-buttons button")
        .forEach(item => item.classList.remove("selected"));

    button.classList.add("selected");

    launchGame();
}

function launchGame() {

}
function launchGame() {
    document.getElementById("clickSound").play();

    gameLength = selectedLength;

    document.getElementById("startScreen").classList.remove("active");
    document.getElementById("loadingScreen").classList.add("active");

    document.getElementById("loadingDetails").textContent =
        currentCategory.toUpperCase() + " • " + gameLength + " QUESTIONS";

    setTimeout(() => {

        document.getElementById("loadingScreen").classList.remove("active");
        document.getElementById("quizScreen").classList.add("active");

        startNewGame();

    }, 1500);

}

function startNewGame() {
    score = 0;
    currentQuestion = 0;

    document.getElementById("score").textContent = "0";

    let availableQuestions;

    if (currentCategory === "Random") {
        availableQuestions = [...questions];
    } else {
        availableQuestions = questions.filter(question =>
            String(question.category)
                .toLowerCase()
                .includes(currentCategory.toLowerCase())
        );
    }

    if (availableQuestions.length === 0) {
        availableQuestions = [...questions];
    }
gameQuestions = shuffle(availableQuestions)
    .slice(0, Math.min(gameLength, availableQuestions.length))
    .map(question => {

        const correctAnswer = question.answers[question.correct];
        const shuffledAnswers = shuffle(question.answers);

        return {
            ...question,
            answers: shuffledAnswers,
            correct: shuffledAnswers.indexOf(correctAnswer)
        };

    });

    showQuestion();
}


function showQuestion() {
    answered = false;

    const question = gameQuestions[currentQuestion];

    if (!question) {
        endGame();
        return;
    }

    document.getElementById("questionNumber").textContent =
        "Question " + (currentQuestion + 1) +
        " of " + gameQuestions.length;

    document.getElementById("questionCount").textContent =
        "QUESTION " + (currentQuestion + 1) +
        " / " + gameQuestions.length;

    document.getElementById("category").textContent =
        "📼 " + question.category;

    document.getElementById("difficulty").textContent =
        "⭐ " + question.difficulty;

    document.getElementById("question").textContent =
        question.question;

    document.getElementById("feedback").textContent = "";

    const nextButton = document.getElementById("nextButton");
    nextButton.style.display = "none";

    const answerButtons =
        document.querySelectorAll("#answers .answer");

    answerButtons.forEach((button, index) => {
        button.classList.remove("correct", "wrong");
        button.disabled = false;

        if (index < question.answers.length) {
            button.style.display = "block";
            button.textContent = question.answers[index];
        } else {
            button.style.display = "none";
        }
    });

    updateProgress();
}


function selectAnswer(selectedIndex) {
    if (answered) {
        return;
    }

    answered = true;

    const question = gameQuestions[currentQuestion];
    const answerButtons =
        document.querySelectorAll("#answers .answer");

    answerButtons.forEach(button => {
        button.disabled = true;
    });

    const selectedButton = answerButtons[selectedIndex];
    const correctButton = answerButtons[question.correct];

    if (selectedIndex === question.correct) {
        document.getElementById("correctSound").play();
        score++;
        selectedButton.classList.add("correct");

        document.getElementById("feedback").textContent =
            "✅ CORRECT! " + (question.fact || "");

        document.getElementById("score").textContent =
            score;
    } else {
        const wrong = document.getElementById("wrongSound");
wrong.currentTime = 0;
wrong.play().catch(err => console.log(err));
        selectedButton.classList.add("wrong");
        correctButton.classList.add("correct");

        document.getElementById("feedback").textContent =
            "❌ WRONG! " + (question.fact || "");
    }

    document.getElementById("nextButton").style.display =
        "inline-block";
}


function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < gameQuestions.length) {
        showQuestion();
    } else {
        endGame();
    }
}


function updateProgress() {
    const percent =
        ((currentQuestion + 1) / gameQuestions.length) * 100;

    document.getElementById("progressBar").style.width =
        percent + "%";
}


function endGame() {
    document.getElementById("quizScreen")
        .classList.remove("active");

    document.getElementById("resultScreen")
        .classList.add("active");

    document.getElementById("finalScore").textContent =
        "You scored " + score +
        " out of " + gameQuestions.length;

    const percent =
        gameQuestions.length > 0
            ? score / gameQuestions.length
            : 0;

    let title;
    let message;

    if (percent >= 0.9) {
        title = "🏆 GENERATION REWIND LEGEND";
       
        message =
            "You survived dial-up internet, mastered the VCR, and still know every word to the classics.";
    } else if (percent >= 0.75) {
        title = "📼 MIXTAPE MASTER";
        message =
            "You definitely had a favorite mixtape and knew exactly which songs to record.";
    } else if (percent >= 0.5) {
        title = "🎧 CASSETTE COLLECTOR";
        message =
            "You remember the good stuff—even if you had to rewind it with a pencil.";
    } else {
        title = "😂 STILL PROGRAMMING THE VCR";
        message =
            "Don’t worry. Nobody actually knew how to set the clock anyway.";
    }

    document.getElementById("titleEarned").textContent =
        title;

    document.getElementById("messageEarned").textContent =
        message;
}


function shuffle(array) {
    const copy = [...array];

    for (let index = copy.length - 1; index > 0; index--) {
        const randomIndex =
            Math.floor(Math.random() * (index + 1));

        [copy[index], copy[randomIndex]] =
            [copy[randomIndex], copy[index]];
    }

    return copy;
}
function goToMenu(){

    document.getElementById("resultScreen").classList.remove("active");
    document.getElementById("loadingScreen").classList.remove("active");
    document.getElementById("quizScreen").classList.remove("active");

    document.getElementById("startScreen").classList.add("active");

}
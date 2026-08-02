let currentQuestion = 0;
let score = 0;
let gameQuestions = [];
let answered = false;
let gameLength = 50;
let selectedMode = "solo";


function chooseMode(mode){

    selectedMode = mode;

    document.getElementById("startScreen").style.display="none";

    document.getElementById("lengthScreen").style.display="block";

}


function startGame(length){
    gameLength = length;

    document.getElementById("startScreen").classList.remove("active");
    document.getElementById("quizScreen").classList.add("active");

    startNewGame();

}



function startNewGame(){

    score = 0;
    currentQuestion = 0;

    gameQuestions = shuffle([...questions]);

    gameQuestions = gameQuestions.slice(0,gameLength);

    showQuestion();

}




function showQuestion(){

    answered = false;

    let q = gameQuestions[currentQuestion];


    document.getElementById("category").innerHTML =
    "📼 " + q.category;


    document.getElementById("difficulty").innerHTML =
    "⭐ " + q.difficulty;
document.getElementById("questionNumber").innerHTML =
"Question " + (currentQuestion + 1) + " of " + gameLength;


    document.getElementById("questionCount").innerHTML =
    "QUESTION " + (currentQuestion + 1) + " / " + gameQuestions.length;



    document.getElementById("progressBar").style.width =
    ((currentQuestion / gameQuestions.length) * 100) + "%";



    document.getElementById("question").innerHTML =
    q.question;



    let answers = [...q.answers];


    answers = shuffle(answers);



    let buttons =
    document.querySelectorAll(".answer");



    buttons.forEach((button,index)=>{

        button.classList.remove("correct");
        button.classList.remove("wrong");

        button.disabled = false;

        button.innerHTML = answers[index];


    });



    document.getElementById("feedback").innerHTML = "";


    document.getElementById("nextButton").style.display="none";


}




function selectAnswer(choice){


    if(answered) return;

    answered = true;


    let q = gameQuestions[currentQuestion];


    let buttons =
    document.querySelectorAll(".answer");



    let selected =
    buttons[choice].innerHTML;



    if(selected === q.answers[q.correct]){

        buttons[choice].classList.add("correct");

        document.getElementById("feedback").innerHTML =
"✅ CORRECT!<br><br>📼 " + q.fact;

        score++;


    }

    else{

    buttons[choice].classList.add("wrong");

    buttons.forEach((button)=>{

        if(button.innerHTML === q.answers[q.correct]){

            button.classList.add("correct");

        }

    });


    document.getElementById("feedback").innerHTML =
"❌ WRONG!<br><br>📼 " + q.fact;
}



    document.getElementById("score").innerHTML =
    score;



    document.getElementById("nextButton").style.display =
    "block";


}




function nextQuestion(){


    currentQuestion++;


    if(currentQuestion < gameQuestions.length){

        showQuestion();

    }

    else{

        endGame();

    }


}




function endGame(){


    document.getElementById("quizScreen").classList.remove("active");

    document.getElementById("resultScreen").classList.add("active");



    document.getElementById("finalScore").innerHTML =
    "You scored " + score + " out of " + gameQuestions.length;



    let title = "";



    let percent =
    score / gameQuestions.length;



    if(percent >= .9){

        title="🏆 MTV LEGEND";

    }

    else if(percent >= .75){

        title="📼 MIXTAPE MASTER";

    }

    else if(percent >= .5){

        title="🎧 CASSETTE COLLECTOR";

    }

    else{

        title="😂 STILL PROGRAMMING THE VCR";

    }



    document.getElementById("titleEarned").innerHTML =
    title;


}





function shuffle(array){

    return array.sort(()=>Math.random() - .5);

}
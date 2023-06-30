const quizData = [{
    question: "What is the Capital of USA?",
    a_1: 'New York',
    a_2: 'Washington DC',
    a_3: "San Francisco",
    a_4: "Miami",
    correct: 'a_2'
},
{
    question: "What is the Capital of India?",
    a_1: 'New Delhi',
    a_2: 'Bengaluru',
    a_3: "Hyderabad",
    a_4: "Chennai",
    correct: 'a_1'

},
{
    question: "What year was JS launched?",
    a_1: '2019',
    a_2: '2020',
    a_3: "2014",
    a_4: "2022",
    correct: 'a_3'

}

]

const questionEl = document.getElementById('question')
const answerEls = document.querySelectorAll('.answer')
const quiz = document.getElementById('Quiz')
const a1_text = document.getElementById('a1_text')
const a2_text = document.getElementById('a2_text')
const a3_text = document.getElementById('a3_text')
const a4_text = document.getElementById('a4_text')
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() {

    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question;
    a1_text.innerText = currentQuizData.a_1
    a2_text.innerText = currentQuizData.a_2
    a3_text.innerText = currentQuizData.a_3
    a4_text.innerText = currentQuizData.a_4

    // currentQuiz++;
}

function getSelected() {


    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
        answer = undefined;
    });

}

submitBtn.addEventListener("click", () => {


    const answer = getSelected();

    if (answer) {
        if (answer == quizData[currentQuiz].correct) {
            score++;
            console.log(answer);
        }
    }
    else {
        alert("Please select a choice")
        return;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {

        loadQuiz();
        deselectAnswers();
    }
    else {
        //TODO : Show Results
        quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} </h2><button onclick="location.reload()">Reload</button>`;
    }





})
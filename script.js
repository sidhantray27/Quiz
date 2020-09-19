const quizData = [
    {
        question: 'which is the computer named after a fruit ?',
        a:'Cherry',
        b:'Mango',
        c:'Banana',
        d:'Apple',
        correct: 'd'
    },
    {
        question: 'who introduced the telephone, in 1876 ?',
        a:'Micheal Farady',
        b:'Graham Bell',
        c:'Thomas Edison',
        d:'Thomas Watson',
        correct: 'b'
    },
    {
        question: 'What type of file is a .mp3 file ?',
        a:'Image',
        b:'Sound',
        c:'Text',
        d:'Video',
        correct: 'b'
    },
    {
        question: "What does the 'P' stand for in the Acronym CPU ?",
        a:'Page',
        b:'Parallel',
        c:'Processing',
        d:'Prime',
        correct: 'c'
    },
    {
        question: 'Which Manufacturer released the Galaxy Tab series ?',
        a:'Sony',
        b:'LG',
        c:'Motorola',
        d:'Samsung',
        correct: 'd'
    }
]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadquiz();

function loadquiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked=false;
    });
}

submitBtn.addEventListener("click",() =>{
    const answer = getSelected();   //check to see the answer
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz<quizData.length){
            loadquiz();
         }else{
             quiz.innerHTML = `<h2>YOU ANSWERED CORRECTLY ${score} OUT OF ${quizData.length} QUESTIONS !!!</h2>
             <button onclick="location.reload()">RETAKE QUIZ</button>`
        }
    }
    
});
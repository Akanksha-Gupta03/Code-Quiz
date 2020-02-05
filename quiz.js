const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
  
const questionElement = document.getElementById("question")
const answerButtonElement = document.getElementById("answer-buttons")
let score = 0;



function Timer(){
 let timeout = parseInt(document.getElementById('timer').innerText);

    timeout -= 1;

     document.getElementById('timer').innerText = timeout;
    console.log(timeout);}


 timeout = setInterval(Timer,1000);
 //clearInterval(timeout)


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startQuiz)
nextButton.addEventListener("click", () =>{
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz(){
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0 
    questionContainerElement.classList.remove("hide")
    setNextQuestion()

}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct){
            button.dataset.correct = answer.correct
        } 
        button.addEventListener("click", selectAnswer)  
        answerButtonElement.appendChild(button)
    });
}

function resetState(){
    nextButton.classList.add("hide")
    while( answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(event){
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1){
      nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
       question: "According to Big Bang Thoery,how did the universe begin?",
       answers: [
         { text: "A rain Storm", correct: false },
         { text: "An explosion", correct: true },
         { text: "A slow,calm expansion", correct: false },
         { text: "A meteor shower", correct: false }   
       ]
    },
    {
        question: "What animal feeds almost exclusively on bamboo?",
        answers: [
          { text: "Orangutans", correct: false },
          { text: "Kangaroos", correct: false },
          { text: "Kaolas", correct: false },
          { text: "Pandas", correct: true }
        ]      
    },
    {
        question: "Which U.S President is thought to have taught himself how to read and write?",
       answers: [
         { text: "Woodrow Wilson", correct: false },
         { text: "Abrahim Lincoln",correct: true },
         { text: "Theodore Roosevelt", correct: false },
         { text: "John Adams", correct: false }  
       ]  
    },
    {
        question: "Newton is said to have been inspired by what to describe the theory of gravity?",
       answers: [
         { text: "Ladder", correct: false },
         { text: "Hailstone", correct: false},
         { text: "Apple", correct: true},
         { text: "Rock", correct: false }
       ]   
    },
    {
        question: "The human brain communicates with the rest of the body through networks of what?",
       answers: [
         { text: "Tendons", correct: false },
         { text: "Muscles", correct: false },
         { text: "Lipids", correct: false },
         { text: "Nerves", correct: true }   
       ]
    },
    {
        question: "What is the head of the Roman Catholic Church called?",
       answers: [
         { text: "Master", correct: false },
         { text: "Cardinal", correct: false },
         { text: "Pope", correct: true},
         { text: "Preacher", correct: false } 
       ]   
    },
    {
        question: "In the Harry Potter series,Harry must battle which evil wizard?",
       answers: [
         { text: "Voldemort", correct: true },
         { text: "Grindelwald", correct: false},
         { text: "Dumbledore", correct: false },
         { text: "Sirius Black", correct: false } 
       ]   
    },
    {
        question: "Where do penguins live?",
       answers: [
         { text: "Greenland", correct: false },
         { text: "Nova Scotia", correct: false },
         { text: "Antartica only", correct: false },
         { text: "Various locales in the southern hemisphere", correct: true }    
       ]
    },
    {
        question: "Where is Mount Kilimanjaro?",
       answers: [
         { text: "Argentina", correct: false },
         { text: "Russia", correct: false },
         { text: "Japan", correct: false },
         { text: "Tanzania", correct: true }    
       ]
    },
    {
        question: "Which of these rivers is often cited as the longest river on earth?",
       answers: [
         { text: "Amazon", correct: false },
         { text: "Nile", correct: true },
         { text: "Ganges", correct: false },
         { text: "Delaware", correct: false }    
       ]
    }
]


// variables
const question = document.querySelector('#question')
const answersBox = document.querySelector('#answers-box')
const quizzContainer = document.querySelector('#quizz-container')
const scoreContainer = document.querySelector('#score-container')
const letters = ['a', 'b', 'c', 'd']

let points = 0
let actualQuestion = 0

// Questions

const questions = [
  {
    "question": "PHP foi desenvolvido para qual fim?",
    "answers": [
      {
        "answer": "Desenvolvimento de sites",
        "correct": true
      },
      {
        "answer": "Desenvolvimento de jogos",
        "correct": false
      },
      {
        "answer": "Desenvolvimento de aplicativos",
        "correct": false
      },
      {
        "answer": "Desenvolvimento de sistemas operacionais",
        "correct": false
      }
    ]
  },
  {
    "question": "Uma forma de declarar uma variavel em JavaScript é:",
    "answers": [
      {
        "answer": "var nomeDaVariavel = 'valor'",
        "correct": true
      },
      {
        "answer": "nomeDaVariavel = 'valor'",
        "correct": false
      },
      {
        "answer": "nomeDaVariavel: 'valor'",
        "correct": false
      },
      {
        "answer": "nomeDaVariavel = valor",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual a sintaxe correta para se criar um elemento em JavaScript?",
    "answers": [
      {
        "answer": "document.createElement('p')",
        "correct": true
      },
      {
        "answer": "document.createClass('p')",
        "correct": false
      },
      {
        "answer": "document.createElement('#p')",
        "correct": false
      },
      {
        "answer": "document.createElement.id('p')",
        "correct": false
      }
    ]
  },
]

function init() {
  createQuestion(actualQuestion)
}

function createQuestion(i) {
  const oldButtons = document.querySelectorAll('button')

  oldButtons.forEach(button => {
    button.remove()
  })

  const questionText = question.querySelector('#question-text')
  const questionNumber = question.querySelector('#question-number')

  questionText.textContent = questions[i].question
  questionNumber.textContent = i + 1
}

init()
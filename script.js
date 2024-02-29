function shakeEightBall() {

let answers = [
"Yes",
"No",
"Maybe",
"Ask again later",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"Most likely",
"Outlook not so good",
"Signs point to yes",
"Reply hazy, try again",
"My sources say no"
]

let randomIndex = Math.floor(Math.random() * answers.length)
let answerElement = document.getElementById("answer")
answerElement.innerText = answers[randomIndex]
}
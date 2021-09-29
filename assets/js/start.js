let startButton = document.querySelector('#quiz-start');
let welcomeDivEl = document.querySelector('#welcome')
function startQuiz(){
    // hide welcome screen
    welcomeDivEl.setAttribute("class", "hide");
}
startButton.onclick = startQuiz;
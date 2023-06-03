var multiple = document.getElementById("questions")
var startBtnEl = document.getElementById("startBtn")
var intro = document.getElementById("instruct")
var interval
var clock = 60
var timer = document.getElementById("time")
var cueCounter = 0
var initials = document.getElementById("userId")
var gameOver = document.getElementById("endGame")
var clickSub = document.getElementById("submit")




var multipleQuestions = [
    {
        q:"what color is the sky?",
        a: ["purple", "black", "yellow", "blue"] ,
        c: "blue"

    },
    {
        q:"what is the capital of Florida?",
        a: ["orlando", "miami","new york", "tallahassee"] ,
        c: "tallahassee"
    }

] 


function startHandler () {
  //display question and answers
  multiple.classList.remove("hide")
  displayQuestions()
  //hide start button and directions
  intro.classList.add("hide")

  // start a timer
  startTimer()
}

function displayQuestions (){
    multiple.innerHTML = ""
   var h1El = document.createElement("h1")
   h1El.textContent = multipleQuestions[cueCounter].q
   multiple.append(h1El)
   for (var i = 0; i < multipleQuestions[cueCounter].a.length; i++) {
    var btn = document.createElement("button")
    btn.textContent = multipleQuestions[cueCounter].a[i]
    multiple.append(btn)

   }

}

function startTimer() {
interval = setInterval(function(){
clock-- 
timer.textContent = "time:" + clock
if(clock <= 0) {
clearInterval(interval)
}
},1000 )


}

function answerHandler(event) {
if(!event.target.matches("button")){

} else {
    console.log(event.target.textContent)
    if(event.target.textContent === multipleQuestions[cueCounter].c) {
        console.log(true)
    } else {
        console.log(false)
        clock = clock - 10
    }
    if(cueCounter < multipleQuestions.length - 1){
        cueCounter++
    displayQuestions()
    }else {
        endGame()
    }
    
   
}
}
 function endGame() {
    multiple.classList.add("hide")
    clearInterval(interval)
    gameOver.classList.remove("hide")
 }

function scoreHandler(){
    var input = initials.value
    console.log(input) 
}

clickSub.addEventListener("click", scoreHandler)
multiple.addEventListener("click", answerHandler)
startBtnEl.addEventListener('click',startHandler) 
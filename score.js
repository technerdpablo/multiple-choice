var storage = JSON.parse(localStorage.getItem("highScore"))|| []
var score = document.getElementById("score")
console.log(storage);
for (var i=0; i<storage.length; i++) {
    var entry = storage[i]
    var li= document.createElement("li")
    li.textContent = "User: " + entry.initials + " Score: " + entry.score
    score.append(li)
}
function newGame() {
  document.getElementById("button").style.display = "none";
  var images = document.getElementsByClassName("memory-card");
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "block";
  }
}
document.getElementById("button").addEventListener("click", newGame);


function flipCard(event){
    event.currentTarget.style.transform = "rotateY(180deg)"
}

var cards = document.getElementsByClassName("memory-card");
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", flipCard)
}
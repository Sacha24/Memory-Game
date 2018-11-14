function newGame() {
  document.getElementById("button").style.display = "none";
  var images = document.getElementsByClassName("memory-card");
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "block";
  }
}
document.getElementById("button").addEventListener("click", newGame);

var counter = 0;
function flipCard(event) {
  var cardTarget = event.currentTarget.style;
  if ((cardTarget.transform = "rotateY(180deg)")) {
    counter++;
  }
  if (counter === 2) {
    document.getElementsByClassName("memory-card").disabled = true;
    counter = 0;
    setTimeout(function() {
      cardTarget.transform = "rotateY(0deg)";
    }, 3000);
  }
}

var card = document.getElementsByClassName("memory-card");
for (var i = 0; i < card.length; i++) {
  card[i].addEventListener("click", flipCard);
}

var src = [
  "images/Captain-America.jpg",
  "images/Iron Man.jpg",
  "images/Hulk.png",
  "images/thor.jpeg",
  "images/Barton.jpg",
  "images/black widow.jpg",
  "images/Captain-America.jpg",
  "images/Iron Man.jpg",
  "images/Hulk.png",
  "images/thor.jpeg",
  "images/Barton.jpg",
  "images/black widow.jpg"
];
function shuffle() {
  var shuffleArray = src.sort(function(){return 0.5 - Math.random()})
  $("#img1").attr("src", shuffleArray[0])
  $("#img2").attr("src", shuffleArray[1])
  $("#img3").attr("src", shuffleArray[2])
  $("#img4").attr("src", shuffleArray[3])
  $("#img5").attr("src", shuffleArray[4])
  $("#img6").attr("src", shuffleArray[5])
  $("#img7").attr("src", shuffleArray[6])
  $("#img8").attr("src", shuffleArray[7])
  $("#img9").attr("src", shuffleArray[8])
  $("#img10").attr("src", shuffleArray[9])
  $("#img11").attr("src", shuffleArray[10])
  $("#img12").attr("src", shuffleArray[11])
}
document.getElementById("button").addEventListener("click", shuffle);

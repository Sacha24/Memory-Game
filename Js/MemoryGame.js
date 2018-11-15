function newGame() {
  $("button").css("display", "none");
  var images = $(".memory-card");
  images.css("display", "block");
}
$("button").on("click", newGame);

var flippedCard = 0;
var cardsPicked = [];
function flipCard1(event) {
  var cardTarget = event.currentTarget;
  cardsPicked.push(cardTarget.firstElementChild.src);
  if ((cardTarget.style.transform = "rotateY(180deg)")) {
    flippedCard++;
  }
  if (flippedCard === 2) {
    checkIfMatch();
    $(document.body).css("pointer-events", "none");
    setTimeout(function() {
      $(document.body).css("pointer-events", "auto");
      $(".memory-card").css({ transform: "rotateY(" + 0 + "deg)" });
    }, 2000);
    flippedCard = 0;
  }
}
var card = $(".memory-card");
card.on("click", flipCard1);

function checkIfMatch() {
  if(cardsPicked[0] === cardsPicked[1]){
    
    console.log("Match !")
  }
  else{
    console.log("No Macth")
  }
  console.log(cardsPicked)
  cardsPicked.splice(0,2);
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
  var shuffleArray = src.sort(function() {
    return 0.5 - Math.random();
  });
  for (var i = 0; i <= shuffleArray.length; i++) {
    $("#img" + i).attr("src", shuffleArray[i]);
  }
}
document.getElementById("button").addEventListener("click", shuffle);

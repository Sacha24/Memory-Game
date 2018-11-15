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
  cardsPicked.push(cardTarget);
  if ((cardTarget.style.transform = "rotateY(180deg)")) {
    cardTarget.style.pointerEvents = "none";
    flippedCard++;
  }
  if (flippedCard === 2) {
    $(".memory-card.unmatch").css("pointer-events", "none");
    var match = checkIfMatch();

    if (!match) {
      setTimeout(function() {
        $(".memory-card.unmatch").css("pointer-events", "auto");
        $(".memory-card.unmatch").css({ transform: "rotateY(" + 0 + "deg)" });
      }, 2000);
    } else {
      $(".memory-card.unmatch").css("pointer-events", "auto");
      cardsPicked[0].classList.replace("unmatch","match")
      cardsPicked[1].classList.replace("unmatch","match")
      cardsPicked.splice(0, 2);
      /* $(".memory-card.match").css({ transform: "rotateY(" + 180 + "deg)" }); */
    }
    flippedCard = 0;
  }
}
var card = $(".memory-card");
card.on("click", flipCard1);

function checkIfMatch() {
  if (
    cardsPicked[0].firstElementChild.src ===
    cardsPicked[1].firstElementChild.src
  ) {
    return true;
  } else {
    cardsPicked.splice(0, 2);
    return false;
  }
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

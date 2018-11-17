function newGame() {
  $("#NewGame").css("display", "none");
  $("#levels").css("display", "block");
}
$("#NewGame").on("click", newGame);

function pickLevelEasy() {
  var images = $(".memory-card");
  images.css("display", "block");
  $("#levels").css("display", "none");
  src.splice(-8);
  for (var i = 12; i < 20; i++) {
    $("#card" + i).css("display", "none");
  }
}
$("#easy").on("click", pickLevelEasy);

function pickLevelMedium() {
  var images = $(".memory-card");
  images.css("display", "block");
  $("#levels").css("display", "none");
  src.splice(-4);
  for (var i = 16; i < 20; i++) {
    $("#card" + i).css("display", "none");
  }
}
$("#medium").on("click", pickLevelMedium);

function pickLevelHard() {
  var images = $(".memory-card");
  images.css("display", "block");
  $("#levels").css("display", "none");
  $(".memory-game").css("width", "840px");
  $("#wrongGuesses").css("left", "220px");
}
$("#hard").on("click", pickLevelHard);

var flippedCard = 0;
var wrongGuesses = 0;
var cardsPicked = [];
var endGame = [];

var flipCard = function(event) {
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
      wrongGuesses++;
      setTimeout(function() {
        $(".memory-card.unmatch").css("pointer-events", "auto");
        $(".memory-card.unmatch").css({ transform: "rotateY(" + 0 + "deg)" });
      }, 2000);
    } else {
      endGame.push(cardTarget);
      $(".memory-card.unmatch").css("pointer-events", "auto");
      cardsPicked[0].classList.replace("unmatch", "match");
      cardsPicked[1].classList.replace("unmatch", "match");
      cardsPicked.splice(0, 2);
    }
    flippedCard = 0;
    $("#wrongGuesses").html("Wrong guesses : " + wrongGuesses);
  }
  if (endGame.length === src.length / 2) {
    setTimeout(function() {
      var images = $(".memory-card");
      images.fadeTo(1000, 0);
    }, 3000);
    setTimeout(function() {
      $("#restart").css("display", "block");
    }, 5000);
  }
};
var card = $(".memory-card");
card.on("click", flipCard);

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

function resetGame() {
  location.reload();
}

$("#restart").on("click", resetGame);

var src = [
  "images/Captain-America.jpg",
  "images/Captain-America.jpg",
  "images/Iron Man.jpg",
  "images/Iron Man.jpg",
  "images/Hulk.png",
  "images/Hulk.png",
  "images/thor.jpeg",
  "images/thor.jpeg",
  "images/Barton.jpg",
  "images/Barton.jpg",
  "images/black widow.jpg",
  "images/black widow.jpg",
  "images/dr strange.jpg",
  "images/dr strange.jpg",
  "images/black panther.jpg",
  "images/black panther.jpg",
  "images/quill.jpg",
  "images/quill.jpg",
  "images/antman.jpg",
  "images/antman.jpg"
];

function shuffle() {
  var shuffleArray = src.sort(function() {
    return 0.5 - Math.random();
  });
  for (var i = 0; i <= shuffleArray.length; i++) {
    $("#img" + i).attr("src", shuffleArray[i]);
  }
}
$("li").on("click", shuffle);

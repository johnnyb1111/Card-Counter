// Set default variable values

var deckCount = 8;
var count = 0;

// Get Deck Count from Segmented Controller

function deckCount1() {
  var deckCount = 1;
};

function deckCount2() {
  var deckCount = 2;
};

function deckCount3() {
  var deckCount = 3;
};

function deckCount4() {
  var deckCount = 4;
};

function deckCount5() {
  var deckCount = 5;
};

function deckCount6() {
  var deckCount = 6;
};

function deckCount7() {
  var deckCount = 7;
};

function deckCount8() {
  var deckCount = 8;
};

// User Clicks 10-A The Running Count Goes Down by 1

$(".decreaseCount").click(function() {
  var count = parseInt($("#runningCount").text());
  $("#runningCount").text(count - 1);
});

// User Clicks 2-6 The Running Count Goes Up by 1

$(".increaseCount").click(function() {
  var count = parseInt($("#runningCount").text());
  $("#runningCount").text(count + 1);
});

// User Clicks 7-9 The Running Count Doesn"t Change

$(".noCount").click(function() {
  var count = parseInt($("#runningCount").text());
  $("#runningCount").text(count);
});

// Reset All Values to their Defaults

function resetValues() {
  $("#runningCount").text("0");
  $("#trueCount").text("0.0");
  $("#bet").text("Bet 1x");
};
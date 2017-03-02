// Set default variable values


// Get Deck Count from Segmented Controller

function deckCount1() {
  var deckCount = 1;
}

function deckCount2() {
  var deckCount = 2;
}

function deckCount3() {
  var deckCount = 3;
}

function deckCount4() {
  var deckCount = 4;
}

function deckCount5() {
  var deckCount = 5;
}

function deckCount6() {
  var deckCount = 6;
}

function deckCount7() {
  var deckCount = 7;
}

function deckCount8() {
  var deckCount = 8;
}
$(function() {

  var deckCount = 8;
  var count = 0;

  // User Clicks 10-A The Running Count Goes Down by 1

  $(".decreaseCount").click(function() {
    count = parseInt($("#runningCount").text());
    $("#runningCount").text(count - 1);
    count = parseInt($("#runningCount").text());
    $("#trueCount").html(calc_true_count(deckCount, count));
    calc_bet_amt(parseFloat($("#trueCount").html()));



  });

  // User Clicks 2-6 The Running Count Goes Up by 1

  $(".increaseCount").click(function() {
    count = parseInt($("#runningCount").text());
    $("#runningCount").text(count + 1);
    count = parseInt($("#runningCount").text());
    $("#trueCount").html(calc_true_count(deckCount, count));
    calc_bet_amt(parseFloat($("#trueCount").html()));

  });

  // User Clicks 7-9 The Running Count Doesn"t Change

  $(".noCount").click(function() {
    count = parseInt($("#runningCount").text());
    $("#runningCount").text(count);
    count = parseInt($("#runningCount").text());
    $("#trueCount").html(calc_true_count(deckCount, count));
    calc_bet_amt(parseFloat($("#trueCount").html()));


  });

  $(".segmented-control__input").click(function() {
    deckCount = $('input[name=option]:checked').val();
    count = parseInt($("#runningCount").text());
    $("#trueCount").html(calc_true_count(deckCount, count));
    calc_bet_amt(parseFloat($("#trueCount").html()));


  });
});
// Reset All Values to their Defaults

function resetValues() {
  $("#runningCount").text("0");
  $("#trueCount").text("0.0");
  $("#bet").text("Bet 1x");
  $("input[name=option]").filter("[value='8']").prop("checked", true);
}

function calc_true_count(deck, count) {
  var cal_value = parseInt(count, 10) / parseInt(deck, 10);
  //return Math.round(cal_value,1);

  return cal_value.toFixed(1);
}

function calc_bet_amt(true_count) {
  var bet_amt = "Bet 1x";
  if (true_count < 2) {
    bet_amt = "Bet 1x";
  }
  if (true_count >= 2 && true_count < 4) {
    bet_amt = "Bet 2x";
  } else if (true_count >= 4 && true_count < 6) {
    bet_amt = "Bet 3x";
  } else if (true_count >= 6 && true_count < 8) {
    bet_amt = "Bet 4x";
  } else if (true_count >= 8) {
    bet_amt = "Bet 5x";
  }
  $("#bet").html(bet_amt);
}
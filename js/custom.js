// User Clicks 10-A The Running Count Goes Down by 1

$('.decreaseCount').click(function() {
  var count = parseInt($('#trueCount').text());
  $('#trueCount').text(count-1);
});

// User Clicks 2-6 The Running Count Goes Up by 1

$('.increaseCount').click(function() {
  var count = parseInt($('#trueCount').text());
  $('#trueCount').text(count+1);
});

// User Clicks 7-9 The Running Count Doesn't Change

$('.noCount').click(function() {
  var count = parseInt($('#trueCount').text());
  $('#trueCount').text(count);
});

// Reset All Values to their Defaults

function resetValues() {
  $('#trueCount').text('0');
  $('#data').text('0.0');
  $('#bet').text('Bet 1x');
};
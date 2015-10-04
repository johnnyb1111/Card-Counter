$(document).ready(function(){
    window.inputbox = '0';
    $("#inputbox").keyup(function(){
        inputbox = $("#inputbox").val();
        ChangeCount();
    });

    $("select.form-control").change(ChangeCount);

    var $select = $("select.form-control");
    for (i=1;i<=8;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});

function ChangeCount() {
    var amount;
    switch(inputbox) {
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
            amount = 1;
            break
        case '7':
        case '8':
        case '9':
            amount = 0;
            break
        case 't':
        case "j":
        case "q":
        case "k":
        case "a":
        case "1":
        case "f":
            amount = -1;
            break
        default:
            $("#inputbox").val("");
            return;
            break
    }
    if ($("#inputbox").val()) $("#result").text(parseInt($("#result").text()) + amount);

    var blue = parseInt($("#result").text());
    var sel = parseInt($("select.form-control").val());
    var result = parseFloat(blue / sel).toFixed(1);
    // user result variable to your need.
    $("#data").html(result);
    console.log(result);

    var bet = "Bet 1x";
    if (result < 2) bet = "Bet 1x";
    else if (result >= 2 && result < 4) bet = "Bet 2x";
    else if (result >= 4 && result < 6) bet = "Bet 3x";
    else if (result >= 6 && result < 8) bet = "Bet 4x";
    else if (result >= 8 ) bet = "Bet 5x";

    $("#bet").html(bet);

    $("#inputbox").val("");
}

function resetValues() {
    $('#result').text('0');
    $('#data').text('0.0');
    $('#bet').text('Bet 1x');
    $("#select").val("selectDeck");
};

// function clearCount() {
//     $('#result').text('0')
//     $("#data").html('0');
//     $("#bet").html("Bet 1x");
// };
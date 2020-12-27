$(document).ready(function() {
    let userHandshape = -1;
    $("#user-points,#computer-points").text("0");

    //$("#texts-container").css("background-color", "red");

    
    $("#rock-id").click(function() {
        var result = calculateResult(0);
        printResult(0, result);
    });

    $("#paper-id").click(function() {
        var result = calculateResult(1);
        printResult(1, result);
    });

    $("#scissors-id").click(function() {
        var result = calculateResult(2);
        printResult(2, result);
    });
    function calculateResult(userHandshape) {
        computerHandshape = getRndInteger(0,2);
        // 0 -> user wins; 1 -> computer wins; 2 -> draw
        // 0 -> rock; 1 -> paper; 2 -> scissors
        if(userHandshape === computerHandshape){
            return 2 // DRAW
        }

        switch(computerHandshape){
            case(0):
                if(userHandshape === 1){
                    return 0 // USER WINS
                }else{
                    return 1 // COMPUTER WINS
                }
            break;
            case(1):
                if(userHandshape === 0){
                    return 1 // COMPUTER WINS
                }else{
                    return 0 // USER WINS
                }
            break;
            case(2):
                if(userHandshape === 0){
                    return 0 // USER WINS
                }else{
                    return 1 // COMPUTER WINS
                }
            break;
        }
    }

    function printResult(userHandshape, result) {
        // 0 -> user wins; 1 -> computer wins; 2 -> draw
        // 0 -> rock; 1 -> paper; 2 -> scissors
        switch(result){
            case(0):
                $("#result-text").text("YOU WIN");
                $("#result-text").css("color", "white");
                var value = parseInt($('#user-points').text());
                value++;
                $("#user-points").text(value);
                $("#texts-container").animate({backgroundColor: "#66ff99", color: "black" }, 100 );

                switch(userHandshape){
                    case(0):
                        $("#user-selection-text").text("You played with rock");
                        $("#computer-selection-text").text("Computer played with scissors");
                    break;
                    case(1):
                        $("#user-selection-text").text("You played with paper");
                        $("#computer-selection-text").text("Computer played with rock");
                    break;
                    case(2):
                        $("#user-selection-text").text("You played with scissors");
                        $("#computer-selection-text").text("Computer played with paper");
                    break;
                }
            break;

            case(1):
                $("#result-text").text("YOU LOSE");
                $("#result-text").css("color", "white");
                var value = parseInt($('#computer-points').text());
                value++;
                $("#computer-points").text(value);
                $("#texts-container").animate({backgroundColor: "#ff4d4d", color: "black" }, 100 );

                switch(userHandshape){
                    case(0):
                        $("#user-selection-text").text("You played with rock");
                        $("#computer-selection-text").text("Computer played with paper");
                    break;
                    case(1):
                        $("#user-selection-text").text("You played with paper");
                        $("#computer-selection-text").text("Computer played with scissors");
                    break;
                    case(2):
                        $("#user-selection-text").text("You played with scissors");
                        $("#computer-selection-text").text("Computer played with rock");
                    break;
                }
            break;


            case(2):
                $("#result-text").text("DRAW");
                $("#result-text").css("color", "black");
                $("#texts-container").animate({backgroundColor: "#ADD8E6", color: "black" }, 100 );
                switch(userHandshape){
                    case(0):
                        $("#user-selection-text").text("You played with rock");
                        $("#computer-selection-text").text("Computer played with rock");
                    break;
                    case(1):
                        $("#user-selection-text").text("You played with paper");
                        $("#computer-selection-text").text("Computer played with paper");
                    break;
                    case(2):
                        $("#user-selection-text").text("You played with scissors");
                        $("#computer-selection-text").text("Computer played with scissors");
                    break;
                }
            break;
        }
    }
    
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

});
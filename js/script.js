$(document).ready(function() {
    let userHandshape = -1;
    $("#user-points,#computer-points").text("0");
    // $("#rock-id").click(function() {
    //     $("#user-selection-text").text("You played with rock");
    //     userHandshape = 0;
    //     computerHandshape = getRndInteger(0,2);
    //     if(computerHandshape === 0){
    //         $("#computer-selection-text").text("Computer played with rock");
    //         $("#result-text").text("DRAW");
    //         $("#result-text").css("color", "black");
    //     }else if(computerHandshape === 1){
    //         $("#computer-selection-text").text("Computer played with paper");
    //         $("#result-text").text("YOU LOSE");
    //         $("#result-text").css("color", "red");
            
    //         var value = parseInt($('#computer-points').text());
    //         value++;
    //         $("#computer-points").text(value);
    //     }else{
    //         $("#computer-selection-text").text("Computer played with scissors");
    //         $("#result-text").text("YOU WIN");
    //         $("#result-text").css("color", "green");
    //         var value = parseInt($('#user-points').text());
    //         value++;
    //         $("#user-points").text(value);
    //     }
    // });
    
    // $("#paper-id").click(function() {
    //     $("#user-selection-text").text("You played with paper");
    //     userHandshape = 1;
    //     computerHandshape = getRndInteger(0,2);
    //     if(computerHandshape === 0){
    //         $("#computer-selection-text").text("Computer played with rock");
    //         $("#result-text").text("YOU WIN");
    //         $("#result-text").css("color", "green");
    //     }else if(computerHandshape === 1){
    //         $("#computer-selection-text").text("Computer played with paper");
    //         $("#result-text").text("DRAW");
    //         $("#result-text").css("color", "black");
    //     }else{
    //         $("#computer-selection-text").text("Computer played with scissors");
    //         $("#result-text").text("YOU LOSE");
    //         $("#result-text").css("color", "red");
    //     }
    // });

    // $("#scissors-id").click(function() {
    //     $("#user-selection-text").text("You played with scissors");
    //     userHandshape = 2;
    //     computerHandshape = getRndInteger(0,2);
    //     if(computerHandshape === 0){
    //         $("#computer-selection-text").text("Computer played with rock");
    //         $("#result-text").text("YOU LOSE");
    //         $("#result-text").css("color", "red");
    //     }else if(computerHandshape === 1){
    //         $("#computer-selection-text").text("Computer played with paper");
    //         $("#result-text").text("YOU WIN");
    //         $("#result-text").css("color", "green");
    //     }else{
    //         $("#computer-selection-text").text("Computer played with scissors");
    //         $("#result-text").text("DRAW");
    //         $("#result-text").css("color", "black");
    //     }
    // });
    
    $("#rock-id").click(function() {
        calculateResult(0);
    });

    $("#paper-id").click(function() {
        calculateResult(1);
    });

    $("#scissors-id").click(function() {
        calculateResult(2);
    });
    function calculateResult(userHandshape) {
        computerHandshape = getRndInteger(0,2);
        switch(computerHandshape){
            case(0):
                
            break;
            case(1):
            break;
            case(2):
            break;


        }
    }

    function printResult(result) {
        // 0 -> user wins
        // 1 -> computer wins
        // 2 -> draw


       
    }
    
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

});
// $(".btn").click(function(event){
//     console.log(event.currentTarget.innerHTML);
//     // console.log(event);
// })

var onScreenNum = 0;
var offScreenNum = 0;
var currentOp = "";

// var num_list = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var op_list = ['<i class="fas fa-plus" aria-hidden="true"></i>',
            '<i class="fas fa-minus" aria-hidden="true"></i>',
            '<i class="fas fa-times times-btn" aria-hidden="true"></i>',
            '<i class="fas fa-divide" aria-hidden="true"></i>',
            "="]
// var cancel = "C";
// var result = "=";

function displayNumOnScreen(num){
    $("h1").text(num);
}

function clearDisplay(){
    // offScreenNum = onScreenNum;
    // onScreenNum = 0;
    displayNumOnScreen(0);
}

function calc(num1, num2, op){
    if (op_list.indexOf(op) === 0){
        var x = num1 + num2;
        return Math.round((x + Number.EPSILON) * 100) / 100;
    }
    else
    if (op_list.indexOf(op) === 1){
        var x = num1 - num2;
        return Math.round((x + Number.EPSILON) * 100) / 100;
    }
    else
    if (op_list.indexOf(op) === 2){
        var x = num1 * num2;
        return Math.round((x + Number.EPSILON) * 100) / 100;
    }
    else
    if (op_list.indexOf(op) === 3){
        var x = num1/num2;
        return Math.round((x + Number.EPSILON) * 100) / 100;
    }
    if (op_list.indexOf(op) === 4){
        var x = num2;
        return Math.round((x + Number.EPSILON) * 100) / 100;
    }
    else {
        return num1 + num2;
    }
}

$(".num-btn").click(function(event){
    if (currentOp === "="){
        offScreenNum = 0;
        var entry = parseInt(event.currentTarget.innerHTML);
        onScreenNum = onScreenNum*10 + entry;
        displayNumOnScreen(onScreenNum);
    }
    else {
        var entry = parseInt(event.currentTarget.innerHTML);
        onScreenNum = onScreenNum*10 + entry;
        displayNumOnScreen(onScreenNum);
    }
    
    // console.log("onScreenNum :" + onScreenNum);
    // console.log("offScreenNum :" + offScreenNum);
    // console.log("currentOp :" + currentOp);
})

$(".operator").click(function(event){
    var rslt = calc(offScreenNum, onScreenNum, currentOp);
    offScreenNum = rslt;
    onScreenNum = 0;
    displayNumOnScreen(rslt);
    currentOp =  event.currentTarget.innerHTML;
})

$(".clear").click(function(event){
    onScreenNum = 0;
    offScreenNum = 0;
    currentOp = "";
    displayNumOnScreen(onScreenNum);
})

$(".result").click(function(event){
    var rslt = calc(offScreenNum, onScreenNum, currentOp);
    offScreenNum = 0;
    onScreenNum = rslt;
    currentOp = "=";
    displayNumOnScreen(onScreenNum);
})

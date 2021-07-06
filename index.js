var op_list = ['<i class="fas fa-plus" aria-hidden="true"></i>',
            '<i class="fas fa-minus" aria-hidden="true"></i>',
            '<i class="fas fa-times times-btn" aria-hidden="true"></i>',
            '<i class="fas fa-divide" aria-hidden="true"></i>']

var num_list = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var currentQueue = [];
var prevButtonClick = ""
;
function displayNumOnScreen(num){
    if (num > 9999999){
        $("h1").text("TOO LARGE")
    }
    else {
        $("h1").text(num);
    }
    
}

function clearDisplay(){
    displayNumOnScreen(0);
}

function calc(num1, op, num2){
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
    else {
        return num1 + num2;
    }
}

function eval(queue){

    while (queue.length > 1) {
        queue = [calc(queue[0],queue[1],queue[2])].concat(queue.splice(3,queue.length))
    }
    return queue[0];
}

$(".num-btn").click(function(event){

    if (op_list.includes(prevButtonClick)){
        var entry = parseInt(event.currentTarget.innerHTML);
        displayNumOnScreen(entry);
        prevButtonClick = event.currentTarget.innerHTML;
    }
    else if (prevButtonClick === "="){
        currentQueue = [];
        var entry = parseInt(event.currentTarget.innerHTML);
        displayNumOnScreen(entry);
        prevButtonClick = event.currentTarget.innerHTML;
    }
    else {
        var entry = parseInt(event.currentTarget.innerHTML);
        var onScreenNum = parseInt($("h1").text());
        onScreenNum = onScreenNum*10 + entry;
        displayNumOnScreen(onScreenNum);
        prevButtonClick = event.currentTarget.innerHTML;
    }
})


$(".clear").click(function(event){
    currentQueue = [];
    displayNumOnScreen(0);
    prevButtonClick = "";
})


$(".operator").click(function(event){

    if (prevButtonClick === ""){
        prevButtonClick = event.currentTarget.innerHTML;
    }
    else if (num_list.includes(prevButtonClick)){
        var onScreenNum = parseInt($("h1").text());
        currentQueue = currentQueue.concat([onScreenNum]);
        var rslt = eval(currentQueue);
        currentQueue = [rslt, event.currentTarget.innerHTML];
        displayNumOnScreen(rslt);
        prevButtonClick = event.currentTarget.innerHTML;
    }
    else if (op_list.includes(prevButtonClick)){
        currentQueue = currentQueue.splice(0, currentQueue.length - 1);
        currentQueue = currentQueue.concat([event.currentTarget.innerHTML]);
        prevButtonClick = event.currentTarget.innerHTML;
    }
    else if (prevButtonClick === "=") {
        currentQueue = currentQueue.concat([event.currentTarget.innerHTML]);
        prevButtonClick = event.currentTarget.innerHTML;
    }
    else {

    }
    
})

$(".result").click(function(event){

    if (prevButtonClick === ""){
        prevButtonClick = event.currentTarget.innerHTML;
    }
    else
    if (num_list.includes(prevButtonClick)){
        var onScreenNum = parseInt($("h1").text());
        currentQueue = currentQueue.concat([onScreenNum]);
        var rslt = eval(currentQueue);
        currentQueue = [rslt];
        displayNumOnScreen(rslt);
        prevButtonClick = event.currentTarget.innerHTML;
    }
    else
    if (op_list.includes(prevButtonClick)){
        prevButtonClick = event.currentTarget.innerHTML;
    }
    else
    if (prevButtonClick === "=") {
        prevButtonClick = event.currentTarget.innerHTML;
    }
})

const display = document.querySelector('#display p');
var cDisplay = "";

<<<<<<< HEAD
var num1 = "";
var num2 = "";
var numSolution = "";
var op = "";

=======
>>>>>>> 619f241307b3e0f5cfa8ec80bb09251b7967f2e1
const controls = document.querySelectorAll('button');
console.log(controls);

controls.forEach((node) => {
<<<<<<< HEAD
    node.addEventListener('click', function (e) {
        if (node.id.startsWith("num")) {
            if (op) {
                num2 += node.textContent;
            } else {
                num1 += node.textContent;
            }
            updateDisplay(node, 3);
        } else if (node.id.startsWith("op")) {
            // Checks if operation has already been selected once
            if (op) {
                operate(op);
                op = node.id.slice(2);
            } else {
                op = node.id.slice(2);
            }
            updateDisplay(node, 2);
        } else if (node.id.startsWith("clear")) {
            updateDisplay(node, 0);
        } else if (node.id.startsWith("eq")) {
            display.textContent = operate(op);
=======
    node.addEventListener('click', function(e) {
        if (node.id.startsWith("num")) {
            updateDisplay(node.id, 3);
        } else if (node.id.startsWith("op")) {
            updateDisplay(node.id, 2);
        } else if (node.id.startsWith("clear")) {
            updateDisplay(node.id, 0);
>>>>>>> 619f241307b3e0f5cfa8ec80bb09251b7967f2e1
        }
    });
    console.log(node.id);
})

<<<<<<< HEAD
function updateDisplay(node, start) {
    cDisplay = start > 0 ? (cDisplay + node.textContent) : "";
    display.textContent = cDisplay;
}

function operate(op) {
    if (!num2 && num1) {
        return num1;
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    switch (op) {
        case "/": numSolution = num1 / num2;
        case "*": numSolution = num1 * num2;
        case "-": numSolution = num1 - num2;
        case "+": numSolution = num1 + num2;
    }

    console.log(numSolution);
    cDisplay = numSolution;
    num1 = numSolution;
    num2 = "";
    op = "";
    return numSolution;
=======
function updateDisplay(id, start) {
    cDisplay = start > 0 ? (cDisplay + id.slice(start)) : "";
    display.textContent = cDisplay;
>>>>>>> 619f241307b3e0f5cfa8ec80bb09251b7967f2e1
}
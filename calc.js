const display = document.querySelector('#display p');
var displayCurrent = "";

const controls = document.querySelectorAll('button');
var arg1 = "";
var arg2 = "";
var solution = "";
var op = "";

controls.forEach(node => {
    node.addEventListener('click', function(e) {
        if (node.id.startsWith("no")) {
            if (!op) {
                // If expression was previously executed, clear the display and then populate
                arg1 += node.textContent
            } else {
                arg2 += node.textContent
            }

            updateDisplay(node);

            // Populate display with number
            // If expression was previously executed, clear the display and then populate
        }

        if (node.id.startsWith("op")) {
            updateDisplay(node);
            (!op) ? (op += node.id.slice(2)) : (operate());
            
            // Store operator in variable
            // If expression was previously executed, apply operation to resulting value
            // If there is already an operator stored, call the operate function and apply operation to resulting value.
        }

        if (node.id.startsWith("clear")) {
            updateDisplay();
            // Clear all variables and display
        }

        if (node.id.startsWith("eq")) {
            operate();
            // Call the operate function
            // If pressed after an operation, when the display is empty, or when dividing by zero, throw an error
        }
    })
})

function operate() {
    if (!arg2 && arg1) {
        solution = arg1;
        displayCurrent = solution.toString();
        display.textContent = displayCurrent;
    }

    arg1 = parseFloat(arg1);
    arg2 = parseFloat(arg2);

    switch (op) {
        case "/":
            if (!(arg2 === 0)) {
                solution = arg1 / arg2;
            } else {
                solution = "ERR CANNOT DIVIDE BY 0";
            }
            break;
        case "*":
            solution = arg1 * arg2;
            break;
        case "-":
            solution = arg1 - arg2;
            break;
        case "+":
            solution = arg1 + arg2;
            break;
    }

    displayCurrent = solution.toString();
    display.textContent = displayCurrent;

    arg2 = op = solution = "";
    arg1 = displayCurrent;


    // Converts numbers and operation symbols to expression and evaluates expression
    // Rounds decimal numbers to 9 places
}

function updateDisplay(node) {
    if(!node) {
        displayCurrent = "";
        arg1 = arg2 = op = solution = "";
        display.textContent = displayCurrent; 
    }

    displayCurrent += node.textContent;
    display.textContent = displayCurrent;
}

/* var num1 = "";
var num2 = "";
var numSolution = "";
var op = "";

const controls = document.querySelectorAll('button');
console.log(controls);

controls.forEach((node) => {
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
        }
    });
    console.log(node.id);
})

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
        case "/": 
            numSolution = num1 / num2;
            break;

        case "*": 
            numSolution = num1 * num2;
            break;

        case "-": 
            numSolution = num1 - num2;
            break;

        case "+": 
            numSolution = num1 + num2;
            break;
    }

    console.log(numSolution);
    cDisplay = numSolution;
    num1 = numSolution;
    num2 = "";
    op = "";
    return numSolution;
} */
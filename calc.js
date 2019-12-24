const display = document.querySelector('#display p');
var displayCurrent = "";

const controls = document.querySelectorAll('button');
var arg1 = "";
var arg2 = "";
var solution = "";
var op = "";
var wasEvaluated = false;

controls.forEach(node => {
    node.addEventListener('click', function(e) {
        if (node.id.startsWith("no")) {
            if (!op) {
                if (wasEvaluated) {
                    wasEvaluated = false;
                    arg1 = "";
                    displayCurrent = "";
                }
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
    wasEvaluated = true;


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
const display = document.querySelector('#display p');
var cDisplay = "";

const controls = document.querySelectorAll('button');
console.log(controls);

controls.forEach((node) => {
    node.addEventListener('click', function(e) {
        if (node.id.startsWith("num")) {
            updateDisplay(node.id, 3);
        } else if (node.id.startsWith("op")) {
            updateDisplay(node.id, 2);
        } else if (node.id.startsWith("clear")) {
            updateDisplay(node.id, 0);
        }
    });
    console.log(node.id);
})

function updateDisplay(id, start) {
    cDisplay = start > 0 ? (cDisplay + id.slice(start)) : "";
    display.textContent = cDisplay;
}
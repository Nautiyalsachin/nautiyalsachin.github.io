let currentTotal = 0;

let currentOperator;

const screen = document.querySelector(".screen");

function buttonClicked(value) { }

function init() {
    document.querySelector("calc-buttons")
    .addEventListener("click", function(event) {
        buttonClicked(event.target.innerText);
    })
}

init();
"use strict";

function display(val) {
    let operators = [...document.querySelectorAll('.operator')].map(el => el.textContent);
    let resultElement = document.querySelector('#input');
    let currentResult = resultElement.value;
    if (operators.includes(val) && operators.includes(currentResult.charAt(currentResult.length - 1))) {
        resultElement.value = currentResult.substring(0, currentResult.length - 1) + val;
    }
    else {
        resultElement.value += val;
    }
}
function solve() {
    let x = document.getElementById("input").value;
    let y = eval(x);
    document.getElementById("input").value = y;
}

function clr() {
    document.getElementById("input").value = "";
}
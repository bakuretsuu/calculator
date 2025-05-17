function add(a,b){
    return a + b;
};

function subtract(a,b){
    return a - b;
};

function multiply(a,b){
    return a * b;
};

function divide(a,b){
    return a / b;
};

let firstNumber = 0;
let secondNumber = 0;
let operator = '';

function operate(operator, firstNumber, secondNumber){
    if (operator === "add"){
        return add(firstNumber,secondNumber);
    } else if (operator === "subtract"){
        return subtract(firstNumber,secondNumber);
    } else if (operator === "multiply"){
        return multiply(firstNumber,secondNumber);
    } else if (operator === "divide"){
        return divide(firstNumber,secondNumber);
    }
}

let numberButton = document.querySelectorAll('.number');
let screen = document.querySelector('.screen');

let currentDisplay = "";
numberButton.forEach(button => {
    button.addEventListener('click', () =>{
        currentDisplay += button.textContent;
        screen.textContent = currentDisplay;
    });
});


let operatorButton = document.querySelectorAll('.operator');
operatorButton.forEach(button => {
    button.addEventListener('click', () =>{
        currentDisplay += button.textContent;
        screen.textContent = currentDisplay;
    });
});


 

 
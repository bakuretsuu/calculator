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
    if (operator == "+"){
        return add(firstNumber,secondNumber);
    } else if (operator == "-"){
        return subtract(firstNumber,secondNumber);
    } else if (operator == "x"){
        return multiply(firstNumber,secondNumber);
    } else if (operator == "÷"){
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
        let value = button.textContent;

        if (value === "=") {
            const result = evaluateExpression(currentDisplay);
            screen.textContent = result;
        } else if (value.toLowerCase() === "c") {
            currentDisplay = "";
            screen.textContent = "0";
        } else {
            currentDisplay += value;
            screen.textContent = currentDisplay;
        }        
    });
});


function evaluateExpression(expression){
    let number = expression.split(/\D/).map(num => parseFloat(num));
    let operator = expression.match(/[+\-x÷]/)?.[0]; 

  
    return operate(operator, number[0], number[1]);
}
 

 
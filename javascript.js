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
let firstNumberStr = "";
let secondNumberStr = "";

numberButton.forEach(button => {
    button.addEventListener('click', () =>{
        currentDisplay += button.textContent;
        screen.textContent = currentDisplay;

        if (operator === ''){
            firstNumberStr += button.textContent;
            screen.textContent = firstNumberStr;
        } else {
            secondNumberStr += button.textContent;
            screen.textContent = secondNumberStr;
        }
    });
});


let operatorButton = document.querySelectorAll('.operator');
operatorButton.forEach(button => {
    button.addEventListener('click', () =>{
        let value = button.textContent;

        if (value === "=") {
            let result = operate(operator, parseFloat(firstNumberStr), parseFloat(secondNumberStr));
            screen.textContent = result.toFixed(4);

            firstNumberStr = result.toString();
            secondNumberStr = '';
            operator = '';
            currentDisplay = result.toString();
        } else if (value.toLowerCase() === "c") {
            currentDisplay = '';
            firstNumberStr = '';
            secondNumberStr = '';
            operator = '';
            screen.textContent = '0';
        } else if (operator !== '' && firstNumberStr !== '' && secondNumberStr !== '' ) {
            let result = operate(operator, parseFloat(firstNumberStr), parseFloat(secondNumberStr));
            firstNumberStr = result.toString();
            secondNumberStr = '';
            operator = value;
            screen.textContent = result;
        }else {
            operator = value;
            screen.textContent = operator.toFixed(4);
        }        
    });
});



 

 
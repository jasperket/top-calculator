let hasOperations = false;
let completeNumbers = false;
let expression = '';

const display = document.querySelector('#display');

const operations = document.querySelectorAll('.operations');
operations.forEach(button => {
  button.addEventListener('click', () => {
    if(completeNumbers) {
        completeNumbers = false;
        addtoExpression(button);
        hasOperations = true;
    }
  });
});

const numbers = document.querySelectorAll('.nums');

numbers.forEach(button => {
    button.addEventListener('click', () => {
        completeNumbers = true;
        addtoExpression(button);
    });
});

function addtoExpression(button) {
    if(button.classList.contains("operations")) {
        expression = expression + " " + button.textContent + " ";
    } else {
        expression = expression + button.textContent;
    }
    
    display.textContent = expression;
}

function add(num1,num2) {
    return num1+num2;
}

function subtract(num1,num2) {
    return num1-num2;
}

function multiply(num1,num2) {
    return num1*num2;
}

function divide(num1,num2) {
    return num1/num2;
}

function operate(op,num1,num2) {
    switch (op) {
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);
        case '*':
            return multiply(num1,num2);
        case '/':
            return divide(num1,num2);
        default:
            break;
    }
}

console.log(operate(operator,num1,num2));
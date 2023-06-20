let operand1 = '0';
let operator = null;
let operand2 = '0';
let newOperator = false;

const upperdisplay = document.querySelector('#upperdisplay');
const lowerdisplay = document.querySelector('#lowerdisplay');

const operations = document.querySelectorAll('.operations');
operations.forEach(button => {
  button.addEventListener('click', () => {
    if(operator !== null) {
        operand1 = operate(operator,operand1,operand2);
    } else {
        operand1 = operand2;
    }
    operator = button.textContent;
    operand2 = operand1;
    upperdisplay.textContent = operand1 + " " + operator;
    lowerdisplay.textContent = operand2;
    newOperator = true;
  });
});

const numbers = document.querySelectorAll('.nums');
numbers.forEach(button => {
    button.addEventListener('click', () => {
        if(newOperator || operand2 === '0') {
            operand2 = button.textContent;
            newOperator = false;
        }
        else if (operand2.includes(".") && operand2.charAt(operand2.length - 1) == '0') {
            operand2 = operand2.slice(0,-1) + button.textContent;
        }
        else {
            operand2 = operand2 + button.textContent;
        }
        lowerdisplay.textContent = operand2;
    });
});

const equalsOp = document.querySelector('#equals');
equalsOp.addEventListener('click', () => {
    if(operator !== null) {
        upperdisplay.textContent = operand1 + " " + operator + " " + operand2 + " = ";
        operand2 = operate(operator,operand1,operand2);
        operator = null;
        lowerdisplay.textContent = operand2;
    }
});

const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', () => {
    operand1 = '0';
    operator = null;
    operand2 = '0';
    newOperator = false;
    lowerdisplay.textContent = operand2;
    upperdisplay.textContent = '';
})

const btnDecimalPoint = document.querySelector('#decPoint');
btnDecimalPoint.addEventListener('click', () => {
    operand2 = operand2 + ".0"
    lowerdisplay.textContent = operand2;
});

function add(num1,num2) {
    return parseFloat(num1)+parseFloat(num2);
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
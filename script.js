let operand1 = '0';
let operator = null;
let operand2 = '0';
let clearLowerDisplay = false;

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
    clearLowerDisplay = true;
    button.blur();
  });
});

const numbers = document.querySelectorAll('.nums');
numbers.forEach(button => {
    button.addEventListener('click', () => {
        if(clearLowerDisplay || operand2 === '0') {
            operand2 = button.textContent;
            clearLowerDisplay = false;
        }
        else if (operand2.includes(".") && operand2.charAt(operand2.length - 1) == '0') {
            operand2 = operand2.slice(0,-1) + button.textContent;
        }
        else {
            operand2 = operand2 + button.textContent;
        }
        lowerdisplay.textContent = operand2;
        if(upperdisplay.textContent.includes("=")) {
            upperdisplay.textContent = "";
        }
        button.blur();
    });
});

const equalsOp = document.querySelector('#equals');
equalsOp.addEventListener('click', () => {
    if(operator !== null) {
        upperdisplay.textContent = operand1 + " " + operator + " " + operand2 + " = ";
        operand2 = operate(operator,operand1,operand2);
        operator = null;
        operator1 = '0';
        lowerdisplay.textContent = operand2;
        clearLowerDisplay = true;
        button.blur();
    }
});

const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', () => {
    operand1 = '0';
    operator = null;
    operand2 = '0';
    clearLowerDisplay = false;
    lowerdisplay.textContent = operand2;
    upperdisplay.innerHTML = '&nbsp';
    btnClear.blur();
})

const btnDecimalPoint = document.querySelector('#decPoint');
btnDecimalPoint.addEventListener('click', () => {
    operand2 = operand2 + ".0"
    lowerdisplay.textContent = operand2;
    btnDecimalPoint.blur();
});

const btnDelete = document.querySelector('#delete');
btnDelete.addEventListener('click', () => {
    if(operand2.slice(-2) === '.0') {
        operand2 = operand2.slice(0,-1);
    }
    operand2 = operand2.slice(0,-1);
    if(operand2 === '') {
        operand2 = '0';
    }
    lowerdisplay.textContent = operand2;
    if(operand2.charAt(operand2.length-1) == '.') {
        operand2 = operand2 + '0';
    }
    btnDelete.blur();
});

document.addEventListener('keydown',(e) => {
    const button = document.querySelector(`button[data-key='${e.key}']`);
    if(button) {
        button.click();
    }
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
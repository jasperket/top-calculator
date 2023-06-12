let hasOperations = false;
let completeNumbers = true;
let expression = '0';

const display = document.querySelector('#display');

const operations = document.querySelectorAll('.operations');
operations.forEach(button => {
  button.addEventListener('click', () => {
    if(hasOperations && completeNumbers) {
        operateExpression();
        addtoExpression(button);
        completeNumbers = false;
    } else if(completeNumbers) {
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

const equalsOp = document.querySelector('#equals');
equalsOp.addEventListener('click', () => {
    if(completeNumbers && hasOperations) {
        operateExpression();
        hasOperations = false;
    }
});

const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', () => {
    expression = '0';
    display.textContent = expression;
    hasOperations = false;
    completeNumbers = true;
})

function operateExpression() {
    const expArray = expression.split(" ");
    display.textContent = operate(expArray[1],expArray[0],expArray[2]);
}

function addtoExpression(button) {
    if(button.classList.contains("operations")) {
        expression = expression + " " + button.textContent + " ";
    } else {
        const expArray = expression.split(" ");
        if(expArray[expArray.length-1] == '0') {
            expArray.pop();
            expArray.push(button.textContent);
            expression = expArray.join(" ");
        } else {
            expression = expression + button.textContent;
        }
    }
    
    display.textContent = expression;
}

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
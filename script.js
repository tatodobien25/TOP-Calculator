function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return `Snarky error!`;
    }
    return num1 / num2;

}

function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return substract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    }
}

function numberClickHandler(e) {
    if (operator === '') {
        if (firstOperand.length < 16) {
            firstOperand += this.textContent;
        }
        resultsDisplay.textContent = firstOperand;
    } else {
        if (secondOperand.length < 16) {
            secondOperand += this.textContent;
        }
        resultsDisplay.textContent = secondOperand;
    }
}

function operatorClickHandler(e) {
    if (operator === '') {
        operator = this.textContent;
        if (resultsDisplay.textContent != '' && firstOperand === '') {
            firstOperand = resultsDisplay.textContent;
        }
    } else {

        firstOperand = operate(operator, +firstOperand, +secondOperand).toString();
        resultsDisplay.textContent = firstOperand;
        secondOperand = '';
        operator = this.textContent;
    }
}

function equalsClickHandler(e) {
    if (operator === '') {
        return;
    } else {
        resultsDisplay.textContent = operate(operator, +firstOperand, +secondOperand).toString();
        operator = '';
        firstOperand = '';
        secondOperand = '';
    }
}
function clearClickHandler(e) {
    operator = '';
    firstOperand = '';
    secondOperand = '';
    resultsDisplay.textContent = '0';
}

function decPointClickHandler(e) {
    if (resultsDisplay.textContent.indexOf('.') != -1) return;
    if (operator === '') {
        if (firstOperand.length < 16) {
            firstOperand += this.textContent;
        }
        resultsDisplay.textContent = firstOperand;
    } else {
        if (secondOperand.length < 16) {
            secondOperand += this.textContent;
        }
        resultsDisplay.textContent = secondOperand;
    }

}

const allCalcKeys = Array.from(document.querySelectorAll('.calc-btn'));
const numberKeys = Array.from(document.querySelectorAll('.num-btn'));
const resultsDisplay = document.getElementById('result');
const operatorKeys = [document.getElementById('minus-btn'), document.getElementById('plus-btn'),
document.getElementById('divide-by-btn'), document.getElementById('multiply-by-btn')];
const equalsKey = document.getElementById('equals-btn');
const clearKey = document.getElementById('clear-btn');
const decPointKey = document.getElementById('dec-point-btn');
let firstOperand = '';
let secondOperand = '';
let operator = '';


numberKeys.forEach(key => key.addEventListener('click', numberClickHandler));
operatorKeys.forEach(key => key.addEventListener('click', operatorClickHandler));
equalsKey.addEventListener('click', equalsClickHandler);
clearKey.addEventListener('click', clearClickHandler);
decPointKey.addEventListener('click', decPointClickHandler);
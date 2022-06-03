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
    } else {
        return 'Operator is not valid';
    }
}

function numberClickHandler(e) {
    if (operator === '') {
        firstOperand += this.textContent;
        resultsDisplay.textContent = firstOperand;
    } else {
        secondOperand += this.textContent;
        historyDisplay.textContent = firstOperand + operator;
        resultsDisplay.textContent = secondOperand;
    }
}

function operatorClickHandler(e) {
    // console.log(this.textContent);
    if (operator === '') {
        operator = this.textContent;
    } else return;
}

function equalsClickHandler(e) {
    if (operator === '') {
        return;
    } else {
        historyDisplay.textContent = firstOperand + operator + secondOperand;
        resultsDisplay.textContent = operate(operator, +firstOperand, +secondOperand).toString();
    }
}
function clearClickHandler(e) {
    operator = '';
    firstOperand = '';
    secondOperand = '';
    historyDisplay.textContent = '';
    resultsDisplay.textContent = '0';
}

const numberKeys = Array.from(document.querySelectorAll('.num-btn'));
const historyDisplay = document.getElementById('history-input');
const resultsDisplay = document.getElementById('result');
const operatorKeys = [document.getElementById('minus-btn'), document.getElementById('plus-btn'),
document.getElementById('divide-by-btn'), document.getElementById('multiply-by-btn')];
const equalsKey = document.getElementById('equals-btn');
const clearKey = document.getElementById('clear-btn');
let firstOperand = '';
let secondOperand = '';
let operator = '';

numberKeys.forEach(key => key.addEventListener('click', numberClickHandler));
operatorKeys.forEach(key => key.addEventListener('click', operatorClickHandler));
equalsKey.addEventListener('click', equalsClickHandler);
clearKey.addEventListener('click', clearClickHandler);
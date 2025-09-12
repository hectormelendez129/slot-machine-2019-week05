/*accept user input with parsefloat
create let variables for num1 num2
activate buttons with eventlistener
create functions for each MDAS
add result to the dom with innertext
*/

document.querySelector('#addi').addEventListener('click', add);
document.querySelector('#sub').addEventListener('click', subtract);
document.querySelector('#multi').addEventListener('click', multiply);
document.querySelector('#divi').addEventListener('click', division);

function getNumbers() {
    const num1 = parseFloat(document.querySelector('#num1').value);
    const num2 = parseFloat(document.querySelector('#num2').value);
    return { num1, num2 };
}

function add() {
    const { num1, num2 } = getNumbers();
    let result = num1 + num2
    document.querySelector('#result').innerText = `${num1} + ${num2}= ${result}`
}

function subtract() {
    const { num1, num2 } = getNumbers();

    let result = num1 - num2
    document.querySelector('#result').innerText = `${num1} - ${num2}= ${result}`
}
function multiply() {
    const { num1, num2 } = getNumbers();

    let result = num1 * num2
    document.querySelector('#result').innerText = `${num1} * ${num2}= ${result}`
}
function division() {
    const { num1, num2 } = getNumbers();

    let result = num1 / num2
    if (num2 === 0) {
        document.querySelector('#result').innerText = 'Error: Second Number Cannot be 0' 
    } else {
        document.querySelector('#result').innerText = `${num1} / ${num2}= ${result}`
    }
}
    
function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
        
        const addResult = add(num1, num2);
        const subResult = sub(num1, num2);
        const mulResult = multiply(num1, num2);
        const divResult = div(num1, num2);

        const result = `Results:<br/><br/>
        Addition: ${addResult}   ( = ${num1} + ${num2})<br/>
        Substract: ${subResult}  ( = ${num1} - ${num2})<br/>
        <b>Multiplication: ${mulResult}  ( = ${num1} * ${num2})</b><br/>
        Division: ${divResult}   ( = ${num1} / ${num2})<br/>
        `;
        // Display the result
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function add(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Add the numbers
    return a + b;
}

function sub(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Substract the numbers
    return a - b;
}

function div(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Divide the numbers
    return a / b; // will result in a float
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = result;
}
        
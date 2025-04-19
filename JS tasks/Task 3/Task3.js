function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        if (num2 === 0) {
            result = "Cannot divide by zero!";
        } else {
            result = num1 / num2;
        }
    }

    document.getElementById("result").innerHTML = "The Result Is: " + result;
}

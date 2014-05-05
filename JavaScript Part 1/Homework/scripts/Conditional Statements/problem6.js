function solveQuadraticEq() {
    var a = parseFloat(document.getElementById('hw3-prob6-input-a').value);
    var b = parseFloat(document.getElementById('hw3-prob6-input-b').value);
    var c = parseFloat(document.getElementById('hw3-prob6-input-c').value);

    var resultField = document.getElementById('hw3-prob6-result');

    if (a === 0) {
        resultField.textContent = 'X = ' + (-c / b);
        return;
    }

    var discr = b * b - 4 * a * c;

    if (discr < 0) {
        resultField.style.color = 'red';
        resultField.textContent = 'Ø';
        return;
    }

    resultField.style.color = 'inherit';

    if (discr === 0) {
        resultField.textContent = 'X = ' + (-b / 2 * a);
        return;
    }

    var x1 = ((-b + Math.sqrt(discr)) / (2 * a)).toFixed(2);
    var x2 = ((-b - Math.sqrt(discr)) / (2 * a)).toFixed(2);

    resultField.innerHTML = 'X1 = ' + x1 + '<br />' + 'X2 = ' + x2;
}
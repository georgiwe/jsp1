function findMaxOfFive() {
    var num1 = parseFloat(document.getElementById('hw3-prob7-input-n1').value);
    var num2 = parseFloat(document.getElementById('hw3-prob7-input-n2').value);
    var num3 = parseFloat(document.getElementById('hw3-prob7-input-n3').value);
    var num4 = parseFloat(document.getElementById('hw3-prob7-input-n4').value);
    var num5 = parseFloat(document.getElementById('hw3-prob7-input-n5').value);

    if (checkNumericValues([num1, num2, num3, num4, num5]) === false) {
        alert('Invalid value(s)!');
        return;
    }

    // could do it with a loop,
    // but it' the conditional statements homework after all

    var max = num1;

    if (num2 > max) {
        max = num2;
    }

    if (num3 > max) {
        max = num3;
    }

    if (num4 > max) {
        max = num4;
    }

    if (num5 > max) {
        max = num5;
    }

    document.getElementById('hw3-prob7-result').textContent = 'Max = ' + max;
}
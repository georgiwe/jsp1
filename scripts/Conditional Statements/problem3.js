function findBiggest() {
    var num1 = parseInt(document.getElementById('hw3-prob3-input-num1').value);
    var num2 = parseInt(document.getElementById('hw3-prob3-input-num2').value);
    var num3 = parseInt(document.getElementById('hw3-prob3-input-num3').value);

    if (checkNumericValues([num1, num2, num3]) === false) {
        alert('Invalid value(s)!');
        return;
    }

    var biggest = num1;

    if (num1 < num2) {
        if (num2 > num3) {
            biggest = num2;
        } else {
            biggest = num3;
        }
    } else if (num1 < num3) {
        biggest = num3;
    }

    var resultField = document.getElementById('hw3-prob3-result');

    resultField.textContent = biggest;
}
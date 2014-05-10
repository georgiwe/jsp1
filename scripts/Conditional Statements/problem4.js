function sortDescending() {
    var num1 = parseFloat(document.getElementById('hw3-prob4-input-num1').value);
    var num2 = parseFloat(document.getElementById('hw3-prob4-input-num2').value);
    var num3 = parseFloat(document.getElementById('hw3-prob4-input-num3').value);

    if (checkNumericValues([num1, num2, num3]) === false) {
        alert('Invalid value(s)!');
        return;
    }

    var placeholder;

    if (num1 > num2) {
        if (num2 < num3) {
            placeholder = num3;
            num3 = num2;
            num2 = placeholder;
        }
    } else if (num1 < num2) { // not if they are equal, thats one less swap
        placeholder = num2;
        num2 = num1;
        num1 = placeholder;

        if (num2 < num3) {
            placeholder = num3;
            num3 = num2;
            num2 = placeholder;
        }
    }

    if (num1 < num2) {
        placeholder = num2;
        num2 = num1;
        num1 = placeholder;
    }

    var resultField = document.getElementById('hw3-prob4-result');

    resultField.textContent = num1 + ', ' + num2 + ', ' + num3;
}
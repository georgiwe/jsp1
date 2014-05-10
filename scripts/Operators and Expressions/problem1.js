function checkOddOrEven() {
    var inputField = document.getElementById('hw2-prob1-input');
    var integerValueOfInput = parseInt(inputField.value);

    var validInput = checkNumericValues([integerValueOfInput]);

    if (validInput === false) {
        alert(defaultErrorMessage);
        inputField.value = '';
        inputField.focus();
        return;
    }

    var typeOfNumber = 'odd';

    if (integerValueOfInput % 2 === 0) {
        typeOfNumber = 'even';
    }

    alert('The number ' + integerValueOfInput + ' is ' + typeOfNumber + '.');
}
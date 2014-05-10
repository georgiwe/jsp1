function checkIfThirdDigitIsSeven() {
    var inputField = document.getElementById('hw2-prob4-input');
    var inputText = inputField.value;
    var inputInt = parseInt(inputText);

    if (checkNumericValues(inputInt) === false) {
        alert(defaultErrorMessage);
        inputField.value = '';
        inputField.focus();
        return;
    }

    inputText = inputInt.toString();
    var thirdDigit = inputText[inputText.length - 3];

    alert('The third digit is ' +
        ((thirdDigit === '7') ? '' : 'not ') +
        'seven.');
}
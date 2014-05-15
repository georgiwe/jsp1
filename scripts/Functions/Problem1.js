function nameLastDigit() {

    var inputField = $('#hw6-prob1-input');
    var outputField = $('#hw6-prob1-result');
    var number = inputField.val();
    var lastDigit = number[number.length - 1];
    lastDigit = parseInt(lastDigit);

    // this is the method from problem 5
    // of the conditional statements homework
    var lastDigitName = getDigitName(lastDigit);

    if (lastDigitName === -1) {
        alert('Invalid input!');
        return;
    }

    outputField.html('The last digit is: ' + lastDigitName);
}
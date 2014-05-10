function checkIfPrime() {
    var inputField = document.getElementById('hw2-prob7-input');
    var number = parseInt(inputField.value);

    if (checkNumericValues(number) === false) {
        alert('Invalid input!');
        inputField.value = '';
        inputField.focus();
        return;
    }

    var isNegative = number < 0;

    number = Math.abs(number);

    if (number > 100) {
        alert('Number should not be greater than 100!');
        return;
    }

    for (var i = 2; i <= Math.sqrt(number) ; i++) {
        if (number % i === 0) {
            alert('The number ' +
                ((isNegative) ? -number : number) +
                ' is not prime.');
            return;
        }
    }

    alert('The number ' +
            ((isNegative) ? -number : number) +
            ' is prime.');
}